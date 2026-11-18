import type { WhoAmIDto } from '#lib/api/index.ts';

const roleOf = (user: Pick<WhoAmIDto, 'role'> | null | undefined) =>
	user?.role.trim().toLowerCase() ?? '';

export const isAdminOrRoot = (user: Pick<WhoAmIDto, 'role'> | null | undefined) =>
	['admin', 'root'].includes(roleOf(user));

export const isRoot = (user: Pick<WhoAmIDto, 'role'> | null | undefined) => roleOf(user) === 'root';

export const canManageCourses = (user: Pick<WhoAmIDto, 'role'> | null | undefined) =>
	['teacher', 'instructor', 'admin', 'root'].includes(roleOf(user));

export const canEnroll = (user: Pick<WhoAmIDto, 'role'> | null | undefined) =>
	roleOf(user) === 'student';
