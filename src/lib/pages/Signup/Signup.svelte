<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import TextInput from "#lib/components/TextInput/TextInput.svelte";
	import { resolve } from "$app/paths";
    import { superForm } from 'sveltekit-superforms';
    import { untrack } from 'svelte';
	import { yupClient } from "sveltekit-superforms/adapters";
	import { SignUpSchema, type SignUpData } from "#lib/forms.ts";
	import Logo from "#lib/components/Logo/Logo.svelte";

    let { data } = $props();
    const { form, constraints, errors, enhance } = superForm<SignUpData>(untrack(() => data.form), {
      validators: yupClient(SignUpSchema),
      validationMethod: 'oninput'
    });
</script>

<section class="center">
    <form class="form-container" method="POST" use:enhance>
        <a href="{resolve('/')}" data-active="true"><span aria-hidden="true">&lt;</span> Go back</a>
        
        <h2 class="text-align-center"><span class="text-stroke clr-accent"><Logo /></span> / register</h2>
        <div class="form-container__inputs">
            <div class="flex gap-1">
                <TextInput 
                    {...$constraints.firstName}
                    bind:value={$form.firstName}
                    errors={$errors.firstName}

                    label="First Name" 
                    type="text" 
                    placeholder="Enter first name"
                    name="first_name" 
                />
                <TextInput 
                    {...$constraints.lastName}
                    bind:value={$form.lastName}
                    errors={$errors.lastName}

                    label="Last Name" 
                    type="text" 
                    placeholder="Enter last name"
                    name="last_name" 
                />
            </div>

            <TextInput 
                {...$constraints.email}
                bind:value={$form.email} 
                errors={$errors.email}
                
                label="Email" 
                type="email" 
                placeholder="Enter Email" 
                name="email"
            />
            <TextInput 
                {...$constraints.password}
                bind:value={$form.password}
                errors={$errors.password}

                label="Password" 
                type="password" 
                placeholder="Enter password" 
                name="password" 
            />
        </div>
        <div class="flex flex-direction-column gap-1">
            <Button type="submit">Register</Button>
            <p class="text-center">
                Already have an account? 
                <a href="{resolve('auth/login')}" data-active="true">Log in</a>
            </p>
        </div>
    </form>
</section>

<style>
    .form-container {
        min-width: 30vw;
    }
</style>