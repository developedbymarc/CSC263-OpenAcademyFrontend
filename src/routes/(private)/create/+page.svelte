<script>
	import CourseForm from "#lib/pages/CourseCreation/CourseForm.svelte";

	let { data } = $props();
</script>

<CourseForm {data} />
