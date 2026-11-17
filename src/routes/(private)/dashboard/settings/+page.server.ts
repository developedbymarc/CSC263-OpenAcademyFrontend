import { ProfileSchema, type IProfileData } from '#lib/forms.js';
import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call } from '#lib/server/api.ts';

export const load = async ({ locals }) => {
	const [me, devices] = await Promise.all([
		call(() => locals.api.me.meInfoGet()),
		call(() => locals.api.auth.authDevicesSignedInPost())
	]);
	const info = me.ok ? me.data : null;
	const form = await superValidate<IProfileData>(
		{
			firstName: info?.generalInfo?.firstName ?? '',
			lastName: info?.generalInfo?.lastName ?? '',
			headline: info?.instructorProfile?.headline ?? '',
			bio: info?.instructorProfile?.bio ?? '',
			expertise: info?.instructorProfile?.expertise ?? ''
		},
		yup(ProfileSchema)
	);
	return {
		form,
		avatarUrl: info?.generalInfo?.avatarUrl ?? null,
		isInstructor: !!info?.instructorProfile,
		devices: devices.ok ? (devices.data.data ?? []) : [],
		loadError: me.ok ? null : me.error.message
	};
};

export const actions = {
	profile: async ({ request, locals }) => {
		const form = await superValidate(request, yup(ProfileSchema));
		if (!form.valid) return fail(400, { form });

		// PUT replaces the whole profile, so start from the current one.
		const me = await call(() => locals.api.me.meInfoGet());
		if (!me.ok) return applyApiError(form, me.error);
		const cur = me.data;
		const { firstName, lastName, headline, bio, expertise } = form.data;

		const res = await call(() =>
			locals.api.me.meInfoPut({
				updateMyInfoDto: {
					generalInfo: { firstName, lastName },
					studentProfile: cur.studentProfile ?? null,
					instructorProfile: cur.instructorProfile ? { headline, bio, expertise } : null,
					moderatorProfile: cur.moderatorProfile ?? null,
					adminProfile: cur.adminProfile ?? null,
					rootProfile: cur.rootProfile ?? null
				}
			})
		);
		if (!res.ok) return applyApiError(form, res.error);
		return message(form, 'Profile saved.');
	},

	avatar: async ({ request, locals }) => {
		const file = (await request.formData()).get('avatar');
		if (!(file instanceof File) || file.size === 0) return fail(400, { error: 'Choose an image first.' });
		const res = await call(() => locals.api.uploadAvatar(file));
		return res.ok ? { success: 'Avatar updated.' } : fail(res.error.status || 400, { error: res.error.message });
	},

	signOutDevice: async ({ request, locals }) => {
		const id = String((await request.formData()).get('familyId') ?? '');
		const res = await call(() => locals.api.auth.authSignoutDevicePost({ signOutDeviceDto: { refreshTokenFamilyId: id } }));
		return res.ok ? { success: 'Device signed out.' } : fail(400, { error: res.error.message });
	},

	signOutAll: async ({ locals }) => {
		const res = await call(() => locals.api.auth.authSignoutAllDevicesPost());
		return res.ok ? { success: 'Signed out everywhere.' } : fail(400, { error: res.error.message });
	}
};
