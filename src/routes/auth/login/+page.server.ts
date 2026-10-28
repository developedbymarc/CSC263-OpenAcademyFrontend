import { type LoginData, LoginSchema } from '#lib/forms.js';
import { superValidate } from 'sveltekit-superforms';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';

export const load = async () => {
  const form = await superValidate<LoginData>(yup(LoginSchema));
  return { form };
};


export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, yup(LoginSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return message(form, "Successfuly logged in");
  }
};