<script lang="ts">
	import Login from "#lib/pages/Login/Login.svelte";

	let { data } = $props();
</script>

<Login {data} />