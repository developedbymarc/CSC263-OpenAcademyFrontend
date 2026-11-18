import { isAdminOrRoot } from '#lib/utils/roles.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => ({
	isAdmin: isAdminOrRoot(locals.user),
	firstName: locals.user?.firstName ?? ''
});
