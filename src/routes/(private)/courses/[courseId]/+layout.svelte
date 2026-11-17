<script lang="ts">
	import CourseAside from "#lib/pages/Course/CourseAside.svelte";

	let { data, children } = $props();
</script>

<section class="course-view-container gap-2">
	<CourseAside course={data.course} />
	<div class="course-view__content">
		{@render children()}
	</div>
</section>

<style>
	@container main (min-width: 120ch) {
		.course-view-container { display: grid; grid-template-columns: var(--courseViewGridColumns); align-items: start; }
	}
</style>
