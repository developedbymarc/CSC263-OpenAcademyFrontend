import { error } from '@sveltejs/kit';
import { getCourse } from '#lib/server/courses.ts';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
	const course = await getCourse(params.courseId);
	if (!course) error(404, 'Course not found');
	return { course };
};
