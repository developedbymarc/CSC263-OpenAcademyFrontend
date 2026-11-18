import type { Handle } from '@sveltejs/kit/hooks';
import { env } from '$env/dynamic/private';
import { call, createApi } from '#lib/server/api.ts';

// Must match Jwt:CookieName and RefreshToken:CookieName on the backend.
const ACCESS_COOKIE = env.ACCESS_COOKIE_NAME ?? 'AccessToken';
const REFRESH_COOKIE = env.REFRESH_COOKIE_NAME ?? 'RefreshToken';

export const handle: Handle = async ({ event, resolve }) => {
	const api = createApi(event);
	event.locals.api = api;
	event.locals.user = null;

	// Only our own session cookies count. Any other cookie (for example the CSRF one)
	// must not trigger backend calls for visitors who are not logged in.
	const hasAccess = !!event.cookies.get(ACCESS_COOKIE);
	const hasRefresh = !!event.cookies.get(REFRESH_COOKIE);

	if (hasAccess || hasRefresh) {
		// No access cookie at all: skip the pointless 401 and go straight to the refresh.
		let who = hasAccess ? await call(() => api.auth.authWhoamiGet()) : null;

		if ((!who || (!who.ok && who.error.status === 401)) && hasRefresh) {
			const refreshed = await call(() => api.auth.authRefreshPost());
			if (refreshed.ok) who = await call(() => api.auth.authWhoamiGet());
		}

		if (who?.ok) event.locals.user = who.data.data;
	}

	return resolve(event);
};
