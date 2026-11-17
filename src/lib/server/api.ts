import { API_BASE_URL } from '$app/env/private';
import type { RequestEvent } from '@sveltejs/kit';
import { message, setError, type SuperValidated } from 'sveltekit-superforms';
import {
	AdminApi, AuthApi, BaseAPI, Configuration, CoursesApi, LessonApi, LessonAssetsApi,
	MeApi, ModuleApi, ResponseError, RootApi,
	type CourseCatalogPageDtoPage, type Middleware
} from '#lib/api/index.ts';

/** Name of the antiforgery header the backend expects (ASP.NET default is "X-CSRF-TOKEN"). */
const CSRF_HEADER = 'X-CSRF-TOKEN';
/** Multipart field name of the avatar upload. The generated MeApi.meAvatarPut() cannot send a file (see note in README). */
const AVATAR_FIELD = 'file';
const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * The generator emits an empty interface (`CourseCatalogPageDtoPage`, `{}`) for every int/long in the OpenAPI document
 * (order, page, pageSize, totalCount, ids, sizeBytes, ...). At runtime these are plain JSON numbers.
 */
export type ApiInt = CourseCatalogPageDtoPage;
/** number -> generated `{}` int type (for request bodies / query params). */
export const toInt = (x: number) => x as unknown as ApiInt;
/** generated `{}` int type -> number (for response values). */
export const fromInt = (x: ApiInt | null | undefined, fallback = 0) => (typeof x === 'number' ? x : Number(x ?? fallback));

// ---------- errors ----------

export type ApiFailure = {
	status: number;
	code: string;
	message: string;
	details?: Record<string, string[]> | null;
};
export type CallResult<T> = { ok: true; data: T } | { ok: false; error: ApiFailure };

async function toFailure(e: unknown): Promise<ApiFailure> {
	if (e instanceof ResponseError) {
		const status = e.response.status;
		try {
			const body = await e.response.clone().json();
			const err = body?.error ?? body;
			if (err?.message) return { status, code: err.code ?? String(status), message: err.message, details: err.details };
			// ASP.NET ProblemDetails / validation problem
			if (body?.errors) return { status, code: 'validation', message: body.title ?? 'Validation failed', details: body.errors };
			if (body?.title) return { status, code: String(status), message: body.title };
		} catch { /* not JSON */ }
		return { status, code: String(status), message: e.response.statusText || 'Request failed' };
	}
	return { status: 0, code: 'network', message: 'Could not reach the server' };
}

/** Runs an SDK call and normalises thrown errors and `{ success: false }` envelopes. */
export async function call<T>(fn: () => Promise<T>): Promise<CallResult<T>> {
	try {
		const data = await fn();
		const envl = data as { success?: boolean; error?: { code?: string; message?: string; details?: Record<string, string[]> } | null };
		if (envl && typeof envl === 'object' && envl.success === false) {
			return { ok: false, error: { status: 400, code: envl.error?.code ?? 'error', message: envl.error?.message ?? 'Request failed', details: envl.error?.details } };
		}
		return { ok: true, data };
	} catch (e) {
		return { ok: false, error: await toFailure(e) };
	}
}

/** Maps an API failure onto a superform: per-field errors when `details` match, otherwise a form message. */
export function applyApiError<T extends Record<string, unknown>>(form: SuperValidated<T, any, any>, error: ApiFailure) {
	const fields = Object.keys(form.data);
	let result: ReturnType<typeof setError> | undefined;
	for (const [key, msgs] of Object.entries(error.details ?? {})) {
		const field = fields.find((f) => f.toLowerCase() === key.toLowerCase());
		if (field) result = setError(form, field as never, msgs);
	}
	return result ?? message(form, error.message as never, { status: error.status >= 400 && error.status < 600 ? (error.status as 400) : 400 });
}

// ---------- cookies ----------

type ParsedCookie = { name: string; value: string; path: string; httpOnly: boolean; secure: boolean; sameSite?: 'lax' | 'strict' | 'none'; maxAge?: number; expires?: Date };

