import { type IResetPasswordData, ResetPasswordSchema } from '#lib/forms.js';
import { superValidate, message } from 'sveltekit-superforms';
import { error, fail } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call } from '#lib/server/api.ts';

// The reset link in the email looks like /auth/reset-passw?userId=...&token=...
export const load = async ({ url }) => {
  if (!url.searchParams.get('userId') || !url.searchParams.get('token')) error(400, 'This password reset link is invalid.');
  const form = await superValidate<IResetPasswordData>(yup(ResetPasswordSchema));
  return { form };
};

export const actions = {
  default: async ({ request, locals, url }) => {
    const form = await superValidate(request, yup(ResetPasswordSchema));
    if (!form.valid) return fail(400, { form });

    const res = await call(() =>
      locals.api.auth.authResetPasswordPost({
        resetPasswordDto: {
          userId: url.searchParams.get('userId') ?? '',
          token: url.searchParams.get('token') ?? '',
          newPassword: form.data.password,
          confirmedNewPassword: form.data.repeatPassword
        }
      })
    );
    if (!res.ok) return applyApiError(form, res.error);

    return message(form, "Password changed. You can now log in.");
  }
};
