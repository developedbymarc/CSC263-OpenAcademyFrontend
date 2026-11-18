import { isAdminOrRoot } from '#lib/utils/roles.ts';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent }) => {
	const { user } = await parent();
	return { isAdmin: isAdminOrRoot(user) };
};
