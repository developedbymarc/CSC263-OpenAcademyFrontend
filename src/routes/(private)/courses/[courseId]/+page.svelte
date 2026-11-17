<script lang="ts">
	import Course from "#lib/pages/Course/Course.svelte";

	let { data } = $props();
</script>

<Course course={data.course} />
