import { StaffSchema, type IStaffData } from '#lib/forms.js';
import { superValidate, message } from 'sveltekit-superforms';
import { error, fail } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call, isAdminOrRoot, isRoot } from '#lib/server/api.ts';

export const load = async ({ locals }) => {
	if (!isAdminOrRoot(locals.user)) error(403, 'Admins only');
	const [moderators, admins] = await Promise.all([
		call(() => locals.api.admin.adminModeratorsGet()),
		isRoot(locals.user) ? call(() => locals.api.root.rootAdminsGet()) : null
	]);
	return {
		moderators: moderators.ok ? (moderators.data.data ?? []) : [],
		admins: admins?.ok ? (admins.data.data ?? []) : null,
		loadError: moderators.ok ? null : moderators.error.message,
		moderatorForm: await superValidate<IStaffData>(yup(StaffSchema), { id: 'moderator' }),
		adminForm: await superValidate<IStaffData>(yup(StaffSchema), { id: 'admin' })
	};
};

const create = (role: 'Moderator' | 'Admin', id: string) => async ({ request, locals }: { request: Request; locals: App.Locals }) => {
	const form = await superValidate(request, yup(StaffSchema), { id });
	if (!form.valid) return fail(400, { form });
	const { username, firstName, lastName, email, password, confirmedPassword } = form.data;
	const signUpDto = { userName: username, firstName, lastName, email, password, confirmedPassword, role };
	const res = await call(() =>
		role === 'Moderator' ? locals.api.admin.adminCreateModeratorPost({ signUpDto }) : locals.api.root.rootCreateAdminPost({ signUpDto })
	);
	return res.ok ? message(form, `${role} created.`) : applyApiError(form, res.error);
};

const remove = (kind: 'moderator' | 'admin') => async ({ request, locals }: { request: Request; locals: App.Locals }) => {
	const id = String((await request.formData()).get('id') ?? '');
	const res = await call(() =>
		kind === 'moderator'
			? locals.api.admin.adminDeleteModeratorModeratorIdDelete({ moderatorId: id })
			: locals.api.root.rootDeleteAdminAdminIdDelete({ adminId: id })
	);
	return res.ok ? { success: true } : fail(400, { error: res.error.message });
};

export const actions = {
	createModerator: create('Moderator', 'moderator'),
	createAdmin: create('Admin', 'admin'),
	deleteModerator: remove('moderator'),
	deleteAdmin: remove('admin')
};
