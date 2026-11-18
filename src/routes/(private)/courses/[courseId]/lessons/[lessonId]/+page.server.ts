import { error, fail } from '@sveltejs/kit';
import { call } from '#lib/server/api.ts';
import { getLessonAssets } from '#lib/server/courses.ts';
import { canManageCourses } from '#lib/utils/roles.ts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent, locals }) => {
	const { course } = await parent();
	const lesson = course.modules.flatMap((m) => m.lessons).find((l) => l.id === params.lessonId);
	if (!lesson) error(404, 'Lesson not found');
	// Asset URLs are short-lived signed links, so they are fetched per visit rather than cached with the course.
	// Media is optional: a lesson that has none (the endpoint answers 404) or whose media cannot be listed must
	// still render its text, so a failure here is reported inline instead of turning the whole page into an error.
	const res = await getLessonAssets(locals.api, course.id, lesson.moduleId, lesson.id);
	if (!res.ok && res.error.status !== 404)
		console.warn(`Lesson assets failed (${res.error.status}) for lesson ${lesson.id}: ${res.error.message}`);
	return {
		lesson,
		assets: res.ok ? res.data : [],
		assetsError: res.ok || res.error.status === 404 ? null : res.error.message,
		canUploadAssets: canManageCourses(locals.user)
	};
};

export const actions: Actions = {
	uploadAsset: async ({ request, params, locals }) => {
		if (!canManageCourses(locals.user))
			error(403, 'Only instructors and admins can upload lesson assets');

		const formData = await request.formData();
		const file = formData.get('file');
		const moduleId = String(formData.get('moduleId') ?? '');
		if (!(file instanceof File) || !file.size || !moduleId) {
			return fail(400, { uploadError: 'Choose a file to upload.' });
		}

		const kind = file.type.startsWith('image/')
			? 'images'
			: file.type.startsWith('video/')
				? 'videos'
				: null;
		if (!kind) return fail(400, { uploadError: 'Choose an image or video file.' });

		const result = await call(() =>
			locals.api.uploadLessonAsset(params.courseId, moduleId, params.lessonId, file, kind)
		);
		if (!result.ok) {
			return fail(
				result.error.status >= 400 && result.error.status < 600 ? result.error.status : 502,
				{ uploadError: result.error.message }
			);
		}
		if (!result.data.data)
			return fail(502, { uploadError: 'The API did not return the uploaded asset.' });
		return { uploadSuccess: { fileName: file.name, assetId: result.data.data.id } };
	}
};
