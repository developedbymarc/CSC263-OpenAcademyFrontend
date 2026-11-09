import { mockData } from '#lib/utils/mockData.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    return { course: mockData.courses[parseInt(params.slug)] };
};
