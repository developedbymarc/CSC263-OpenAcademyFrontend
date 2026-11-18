<script>
	import Admin from '#lib/pages/Dashboard/Admin.svelte';
	import LinkButton from '#lib/components/Button/LinkButton.svelte';
	import { resolve } from '$app/paths';
	let { data } = $props();
</script>

{#if data.isAdmin}
	<Admin />
{:else}
	<section class="flex flex-direction-column gap-1">
		<h2>Welcome{data.firstName ? `, ${data.firstName}` : ''}</h2>
		<p>Your learning dashboard is ready.</p>
		<LinkButton href={resolve('/explore')}>Explore courses</LinkButton>
	</section>
{/if}
