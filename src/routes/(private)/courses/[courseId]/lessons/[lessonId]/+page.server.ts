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
	const assets = await getLessonAssets(locals.api, course.id, lesson.moduleId, lesson.id);
	if (!assets.ok)
		error(
			assets.error.status >= 400 && assets.error.status < 600 ? assets.error.status : 502,
			assets.error.message
		);
	return { lesson, assets: assets.data, canUploadAssets: canManageCourses(locals.user) };
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
