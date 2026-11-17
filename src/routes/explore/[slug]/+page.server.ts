import { error, fail, redirect } from '@sveltejs/kit';
import { call } from '#lib/server/api.ts';
import { getCourse } from '#lib/server/courses.ts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
    const res = await getCourse(locals.api, params.slug);
    if (!res.ok) error(res.error.status >= 400 && res.error.status < 600 ? res.error.status : 502, res.error.message);
    if (!res.data) error(404, 'Course not found');
    return { course: res.data, loggedIn: !!locals.user };
};

export const actions: Actions = {
    enroll: async ({ params, locals, url }) => {
        if (!locals.user) redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname)}`);
        const res = await call(() => locals.api.courses.coursesCourseIdEnrollmentsPost({ courseId: params.slug }));
        return res.ok ? { enrolled: true } : fail(res.error.status || 400, { enrollError: res.error.message });
    }
};
