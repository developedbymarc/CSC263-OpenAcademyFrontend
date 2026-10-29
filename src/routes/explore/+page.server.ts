import { mockData } from "#lib/utils/mockData.ts";

export const load = async () => {
    return { courses: mockData.courses }
};