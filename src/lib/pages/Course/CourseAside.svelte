<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import type { ICourseDetail } from "#lib/types/entities/course.ts";

	let { course }: { course: ICourseDetail } = $props();

	const modules = $derived([...course.modules].sort((a, b) => a.order - b.order));
	const lessonHref = (lessonId: string) =>
		resolve("/(private)/courses/[courseId]/lessons/[lessonId]", { courseId: course.id, lessonId });
	const overviewHref = $derived(resolve("/(private)/courses/[courseId]", { courseId: course.id }));
</script>

<aside class="course-aside flex flex-direction-column gap-1" aria-label="Course modules">
	<h2><a href={overviewHref} data-active={page.url.pathname === overviewHref}>{course.title}</a></h2>

	{#each modules as module (module.id)}
		<nav class="course-aside__module flex flex-direction-column gap-0-5" aria-label={module.title}>
			<h3 class="fs1">{module.title}</h3>
			<ul class="flex flex-direction-column gap-0-25">
				{#each [...module.lessons].sort((a, b) => a.order - b.order) as lesson (lesson.id)}
					{@const href = lessonHref(lesson.id)}
					<li>
						<a
							class="course-aside__lesson"
							{href}
							data-active={page.url.pathname === href}
							aria-current={page.url.pathname === href ? "page" : undefined}
						>
							<i class="fa-regular fa-circle-play" aria-hidden="true"></i>
							{lesson.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{:else}
		<p class="clr-muted">This course has no modules yet.</p>
	{/each}
</aside>

<style>
	.course-aside {
		padding: var(--cardSpacing);
		border-inline-end: var(--mainNavBorderThickness) solid var(--bgOverlay);
	}

	ul { list-style: none; padding: 0; margin: 0; }

	.course-aside__lesson {
		display: flex;
		gap: 0.5rem;
		padding: 0.35em 0.75em;
		border-radius: var(--globBorderRadius);
	}

	.course-aside__lesson[data-active="true"] {
		background-color: hsl(from var(--accent) h s l / var(--btnOutlineAlpha));
		text-decoration: none;
	}
</style>
