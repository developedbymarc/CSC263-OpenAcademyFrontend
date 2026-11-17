import { redirect } from '@sveltejs/kit';
import { call } from '#lib/server/api.ts';

export const POST = async ({ locals }) => {
	const res = await call(() => locals.api.auth.authSignoutPost());
	if (!res.ok) console.error('signout failed', res.error); // if this prints, the backend never sent the clearing cookies
	redirect(303, '/');
};
