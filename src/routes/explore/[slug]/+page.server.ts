import { error, fail, redirect } from '@sveltejs/kit';
import { call } from '#lib/server/api.ts';
import { getCourse } from '#lib/server/courses.ts';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const course = await getCourse(params.slug);
    if (!course) error(404, 'Course not found');
    return { course };
};

export const actions: Actions = {
    enroll: async ({ params, locals, url }) => {
        if (!locals.user) redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname)}`);
        const res = await call(() => locals.api.courses.coursesCourseIdEnrollmentsPost({ courseId: params.slug }));
        return res.ok ? { enrolled: true } : fail(res.error.status || 400, { enrollError: res.error.message });
    }
};
