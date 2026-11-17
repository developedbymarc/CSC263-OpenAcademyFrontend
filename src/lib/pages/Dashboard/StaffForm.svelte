<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { yupClient } from 'sveltekit-superforms/adapters';
	import { untrack } from 'svelte';
	import Button from '#lib/components/Button/Button.svelte';
	import TextInput from '#lib/components/Inputs/TextInput.svelte';
	import FormMessage from '#lib/components/FormMessage/FormMessage.svelte';
	import { StaffSchema, type IStaffData } from '#lib/forms.ts';

	let { data, action, title }: { data: any; action: string; title: string } = $props();
	const { form, errors, constraints, enhance, message } = superForm<IStaffData, string>(untrack(() => data), {
		validators: yupClient(StaffSchema),
		validationMethod: 'oninput',
		resetForm: true
	});
</script>

<form method="POST" {action} use:enhance class="flex flex-direction-column gap-1">
	<h3>{title}</h3>
	<TextInput {...$constraints.username} bind:value={$form.username} errors={$errors.username} label="Username" type="text" name="username" />
	<div class="flex gap-1">
		<TextInput {...$constraints.firstName} bind:value={$form.firstName} errors={$errors.firstName} label="First Name" type="text" name="firstName" />
		<TextInput {...$constraints.lastName} bind:value={$form.lastName} errors={$errors.lastName} label="Last Name" type="text" name="lastName" />
	</div>
	<TextInput {...$constraints.email} bind:value={$form.email} errors={$errors.email} label="Email" type="email" name="email" />
	<TextInput {...$constraints.password} bind:value={$form.password} errors={$errors.password} label="Password" type="password" name="password" />
	<TextInput {...$constraints.confirmedPassword} bind:value={$form.confirmedPassword} errors={$errors.confirmedPassword} label="Confirm Password" type="password" name="confirmedPassword" />
	<FormMessage message={$message} />
	<div><Button type="submit">Create</Button></div>
</form>
