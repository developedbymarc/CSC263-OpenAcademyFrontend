import { error } from '@sveltejs/kit';
import { getLessonAssets } from '#lib/server/courses.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent, locals }) => {
	const { course } = await parent();
	const lesson = course.modules.flatMap((m) => m.lessons).find((l) => l.id === params.lessonId);
	if (!lesson) error(404, 'Lesson not found');
	// Asset URLs are short-lived signed links, so they are fetched per visit rather than cached with the course.
	const assets = await getLessonAssets(locals.api, course.id, lesson.moduleId, lesson.id);
	return { lesson, assets };
};
