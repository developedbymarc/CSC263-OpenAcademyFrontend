<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '#lib/components/Button/Button.svelte';
	import Card from '#lib/components/Card/Card.svelte';
	import StaffForm from '#lib/pages/Dashboard/StaffForm.svelte';

	let { data, form: actionData } = $props();
</script>

{#snippet people(list: { userId: string; firstName: string; lastName: string; email: string }[], action: string)}
	<div class="flex flex-direction-column gap-1">
		{#each list as p (p.userId)}
			<Card class="flex align-items-center justify-content-space-between">
				<p>{p.firstName} {p.lastName} <span class="clr-muted">· {p.email}</span></p>
				<form method="POST" {action} use:enhance>
					<input type="hidden" name="id" value={p.userId} />
					<Button type="submit" accent="error" class="button-outline button-flat">Remove</Button>
				</form>
			</Card>
		{:else}
			<p class="clr-muted">None yet.</p>
		{/each}
	</div>
{/snippet}

<div class="flex flex-direction-column gap-2">
	<h2>Users</h2>
	{#if data.loadError}<p class="clr-error">{data.loadError}</p>{/if}
	{#if actionData?.error}<p class="clr-error">{actionData.error}</p>{/if}

	<h3>Moderators</h3>
	{@render people(data.moderators, '?/deleteModerator')}
	<StaffForm data={data.moderatorForm} action="?/createModerator" title="Create moderator" />

	{#if data.admins}
		<h3>Admins</h3>
		{@render people(data.admins, '?/deleteAdmin')}
		<StaffForm data={data.adminForm} action="?/createAdmin" title="Create admin" />
	{/if}
</div>
