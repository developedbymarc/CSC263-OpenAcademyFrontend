import { EmailSchema, type IEmailData } from '#lib/forms.js';
import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call } from '#lib/server/api.ts';

export const load = async () => ({ form: await superValidate<IEmailData>(yup(EmailSchema)) });

export const actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, yup(EmailSchema));
    if (!form.valid) return fail(400, { form });

    const res = await call(() => locals.api.auth.authResetPasswordIntentPost({ resetPasswordIntentDto: { email: form.data.email } }));
    if (!res.ok) return applyApiError(form, res.error);

    return message(form, "If that email exists, a reset link is on its way.");
  }
};
