<script lang="ts">
	import type { LayoutProps } from './$types';
	import MainNav from '#lib/components/MainNav/MainNav.svelte';
	import MainFooter from '#lib/components/MainFooter/MainFooter.svelte';
	import '#lib/styles/resets.css';
	import '#lib/styles/globals.scss';
	import '#lib/styles/containers.css';
	import '#lib/styles/common.scss';

	let { children, data }: LayoutProps = $props();
</script>

<MainNav user={data.user} />
<main class="main-container">
	{@render children()}
</main>
<MainFooter user={data.user} />
