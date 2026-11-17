<script lang="ts">
	import Lesson from "#lib/pages/Course/Lesson.svelte";

	let { data } = $props();
</script>

<Lesson course={data.course} lesson={data.lesson} assets={data.assets} />
