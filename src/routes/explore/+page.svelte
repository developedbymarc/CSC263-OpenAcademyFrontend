<script lang="ts">
	import Explore from "#lib/pages/Explore/Explore.svelte";

    let { data } = $props();
</script>

<Explore {data} />
