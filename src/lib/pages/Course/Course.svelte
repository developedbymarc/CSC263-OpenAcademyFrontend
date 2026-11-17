<script lang="ts">
	import { resolve } from "$app/paths";
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import type { ICourseDetail } from "#lib/types/entities/course.ts";

	let { course }: { course: ICourseDetail } = $props();

	const firstLesson = $derived(
		[...course.modules].sort((a, b) => a.order - b.order).flatMap((m) => [...m.lessons].sort((a, b) => a.order - b.order))[0]
	);
</script>

<article class="flex flex-direction-column gap-1-5">
	<h2>{course.title}</h2>
	<p>{course.description}</p>
	{#if course.categories.length > 0}
		<p class="clr-muted fs1">{course.categories.map((c) => c.name).join(" · ")}</p>
	{/if}

	{#if firstLesson}
		<div>
			<LinkButton href={resolve("/(private)/courses/[courseId]/lessons/[lessonId]", { courseId: course.id, lessonId: firstLesson.id })}>
				Start first lesson
			</LinkButton>
		</div>
	{/if}
</article>
