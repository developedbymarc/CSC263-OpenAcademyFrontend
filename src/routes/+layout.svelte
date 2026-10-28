<script lang="ts">
	import type { LayoutProps } from './$types';
	import MainNav from '#lib/components/MainNav/MainNav.svelte';
	import MainFooter from '#lib/components/MainFooter/MainFooter.svelte';
	import "#lib/styles/resets.css";
	import "#lib/styles/globals.scss";
	import "#lib/styles/containers.css";
	import "#lib/styles/common.scss"

	let { children }: LayoutProps = $props();
</script>

<MainNav />
<main class="main-container">
	{@render children()}
</main>
<MainFooter />
