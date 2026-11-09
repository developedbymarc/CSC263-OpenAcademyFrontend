<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import TextInput from "#lib/components/Inputs/TextInput.svelte";
	import { resolve } from "$app/paths";
    import { superForm } from 'sveltekit-superforms';
    import { untrack } from 'svelte';
	import { yupClient } from "sveltekit-superforms/adapters";
	import { ResetPasswordSchema, type IResetPasswordData } from "#lib/forms.ts";

    let { data } = $props();
    const { form, constraints, errors, enhance } = superForm<IResetPasswordData>(untrack(() => data.form), {
      validators: yupClient(ResetPasswordSchema),
      validationMethod: 'oninput',
      dataType: "json"
    });
</script>

<section class="center">
    <form class="form-container flex flex-direction-column gap-2" method="POST" use:enhance>
        <a href="{resolve('/')}" data-active="true"><span aria-hidden="true">&lt;</span> Go back</a>

        <h2 class="text-align-center"><span class="text-stroke clr-accent">ΘΛ</span> / reset password</h2>
        <div class="form-container__inputs flex flex-direction-column gap-1-25">
            <TextInput
                {...$constraints.password}
                bind:value={$form.password}
                errors={$errors.password}

                label="New password"
                type="password"
                placeholder="Enter password"
                name="password"
            />
            <TextInput
                {...$constraints.repeatPassword}
                bind:value={$form.repeatPassword}
                errors={$errors.repeatPassword}

                label="Confirm Password"
                type="text"
                placeholder="Enter same password"
                name="repeatPassword"
            />
        </div>
        <div class="flex flex-direction-column gap-1">
            <Button type="submit">Reset Password</Button>
        </div>
    </form>
</section>

<style>
    .form-container {
        min-width: var(--authFormMinWidth);
    }
</style>
