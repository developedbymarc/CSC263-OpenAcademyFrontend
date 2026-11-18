<script lang="ts">
	import { SvelteURLSearchParams } from 'svelte/reactivity';
	import { resolve } from '$app/paths';
	import Button from '#lib/components/Button/Button.svelte';
	import LinkButton from '#lib/components/Button/LinkButton.svelte';
	import CourseCard from '#lib/components/Card/CourseCard.svelte';
	import SelectInput from '#lib/components/Inputs/SelectInput.svelte';
	import TextInput from '#lib/components/Inputs/TextInput.svelte';
	import { PAGE_SIZES, type ISearchData } from '#lib/forms.ts';
	import type { ICatalogPage } from '#lib/types/entities/course.ts';
	import ExploreHead from './ExploreHead.svelte';

	type IDataProps = {
		data: { query: ISearchData; catalog: ICatalogPage; loadError: string | null };
	};

	const FORM_ID = 'explore-filters';
	let { data }: IDataProps = $props();

	// Draft filter values. They are re-synced whenever a new result set arrives (search, paging, back button).
	let title = $state('');
	let category = $state('');
	let pageSize = $state('12');
	let verticalCards = $state(false);
	$effect(() => {
		title = data.query.title;
		category = data.query.category;
		pageSize = String(data.query.pageSize);
	});

	const courses = $derived(data.catalog.items);

	// Categories found in the current results, offered as one-click filters.
	const categoryHints = $derived([
		...new Map(data.catalog.items.flatMap((c) => c.categories).map((c) => [c.slug, c])).values()
	]);

	const queryFor = (overrides: Partial<Record<keyof ISearchData, string | number>>) => {
		const q = new SvelteURLSearchParams();
		for (const [k, v] of Object.entries({ ...data.query, ...overrides }))
			if (v !== '' && v != null) q.set(k, String(v));
		return `?${q}`;
	};
	const hrefFor = (overrides: Partial<Record<keyof ISearchData, string | number>>) =>
		`${resolve('/explore')}${queryFor(overrides)}`;

	const hasFilters = $derived(!!(data.query.title || data.query.category));
	const firstShown = $derived(
		data.catalog.totalCount === 0 ? 0 : (data.catalog.page - 1) * data.catalog.pageSize + 1
	);
	const lastShown = $derived(firstShown === 0 ? 0 : firstShown + data.catalog.items.length - 1);
</script>

<!-- One GET form drives the search box (in ExploreHead) and the sidebar; the URL query string is the state. -->
<form id={FORM_ID} method="GET" action={resolve('/explore')} data-sveltekit-keepfocus></form>

<ExploreHead bind:title formId={FORM_ID} />
<section class="explore-container gap-2">
	<aside class="explore__filters flex flex-direction-column gap-1">
		<h3>Refine your search</h3>

		<TextInput
			bind:value={category}
			form={FORM_ID}
			label="Category"
			name="category"
			placeholder="e.g. mathematics"
			type="text"
		/>
		{#if categoryHints.length > 0}
			<div class="flex gap-0-5 flex-wrap">
				{#each categoryHints as c (c.slug)}
					<LinkButton
						class="explore__category"
						href={hrefFor({ category: c.slug, page: 1 })}
						data-active={data.query.category === c.slug}
					>
						{c.name}
					</LinkButton>
				{/each}
			</div>
		{/if}

		<SelectInput
			bind:value={pageSize}
			form={FORM_ID}
			id="explore-page-size"
			label="Results per page"
			name="pageSize"
			options={PAGE_SIZES.map(String)}
			containerClass="flex-direction-column"
		/>

		<Button type="submit" form={FORM_ID}>Apply</Button>
		{#if hasFilters}
			<LinkButton class="button-outline button-flat" href={resolve('/explore')}
				>Clear all</LinkButton
			>
		{/if}
	</aside>

	<div class="explore__content flex flex-direction-column gap-1">
		<div class="content__options flex align-items-center justify-content-end gap-2">
			<p>
				{#if data.catalog.totalCount > 0}
					<b>{firstShown}–{lastShown}</b> of <b>{data.catalog.totalCount}</b> results
				{:else}
					<b>0</b> results
				{/if}
			</p>
			<div class="flex gap-1">
				<Button
					onclick={() => (verticalCards = false)}
					class="button-flat button-outline"
					data-active={verticalCards}
				>
					<i class="fa-solid fa-grip-horizontal"></i>
				</Button>
				<Button
					onclick={() => (verticalCards = true)}
					class="button-flat button-outline"
					data-active={!verticalCards}
				>
					<i class="fa-solid fa-grip-vertical"></i>
				</Button>
			</div>
		</div>

		{#if data.loadError}
			<p class="clr-error center">Could not load courses: {data.loadError}</p>
		{/if}

		{#if courses.length > 0}
			<div class="content__results gap-1-5" data-vertical={verticalCards}>
				{#each courses as course (course.id)}
					<CourseCard {course} mode={verticalCards ? 'compact' : 'stretch'} />
				{/each}
			</div>

			{#if data.catalog.totalPages > 1}
				<nav
					class="explore__pagination flex align-items-center justify-content-center gap-1"
					aria-label="Pagination"
				>
					{#if data.catalog.page > 1}
						<LinkButton
							class="button-outline button-flat"
							href={hrefFor({ page: data.catalog.page - 1 })}
							rel="prev">Previous</LinkButton
						>
					{/if}
					<span>Page <b>{data.catalog.page}</b> of {data.catalog.totalPages}</span>
					{#if data.catalog.page < data.catalog.totalPages}
						<LinkButton
							class="button-outline button-flat"
							href={hrefFor({ page: data.catalog.page + 1 })}
							rel="next">Next</LinkButton
						>
					{/if}
				</nav>
			{/if}
		{:else if !data.loadError}
			<h3 class="center">Sorry, no results were found!</h3>
		{/if}
	</div>
</section>

<style>
	.explore-container {
		display: grid;
		grid-template-columns: auto;
		max-inline-size: var(--exploreContainerSize);
		margin-inline: auto;

		.content__results[data-vertical='false'] {
			display: flex;
			flex-direction: column;
		}

		.content__results[data-vertical='true'] {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(444px, 1fr));
		}
	}

	:global(.explore__category) {
		padding: 0.2em 0.7em;
		border-radius: var(--globBorderRadius);
		border: 1px solid var(--bgOverlay);
	}
	:global(.explore__category[data-active='true']) {
		background-color: hsl(from var(--accent) h s l / var(--btnOutlineAlpha));
	}

	@container main (min-width: 120ch) {
		.explore-container {
			grid-template-columns: var(--exploreContainerColumns);
		}
	}
</style>
