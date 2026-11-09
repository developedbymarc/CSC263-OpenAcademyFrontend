<script lang="ts">
	import Signup from "#lib/pages/Auth/Signup.svelte";

	let { data } = $props();
</script>

<Signup {data} />
