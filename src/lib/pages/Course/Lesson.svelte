<script lang="ts">
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
	import Button from '#lib/components/Button/Button.svelte';
	import LinkButton from '#lib/components/Button/LinkButton.svelte';
	import FileInput from '#lib/components/Inputs/FileInput.svelte';
	import {
		EAssetType,
		type ICourseDetail,
		type ILessonAssetView,
		type ILessonView
	} from '#lib/types/entities/course.ts';
	import { Carta, Markdown } from 'carta-md';
	import { sanitizeMarkdownHtml } from '#lib/utils/markdown.ts';
	import 'carta-md/default.css';

	let {
		course,
		lesson,
		assets = [],
		assetsError = null,
		canUploadAssets = false,
		form
	}: {
		course: ICourseDetail;
		lesson: ILessonView;
		assets?: ILessonAssetView[];
		assetsError?: string | null;
		canUploadAssets?: boolean;
		form?: { uploadError?: string; uploadSuccess?: { fileName: string; assetId: string } } | null;
	} = $props();

	const carta = new Carta({ sanitizer: sanitizeMarkdownHtml });
	const href = (lessonId: string) =>
		resolve('/(private)/courses/[courseId]/lessons/[lessonId]', { courseId: course.id, lessonId });

	const ordered = $derived(
		[...course.modules]
			.sort((a, b) => a.order - b.order)
			.flatMap((m) => [...m.lessons].sort((a, b) => a.order - b.order))
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

	{#if assetsError}
		<p class="clr-muted" role="status">Lesson media could not be loaded: {assetsError}</p>
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

	{#if canUploadAssets}
		<section class="flex flex-direction-column gap-1" aria-label="Upload lesson assets">
			<h3>Upload an image or video</h3>
			<form method="POST" action="?/uploadAsset" enctype="multipart/form-data" use:enhance>
				<input type="hidden" name="moduleId" value={lesson.moduleId} />
				<FileInput label="Choose a file" name="file" accept="image/*,video/*" required />
				<Button type="submit">Upload</Button>
			</form>
			{#if form?.uploadError}<p class="clr-error" role="status">{form.uploadError}</p>{/if}
			{#if form?.uploadSuccess}
				<p class="clr-accent" role="status">
					Uploaded {form.uploadSuccess.fileName} (asset ID: {form.uploadSuccess.assetId}).
				</p>
			{/if}
		</section>
	{/if}

	<footer class="flex justify-content-space-between">
		{#if prev}<LinkButton class="button-outline button-flat" href={href(prev.id)}>
				<i class="fa-solid fa-arrow-left"></i> Previous
			</LinkButton>{:else}<span></span>{/if}
		{#if next}<LinkButton href={href(next.id)}
				>Next <i class="fa-solid fa-arrow-right"></i></LinkButton
			>{/if}
	</footer>
</article>
