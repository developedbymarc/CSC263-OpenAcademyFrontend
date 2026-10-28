<script>
	import Button from "#lib/components/Button/Button.svelte";
	import Card from "#lib/components/Card/Card.svelte";
	import TextInput from "#lib/components/TextInput/TextInput.svelte";
	import { resolve } from "$app/paths";

</script>

<section class="center">
    <Card style="card--large">
        
        <div class="form-container">
            <a href="{resolve('/')}" data-active="true">Go back</a>
            <h2 class="text--center"><span class="text--stroke clr--accent">ΘΛ</span> / login</h2>
            <div class="form-container__inputs">
                <TextInput label="Username" type="text" placeholder="Enter username" name="username" required={true} />
                <TextInput label="Password" type="password" placeholder="Enter password" name="password" required={true} />
            </div>
            <div class="flex flex--col flex-gap--1">
                <Button>Login</Button>
                <p class="text--center">
                    Don't have an account? 
                    <a href="{resolve('/auth/signin')}" data-active="true">Register</a>
                </p>
            </div>
        </div>

    </Card>
</section>

<style>
    .form-container {
        min-width: 30vw;
    }
</style>