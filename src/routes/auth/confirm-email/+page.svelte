<script lang="ts">
	import EmailForm from "#lib/pages/Auth/EmailForm.svelte";
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import { resolve } from "$app/paths";
	let { data } = $props();
</script>

{#if data.state === 'confirmed'}
	<section class="center flex flex-direction-column gap-1">
		<h2>Email confirmed</h2>
		<LinkButton href={resolve('/auth/login')}>Log in</LinkButton>
	</section>
{:else}
	<EmailForm
		{data}
		title="confirm email"
		submitLabel="Resend confirmation email"
		hint={data.state === 'failed'
			? `${data.error ?? 'This confirmation link is invalid or expired.'} Request a new one below.`
			: 'Check your inbox for a confirmation link. Didn\'t get it? Resend it below.'}
	/>
{/if}
