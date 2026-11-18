import { CourseSchema, type ICourseData } from '#lib/forms.js';
import { superValidate, message } from 'sveltekit-superforms';
import { error, fail, redirect } from '@sveltejs/kit';
import { yup } from 'sveltekit-superforms/adapters';
import { applyApiError, call, toInt } from '#lib/server/api.ts';
import { canManageCourses } from '#lib/utils/roles.ts';

export const load = async ({ locals }) => {
	if (!canManageCourses(locals.user)) error(403, 'Only instructors and admins can create courses');
	const form = await superValidate<ICourseData>(yup(CourseSchema));
	return { form };
};

export const actions = {
	default: async ({ request, locals }) => {
		if (!canManageCourses(locals.user))
			error(403, 'Only instructors and admins can create courses');
		const form = await superValidate(request, yup(CourseSchema));
		if (!form.valid) return fail(400, { form });
		const { api } = locals;

		// 1. course
		const course = await call(() =>
			api.courses.coursesPost({
				createCourseRequest: { title: form.data.title, description: form.data.description }
			})
		);
		if (!course.ok) return applyApiError(form, course.error);
		const courseId = course.data.data!.id;

		// 2. modules, then 3. their lessons (the API only has per-parent create endpoints)
		for (const [mIdx, mod] of form.data.modules.entries()) {
			const m = await call(() =>
				api.modules.coursesCourseIdModulesPost({
					courseId,
					createModuleRequest: {
						title: mod.title,
						description: mod.description,
						order: toInt(mod.order ?? mIdx)
					}
				})
			);
			if (!m.ok)
				return failPartial(
					form,
					`Course ${courseId} was created, but module "${mod.title}" failed: ${m.error.message}`
				);
			const moduleId = m.data.data!.id;

			for (const [lIdx, lesson] of mod.lessons.entries()) {
				const l = await call(() =>
					api.lessons.coursesCourseIdModulesModuleIdLessonsPost({
						courseId,
						moduleId,
						createLessonRequest: {
							title: lesson.title,
							description: lesson.description,
							content: lesson.content,
							order: toInt(lesson.order ?? lIdx)
						}
					})
				);
				if (!l.ok)
					return failPartial(
						form,
						`Course ${courseId} was created, but lesson "${lesson.title}" failed: ${l.error.message}`
					);
			}
		}

		// Everything was created: leave the form and open the new course (throws, so nothing below runs).
		redirect(303, `/courses/${encodeURIComponent(courseId)}`);
	}
};

const failPartial = (form: Parameters<typeof message>[0], text: string) =>
	message(form, text as never, { status: 502 });
