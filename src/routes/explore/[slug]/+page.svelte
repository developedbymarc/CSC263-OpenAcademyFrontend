<script lang="ts">
	import CourseExplore from "#lib/pages/CourseExplore/CourseExplore.svelte";
	import type { ICourseDetail } from "#lib/types/entities/course.ts";

    let { data, form }: { data: { course: ICourseDetail, loggedIn: boolean }, form?: { enrolled?: boolean, enrollError?: string } } = $props();
</script>

<CourseExplore {data} {form} />
