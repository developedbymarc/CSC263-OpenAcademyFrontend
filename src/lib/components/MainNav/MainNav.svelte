<script>
	import { resolve } from "$app/paths";
	import LinkButton from "../Button/LinkButton.svelte";
	import Logo from "../Logo/Logo.svelte";
	import TextInput from "../TextInput/TextInput.svelte";
	import Themer from "../Themer/Themer.svelte";

</script>

<nav class="main-nav flex flex-gap--2 flex--align-center">
    <div class="main-nav__header flex flex-gap--1-5 flex--align-center">
        <h1 class="nav__heading">
            <a href="{resolve('/')}"><Logo /></a>
        </h1>
        <TextInput
            data-theme="accent"
            hideLabel
            name="search" 
            placeholder="Search courses..." 
            label="Search course" 
            type="text" 
        />
    </div>

    <div class="flex flex-gap--1-25 flex--align-center">
        <LinkButton style="button--outline button--flat" href={resolve("/auth/signup")}>Explore</LinkButton>
        <p class="clr--muted">|</p>
        <LinkButton href={resolve("/auth/login")} style="button--outline">Log in</LinkButton>
        <LinkButton href={resolve("/auth/signup")}>Sign up</LinkButton>
        <p class="clr--muted">|</p>
        <Themer />
    </div>
</nav>

<style>
    .main-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        /* background-color: var(--bg-overlay); */
        border-block-end: var(--main-nav-border-thickness) solid var(--bg-overlay);
        padding: var(--main-nav-spacing);
        margin-inline: var(--main-nav-margin);

        .nav__heading { font-size: var(--fs-nav); }
        .main-nav__header { 
            flex-grow: 1;
        }
    }
</style>