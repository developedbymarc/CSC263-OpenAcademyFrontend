import { listCourses } from "#lib/server/courses.ts";

export const load = async () => ({ courses: await listCourses() });
