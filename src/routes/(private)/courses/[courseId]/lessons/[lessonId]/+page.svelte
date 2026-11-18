<script lang="ts">
	import Lesson from '#lib/pages/Course/Lesson.svelte';

	let { data, form } = $props();
</script>

<Lesson
	course={data.course}
	lesson={data.lesson}
	assets={data.assets}
	assetsError={data.assetsError}
	canUploadAssets={data.canUploadAssets}
	{form}
/>
