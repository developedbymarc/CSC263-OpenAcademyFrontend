import { error, fail, redirect } from '@sveltejs/kit';
import { call } from '#lib/server/api.ts';
import { getCourse } from '#lib/server/courses.ts';
import { canEnroll } from '#lib/utils/roles.ts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	// Students who have not enrolled are not allowed to list modules/lessons (403): show the public summary instead.
	const res = await getCourse(locals.api, params.slug, { allowLockedContent: true });
	if (!res.ok)
		error(
			res.error.status >= 400 && res.error.status < 600 ? res.error.status : 502,
			res.error.message
		);
	if (!res.data) error(404, 'Course not found');
	return {
		course: res.data,
		loggedIn: !!locals.user,
		canEnroll: canEnroll(locals.user),
		// The API has no "am I enrolled" endpoint, but if it let us read the content, the user may open it.
		hasAccess: !!locals.user && !res.data.contentLocked
	};
};

export const actions: Actions = {
	enroll: async ({ params, locals, url }) => {
		if (!locals.user) redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname)}`);
		if (!canEnroll(locals.user)) error(403, 'Only students can enroll in courses');
		const res = await call(() =>
			locals.api.courses.coursesCourseIdEnrollmentsPost({ courseId: params.slug })
		);
		return res.ok
			? { enrolled: true }
			: fail(res.error.status || 400, { enrollError: res.error.message });
	}
};
