<script lang="ts">
	import { enhance as kitEnhance } from '$app/forms';
	import { superForm } from 'sveltekit-superforms';
	import { yupClient } from 'sveltekit-superforms/adapters';
	import { untrack } from 'svelte';
	import Button from '#lib/components/Button/Button.svelte';
	import Card from '#lib/components/Card/Card.svelte';
	import FileInput from '#lib/components/Inputs/FileInput.svelte';
	import TextInput from '#lib/components/Inputs/TextInput.svelte';
	import TextAreaInput from '#lib/components/Inputs/TextAreaInput.svelte';
	import FormMessage from '#lib/components/FormMessage/FormMessage.svelte';
	import { ProfileSchema, type IProfileData } from '#lib/forms.ts';
	import { humanizeDate } from '#lib/utils/utils.ts';

	let { data, form: actionData } = $props();
	const { form, errors, constraints, enhance, message } = superForm<IProfileData, string>(untrack(() => data.form), {
		validators: yupClient(ProfileSchema),
		validationMethod: 'oninput'
	});
</script>

<div class="flex flex-direction-column gap-2">
	<h2>Settings</h2>
	{#if data.loadError}<p class="clr-error">{data.loadError}</p>{/if}

	<form method="POST" action="?/profile" use:enhance class="flex flex-direction-column gap-1">
		<h3>Profile</h3>
		<div class="flex gap-1">
			<TextInput {...$constraints.firstName} bind:value={$form.firstName} errors={$errors.firstName} label="First Name" type="text" name="firstName" />
			<TextInput {...$constraints.lastName} bind:value={$form.lastName} errors={$errors.lastName} label="Last Name" type="text" name="lastName" />
		</div>
		{#if data.isInstructor}
			<TextInput {...$constraints.headline} bind:value={$form.headline} errors={$errors.headline} label="Headline" type="text" name="headline" />
			<TextAreaInput {...$constraints.bio} bind:value={$form.bio} errors={$errors.bio} label="Bio" name="bio" />
			<TextInput {...$constraints.expertise} bind:value={$form.expertise} errors={$errors.expertise} label="Expertise" type="text" name="expertise" />
		{/if}
		<FormMessage message={$message} />
		<div><Button type="submit">Save profile</Button></div>
	</form>

	<form method="POST" action="?/avatar" enctype="multipart/form-data" use:kitEnhance class="flex flex-direction-column gap-1">
		<h3>Avatar</h3>
		{#if data.avatarUrl}<img src={data.avatarUrl} alt="Your avatar" width="96" />{/if}
		<FileInput label="Upload new avatar" name="avatar" accept="image/*" />
		<div><Button type="submit">Upload</Button></div>
	</form>

	<section class="flex flex-direction-column gap-1">
		<div class="flex align-items-center justify-content-space-between">
			<h3>Signed-in devices</h3>
			<form method="POST" action="?/signOutAll" use:kitEnhance>
				<Button type="submit" accent="error" class="button-outline button-flat">Sign out everywhere</Button>
			</form>
		</div>
		{#each data.devices as d (d.refreshTokenId)}
			<Card class="flex align-items-center justify-content-space-between">
				<div>
					<p>{d.userAgent}</p>
					<p class="clr-muted fs1">{d.ip} · signed in {humanizeDate(d.createdAt)}{d.isPersistent ? ' · remembered' : ''}</p>
				</div>
				<form method="POST" action="?/signOutDevice" use:kitEnhance>
					<input type="hidden" name="familyId" value={d.refreshTokenFamilyId} />
					<Button type="submit" accent="error" class="button-outline button-flat">Sign out</Button>
				</form>
			</Card>
		{/each}
	</section>

	{#if actionData?.error}<p class="clr-error">{actionData.error}</p>{/if}
	{#if actionData?.success}<p class="clr-accent">{actionData.success}</p>{/if}
</div>
