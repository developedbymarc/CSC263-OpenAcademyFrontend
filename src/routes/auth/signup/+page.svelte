<script lang="ts">
	import Signup from "#lib/pages/Signup/Signup.svelte";

	let { data } = $props();
</script>

<Signup {data} />