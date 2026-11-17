<script lang="ts">
	import CourseExplore from "#lib/pages/CourseExplore/CourseExplore.svelte";
	import type { ICourse } from "#lib/types/entities/course.ts";

    let { data, form }: { data: { course: ICourse }, form?: { enrolled?: boolean, enrollError?: string } } = $props();
</script>

<CourseExplore {data} {form} />
