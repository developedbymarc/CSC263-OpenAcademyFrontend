import { type IResetPasswordData, ResetPasswordSchema } from '#lib/forms.js';
import { superValidate } from 'sveltekit-superforms';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';

export const load = async () => {
  const form = await superValidate<IResetPasswordData>(yup(ResetPasswordSchema));
  return { form };
};


export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, yup(ResetPasswordSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    console.log(form)
    return message(form, "Successfuly changed password");
  }
};
