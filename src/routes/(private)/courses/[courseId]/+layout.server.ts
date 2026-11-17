import { error } from '@sveltejs/kit';
import { getCourse } from '#lib/server/courses.ts';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, locals }) => {
	const res = await getCourse(locals.api, params.courseId);
	if (!res.ok) error(res.error.status >= 400 && res.error.status < 600 ? res.error.status : 502, res.error.message);
	if (!res.data) error(404, 'Course not found');
	return { course: res.data };
};
