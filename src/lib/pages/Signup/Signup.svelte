<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import Card from "#lib/components/Card/Card.svelte";
	import TextInput from "#lib/components/TextInput/TextInput.svelte";
	import { resolve } from "$app/paths";
    import { superForm } from 'sveltekit-superforms';
    import { untrack } from 'svelte';
	import { yupClient } from "sveltekit-superforms/adapters";
	import { SignUpSchema } from "#lib/forms.ts";

    let { data } = $props();
    const { form, constraints, errors, enhance } = superForm(untrack(() => data.form), {
      validators: yupClient(SignUpSchema),
      validationMethod: 'oninput'
    });
</script>

<section class="center">
    <Card style="card--large">
        <form class="form-container" method="POST" use:enhance>
            <a href="{resolve('/')}" data-active="true">Go back</a>
            <h2 class="text--center"><span class="text--stroke clr--accent">ΘΛ</span> / register</h2>
            <div class="form-container__inputs">
                <TextInput 
                    {...$constraints.username}
                    bind:value={$form.username}
                    errors={$errors.username as string[]}

                    label="Username" 
                    type="text" 
                    placeholder="Enter username"
                    name="username" 
                />
                <TextInput 
                    {...$constraints.email}
                    bind:value={$form.email} 
                    errors={$errors.email as string[]}
                    
                    label="Email" 
                    type="email" 
                    placeholder="Enter Email" 
                    name="email"
                />
                <TextInput 
                    {...$constraints.password}
                    bind:value={$form.password}
                    errors={$errors.password as string[]}

                    label="Password" 
                    type="password" 
                    placeholder="Enter password" 
                    name="password" 
                />
            </div>
            <div class="flex flex--col flex-gap--1">
                <Button type="submit">Register</Button>
                <p class="text--center">
                    Already have an account? 
                    <a href="{resolve('auth/login')}" data-active="true">Log in</a>
                </p>
            </div>
        </form>

    </Card>
</section>

<style>
    .form-container {
        min-width: 30vw;
    }
</style>