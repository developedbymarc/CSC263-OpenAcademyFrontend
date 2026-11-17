import { type ISignUpData, SignUpSchema } from '#lib/forms.js';
import { superValidate } from 'sveltekit-superforms';
import { fail, redirect } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call } from '#lib/server/api.ts';
import { ROLE_TO_API } from '#lib/server/auth-utils.ts';

export const load = async () => {
  const form = await superValidate<ISignUpData>(yup(SignUpSchema));
  return { form };
};

export const actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, yup(SignUpSchema));
    if (!form.valid) return fail(400, { form });

    const { username, firstName, lastName, email, password, confirmedPassword, role } = form.data;
    const res = await call(() =>
      locals.api.auth.authSignupPost({
        signUpDto: { userName: username, firstName, lastName, email, password, confirmedPassword, role: ROLE_TO_API[role] }
      })
    );
    if (!res.ok) return applyApiError(form, res.error);

    redirect(303, `/auth/confirm-email?email=${encodeURIComponent(email)}`);
  }
};
