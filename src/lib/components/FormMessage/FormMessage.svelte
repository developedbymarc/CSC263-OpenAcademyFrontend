<script lang="ts">
	import { page } from '$app/state';
	let { message }: { message?: string | null } = $props();
</script>

{#if message}
	<p class={page.status >= 400 ? 'clr-error' : 'clr-accent'} role="status">{message}</p>
{/if}
