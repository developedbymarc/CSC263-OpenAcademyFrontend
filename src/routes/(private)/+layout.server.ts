import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
	if (!locals.user) redirect(303, `/auth/login?redirectTo=${encodeURIComponent(url.pathname + url.search)}`);
	return { user: locals.user };
};
