<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '#lib/components/Button/Button.svelte';
	import LinkButton from '#lib/components/Button/LinkButton.svelte';
	import { resolve } from '$app/paths';
	import type { ICourseDetail } from '#lib/types/entities/course.ts';
	import CourseExploreModule from './CourseExploreModule.svelte';
	import '#lib/styles/containers.css';

	let {
		data,
		form
	}: {
		data: { course: ICourseDetail; loggedIn: boolean; canEnroll: boolean; hasAccess: boolean };
		form?: { enrolled?: boolean; enrollError?: string };
	} = $props();
	const lessonCount = $derived(data.course.modules.reduce((n, m) => n + m.lessons.length, 0));
	// The API has no "am I enrolled" endpoint: `form.enrolled` reflects the action just taken, `hasAccess` means the
	// backend let us read the course content (already enrolled, or the course's instructor/an admin).
	const enrolled = $derived(!!form?.enrolled);
	const canOpen = $derived(enrolled || data.hasAccess);
</script>

<div class="course-explore-container flex flex-direction-column gap-2">
	<section class="flex flex-direction-column gap-0-75">
		{#if data.course.thumbnailUrl}
			<img
				class="course-explore__banner margin-block-end-1"
				src={data.course.thumbnailUrl}
				alt="Banner of {data.course.title}"
			/>
		{/if}
		<div class="course-explore__header flex align-items-center justify-content-space-between">
			<h2>{data.course.title}</h2>
			<div class="flex align-items-center gap-1">
				{#if canOpen}
					<LinkButton href={resolve('/(private)/courses/[courseId]', { courseId: data.course.id })}
						>{enrolled ? 'Start learning' : 'Open course'}</LinkButton
					>
				{/if}
				{#if (data.canEnroll || !data.loggedIn) && !data.hasAccess}
					<form method="POST" action="?/enroll" use:enhance>
						<Button type="submit" disabled={enrolled}
							>{enrolled ? 'Enrolled' : data.loggedIn ? 'Enroll' : 'Log in to enroll'}</Button
						>
					</form>
				{:else if !data.hasAccess}
					<p class="clr-muted">Only student accounts can enroll.</p>
				{/if}
			</div>
		</div>
		{#if form?.enrollError}<p class="clr-error">{form.enrollError}</p>{/if}
		{#if data.course.categories.length > 0}
			<p class="clr-muted fs1">{data.course.categories.map((c) => c.name).join(' · ')}</p>
		{/if}
		<article>{data.course.description}</article>
	</section>
	<section class="course-explore__content">
		<div>
			<h3>Course Content</h3>
			{#if data.course.contentLocked}
				<p class="clr-muted">
					{data.loggedIn
						? 'Enroll in this course to see its modules and lessons.'
						: 'Log in and enroll to see this course’s modules and lessons.'}
				</p>
			{:else}
				<p>{data.course.modules.length} modules - {lessonCount} lesson(s)</p>
			{/if}
		</div>
		{#if !data.course.contentLocked}
			<div class="course-explore__modules flex flex-direction-column gap-1 margin-block-start-1">
				{#each data.course.modules as module (module.id)}
					<CourseExploreModule
						title={module.title}
						description={module.description}
						lessons={module.lessons}
					/>
				{/each}
			</div>
		{/if}
	</section>
</div>

<style>
	.course-explore-container {
		.course-explore__banner {
			min-width: 100%;
			aspect-ratio: 16 / 4;
		}
	}
</style>
