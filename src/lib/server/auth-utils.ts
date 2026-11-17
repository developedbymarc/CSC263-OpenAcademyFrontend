import { EUserRole } from '#lib/types/entities/user.ts';

/** Frontend role label -> role string the backend expects on SignUpDto. Adjust if the backend uses other names. */
export const ROLE_TO_API: Record<EUserRole, string> = {
	[EUserRole.Student]: 'Student',
	[EUserRole.Teacher]: 'Instructor'
};

/** Only allow same-site relative redirects. */
export const safeRedirect = (to: string | null | undefined, fallback = '/dashboard') =>
	to && to.startsWith('/') && !to.startsWith('//') ? to : fallback;
