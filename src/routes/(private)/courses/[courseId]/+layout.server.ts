import { error, redirect } from '@sveltejs/kit';
import { getCourse } from '#lib/server/courses.ts';
import { canEnroll } from '#lib/utils/roles.ts';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, locals }) => {
	const res = await getCourse(locals.api, params.courseId);
	if (!res.ok) {
		// A student who is not enrolled cannot read the course content: send them to the public page to enroll.
		if (res.error.status === 403 && canEnroll(locals.user))
			redirect(303, `/explore/${encodeURIComponent(params.courseId)}`);
		error(res.error.status >= 400 && res.error.status < 600 ? res.error.status : 502, res.error.message);
	}
	if (!res.data) error(404, 'Course not found');
	return { course: res.data };
};
