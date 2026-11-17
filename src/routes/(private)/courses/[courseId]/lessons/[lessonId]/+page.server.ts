import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { course } = await parent();
	const lesson = course.modules.flatMap((m) => m.lessons).find((l) => l.id === params.lessonId);
	if (!lesson) error(404, 'Lesson not found');
	return { lesson };
};
