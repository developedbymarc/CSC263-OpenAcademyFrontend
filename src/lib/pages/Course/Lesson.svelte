<script lang="ts">
	import { resolve } from "$app/paths";
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import { EAssetType, type ICourseDetail, type ILessonAssetView, type ILessonView } from "#lib/types/entities/course.ts";
	import { Carta, Markdown } from "carta-md";
	import "carta-md/default.css";

	let { course, lesson, assets = [] }: { course: ICourseDetail; lesson: ILessonView; assets?: ILessonAssetView[] } = $props();

	const carta = new Carta();
	const href = (lessonId: string) =>
		resolve("/(private)/courses/[courseId]/lessons/[lessonId]", { courseId: course.id, lessonId });

	const ordered = $derived(
		[...course.modules].sort((a, b) => a.order - b.order).flatMap((m) => [...m.lessons].sort((a, b) => a.order - b.order))
	);
	const idx = $derived(ordered.findIndex((l) => l.id === lesson.id));
	const prev = $derived(ordered[idx - 1]);
	const next = $derived(ordered[idx + 1]);
</script>

<article class="flex flex-direction-column gap-1-5">
	<header class="flex flex-direction-column gap-0-5">
		<h2>{lesson.title}</h2>
		<p class="clr-muted">{lesson.description}</p>
	</header>

	{#if lesson.content}
		<div class="lesson__content">
			<Markdown {carta} value={lesson.content} />
		</div>
	{:else}
		<p class="clr-muted">This lesson has no content yet.</p>
	{/if}

	{#if assets.length > 0}
		<section class="flex flex-direction-column gap-1" aria-label="Lesson media">
			{#each assets as asset (asset.id)}
				{#if asset.type === EAssetType.Video}
					<!-- svelte-ignore a11y_media_has_caption -->
					<video src={asset.url} controls preload="metadata"></video>
				{:else}
					<img src={asset.url} alt="{lesson.title} - illustration" />
				{/if}
			{/each}
		</section>
	{/if}

	<footer class="flex justify-content-space-between">
		{#if prev}<LinkButton class="button-outline button-flat" href={href(prev.id)}>
			<i class="fa-solid fa-arrow-left"></i> Previous
		</LinkButton>{:else}<span></span>{/if}
		{#if next}<LinkButton href={href(next.id)}>Next <i class="fa-solid fa-arrow-right"></i></LinkButton>{/if}
	</footer>
</article>
