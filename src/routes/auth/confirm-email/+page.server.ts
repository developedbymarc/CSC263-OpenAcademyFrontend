import { EmailSchema, type IEmailData } from '#lib/forms.js';
import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call } from '#lib/server/api.ts';

// /auth/confirm-email?userId=..&token=..  -> confirms the address (link from the email)
// /auth/confirm-email?email=..            -> "check your inbox" + resend form (after signup)
export const load = async ({ url, locals }) => {
  const userId = url.searchParams.get('userId');
  const token = url.searchParams.get('token');
  const form = await superValidate<IEmailData>({ email: url.searchParams.get('email') ?? '' }, yup(EmailSchema));

  if (userId && token) {
    const res = await call(() => locals.api.auth.authConfirmEmailGet({ userId, token }));
    return { form, state: res.ok ? 'confirmed' as const : 'failed' as const, error: res.ok ? null : res.error.message };
  }
  return { form, state: 'pending' as const, error: null };
};

export const actions = {
  default: async ({ request, locals }) => {
    const form = await superValidate(request, yup(EmailSchema));
    if (!form.valid) return fail(400, { form });

    const res = await call(() => locals.api.auth.authResendEmailConfirmationPost({ resendEmailConfirmationDto: { email: form.data.email } }));
    if (!res.ok) return applyApiError(form, res.error);

    return message(form, "Confirmation email sent.");
  }
};
