import { superValidate } from 'sveltekit-superforms';
import { yup } from 'sveltekit-superforms/adapters';
import { SearchSchema, type ISearchData } from '#lib/forms.ts';
import { searchCourses } from '#lib/server/courses.ts';

export const load = async ({ url, locals }) => {
	// The query string is the source of truth, so searches are linkable and survive reloads.
	// Invalid values (?page=abc, ?pageSize=7) fail validation and fall back to the schema defaults.
	const form = await superValidate<ISearchData>(url.searchParams, yup(SearchSchema), {
		errors: false
	});
	const q = form.valid ? form.data : (await superValidate<ISearchData>(yup(SearchSchema))).data;

	const res = await searchCourses(locals.api, {
		title: q.title,
		category: q.category,
		page: q.page,
		pageSize: q.pageSize
	});
	return {
		query: q,
		catalog: res.ok
			? res.data
			: { items: [], page: 1, pageSize: q.pageSize, totalCount: 0, totalPages: 1 },
		loadError: res.ok ? null : res.error.message
	};
};
