import { mockData } from '#lib/utils/mockData.ts';

// The generated SDK has no "list courses" / "get course" endpoints yet (only POST /courses, modules, lessons).
// Until the backend exposes them, the public catalogue still reads mock data. Swap these two functions for SDK calls then.
export const listCourses = async () => mockData.courses;
export const getCourse = async (id: string) => mockData.courses[parseInt(id)];
