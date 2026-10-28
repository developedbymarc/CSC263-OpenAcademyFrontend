<script>
	import { resolve } from "$app/paths";
	import LinkButton from "../Button/LinkButton.svelte";
	import Logo from "../Logo/Logo.svelte";
	import Themer from "../Themer/Themer.svelte";

</script>

<nav class="main-nav flex flex-gap-2 align-items-center">
    <h1 class="nav__heading">
        <a href="{resolve('/')}"><Logo /></a>
    </h1>

    <div class="flex flex-gap-1-25 align-items-center">
        <LinkButton class="button-outline button-flat" href={resolve("/auth/signup")}>Explore</LinkButton>
        <p class="clr-muted">|</p>
        
        <LinkButton href={resolve("/auth/login")} class="button-outline">Log in</LinkButton>
        <LinkButton href={resolve("/auth/signup")}>Sign up</LinkButton>
        
        <p class="clr-muted">|</p>
        <Themer />
    </div>
</nav>

<style>
    .main-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        /* background-color: var(--bgOverlay); */
        border-block-end: var(--mainNavBorderThickness) solid var(--bgOverlay);
        padding: var(--mainNavSpacing);
        margin-inline: var(--mainNavMargin);

        .nav__heading { font-size: var(--ffNav); }
    }
</style>