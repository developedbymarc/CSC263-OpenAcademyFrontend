<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '#lib/components/Button/Button.svelte';
	import Card from '#lib/components/Card/Card.svelte';
	import FileInput from '#lib/components/Inputs/FileInput.svelte';
	import { EAssetType } from '#lib/types/entities/course.ts';

	let { data, form } = $props();
	const mb = (x: unknown) => (Number(x) / 1024 / 1024).toFixed(2);
</script>

<div class="flex flex-direction-column gap-2">
	<h2>Lesson assets</h2>

	<form method="POST" action="?/upload" enctype="multipart/form-data" use:enhance class="flex flex-direction-column gap-1">
		<FileInput label="Upload image or video" name="file" accept="image/*,video/*" />
		<div><Button type="submit">Upload</Button></div>
		{#if form?.error}<p class="clr-error">{form.error}</p>{/if}
	</form>

	{#if data.loadError}<p class="clr-error">{data.loadError}</p>{/if}

	<div class="flex flex-direction-column gap-1">
		{#each data.assets as asset (asset.id)}
			<Card class="flex gap-1 align-items-center justify-content-space-between">
				<div class="flex gap-1 align-items-center">
					{#if asset.type === EAssetType.Video}
						<!-- svelte-ignore a11y_media_has_caption -->
						<video src={asset.url} controls width="240"></video>
					{:else}
						<img src={asset.url} alt={asset.contentType} width="120" />
					{/if}
					<p>{asset.contentType} · {mb(asset.sizeBytes)} MB</p>
				</div>
				<form method="POST" action="?/delete" use:enhance>
					<input type="hidden" name="assetId" value={asset.id} />
					<Button type="submit" accent="error" class="button-outline button-flat">Delete</Button>
				</form>
			</Card>
		{:else}
			<p class="clr-muted">No assets yet.</p>
		{/each}
	</div>
</div>
