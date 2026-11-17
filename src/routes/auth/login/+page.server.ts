import { type ILoginData, LoginSchema } from '#lib/forms.js';
import { superValidate } from 'sveltekit-superforms';
import { fail, redirect } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call } from '#lib/server/api.ts';
import { safeRedirect } from '#lib/server/auth-utils.ts';

export const load = async ({ locals, url }) => {
  if (locals.user) redirect(303, safeRedirect(url.searchParams.get('redirectTo')));
  const form = await superValidate<ILoginData>(yup(LoginSchema));
  return { form };
};

export const actions = {
  default: async ({ request, locals, url }) => {
    const form = await superValidate(request, yup(LoginSchema));
    if (!form.valid) return fail(400, { form });

    const res = await call(() =>
      locals.api.auth.authSigninPost({
        signInDto: { email: form.data.email, password: form.data.password, rememberMe: form.data.remember }
      })
    );
    if (!res.ok) return applyApiError(form, res.error);

    redirect(303, safeRedirect(url.searchParams.get('redirectTo')));
  }
};