function parseSetCookie(header: string): ParsedCookie {
	const [pair, ...attrs] = header.split(';').map((s) => s.trim());
	const eq = pair.indexOf('=');
	const c: ParsedCookie = { name: pair.slice(0, eq), value: pair.slice(eq + 1), path: '/', httpOnly: false, secure: false };
	for (const a of attrs) {
		const [k, ...v] = a.split('=');
		const val = v.join('=');
		switch (k.toLowerCase()) {
			case 'path': c.path = val || '/'; break;
			case 'httponly': c.httpOnly = true; break;
			case 'secure': c.secure = true; break;
			case 'samesite': c.sameSite = val.toLowerCase() as ParsedCookie['sameSite']; break;
			case 'max-age': c.maxAge = Number(val); break;
			case 'expires': c.expires = new Date(val); break;
		}
	}
	return c;
}

// ---------- api factory ----------

/** Used only to expose BaseAPI.request() for the one endpoint the generator got wrong. */
class RawApi extends BaseAPI {
	put(path: string, body: FormData) {
		return this.request({ path, method: 'PUT', headers: {}, body });
	}
}

/**
 * Creates the SDK clients for one incoming request. Forwards the browser's cookies to the backend,
 * relays the backend's Set-Cookie headers back to the browser, and attaches the CSRF header to mutating calls.
 */
export function createApi(event: Pick<RequestEvent, 'request' | 'cookies' | 'fetch'>) {
	const jar = new Map<string, string>();
	for (const part of (event.request.headers.get('cookie') ?? '').split(';')) {
		const i = part.indexOf('=');
		if (i > 0) jar.set(part.slice(0, i).trim(), part.slice(i + 1).trim());
	}
	let csrf: string | null | undefined;

	const middleware: Middleware = {
		async pre({ url, init }) {
			const headers = new Headers(init.headers);
			const method = (init.method ?? 'GET').toUpperCase();
			if (!SAFE_METHODS.has(method) && !url.includes('/Auth/csrf')) {
				csrf ??= (await auth.authCsrfGet().catch(() => null))?.data?.requestToken ?? null;
				if (csrf) headers.set(CSRF_HEADER, csrf);
			}
			headers.set('Cookie', [...jar].map(([k, v]) => `${k}=${v}`).join('; '));
			return { url, init: { ...init, headers } };
		},
		async post({ response }) {
			for (const raw of response.headers.getSetCookie()) {
				const c = parseSetCookie(raw);
				const expired = c.maxAge === 0 || (c.expires && c.expires.getTime() <= Date.now());
				if (expired) jar.delete(c.name);
				else jar.set(c.name, c.value);
				// Re-emit with the backend's own attributes (an expired cookie stays expired). event.cookies.delete()
				// would use SvelteKit's defaults and the browser may ignore it if Secure/SameSite/prefix differ.
				event.cookies.set(c.name, expired ? '' : c.value, {
					path: c.path, httpOnly: c.httpOnly, secure: c.secure, sameSite: c.sameSite,
					maxAge: expired ? 0 : c.maxAge, expires: expired ? new Date(0) : c.expires, encode: (v) => v
				});
			}
		}
	};

	const config = new Configuration({
		basePath: API_BASE_URL.replace(/\/+$/, ''),
		fetchApi: event.fetch,
		middleware: [middleware]
	});
	const auth = new AuthApi(config);

	return {
		auth,
		me: new MeApi(config),
		courses: new CoursesApi(config),
		modules: new ModuleApi(config),
		lessons: new LessonApi(config),
		assets: new LessonAssetsApi(config),
		admin: new AdminApi(config),
		root: new RootApi(config),
		/** PUT /Me/avatar as multipart (the generated client sends no file). */
		uploadAvatar: (file: File) => {
			const body = new FormData();
			body.append(AVATAR_FIELD, file, file.name);
			return new RawApi(config).put('/Me/avatar', body);
		}
	};
}
export type Api = ReturnType<typeof createApi>;

// ---------- roles ----------

export const roleOf = (u: { role: string } | null | undefined) => u?.role?.toLowerCase() ?? '';
export const isAdminOrRoot = (u: { role: string } | null | undefined) => ['admin', 'root'].includes(roleOf(u));
export const isRoot = (u: { role: string } | null | undefined) => roleOf(u) === 'root';
