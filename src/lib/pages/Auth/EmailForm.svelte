<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import TextInput from "#lib/components/Inputs/TextInput.svelte";
	import FormMessage from "#lib/components/FormMessage/FormMessage.svelte";
	import { resolve } from "$app/paths";
	import { superForm } from 'sveltekit-superforms';
	import { untrack } from 'svelte';
	import { yupClient } from "sveltekit-superforms/adapters";
	import { EmailSchema, type IEmailData } from "#lib/forms.ts";

	let { data, title, submitLabel, hint }: { data: any, title: string, submitLabel: string, hint?: string } = $props();
	const { form, constraints, errors, enhance, message, delayed } = superForm<IEmailData, string>(untrack(() => data.form), {
		validators: yupClient(EmailSchema),
		validationMethod: 'oninput'
	});
</script>

<section class="center">
	<form class="form-container flex flex-direction-column gap-2" method="POST" use:enhance>
		<a href="{resolve('/auth/login')}" data-active="true"><span aria-hidden="true">&lt;</span> Back to login</a>
		<h2 class="text-align-center"><span class="text-stroke clr-accent">ΘΛ</span> / {title}</h2>
		{#if hint}<p>{hint}</p>{/if}
		<TextInput
			{...$constraints.email}
			bind:value={$form.email}
			errors={$errors.email}
			label="Email"
			type="email"
			placeholder="Enter Email"
			name="email"
		/>
		<FormMessage message={$message} />
		<Button type="submit" disabled={$delayed}>{submitLabel}</Button>
	</form>
</section>

<style>
	.form-container { min-width: var(--authFormMinWidth); }
</style>
