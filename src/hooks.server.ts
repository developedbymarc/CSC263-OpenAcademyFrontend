import type { Handle } from '@sveltejs/kit/hooks';
import { call, createApi } from '#lib/server/api.ts';

export const handle: Handle = async ({ event, resolve }) => {
	const api = createApi(event);
	event.locals.api = api;
	event.locals.user = null;

	// Only talk to the backend when the browser actually has cookies.
	if (event.request.headers.get('cookie')) {
		let who = await call(() => api.auth.authWhoamiGet());
		if (!who.ok && who.error.status === 401) {
			const refreshed = await call(() => api.auth.authRefreshPost());
			if (refreshed.ok) who = await call(() => api.auth.authWhoamiGet());
		}
		if (who.ok) event.locals.user = who.data.data;
	}

	return resolve(event);
};
