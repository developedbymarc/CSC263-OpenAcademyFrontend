<script lang="ts">
	import CourseExplore from "#lib/pages/CourseExplore/CourseExplore.svelte";
	import type { ICourse } from "#lib/types/entities/course.ts";

    let { data }: { data: { course: ICourse } } = $props();
</script>

<CourseExplore {data} />
