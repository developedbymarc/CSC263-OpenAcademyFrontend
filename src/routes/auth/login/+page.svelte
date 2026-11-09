<script lang="ts">
	import Login from "#lib/pages/Auth/Login.svelte";

	let { data } = $props();
</script>

<Login {data} />
