<script>
	import { resolve } from "$app/paths";
	import LinkButton from "../Button/LinkButton.svelte";
	import Themer from "../Themer/Themer.svelte";

</script>

<nav class="main-nav">
    <h1 class="nav__heading">
        <a href="{resolve('/')}">ΘpΛcc</a>
    </h1>

    <div class="flex flex-gap--1-25 flex--align-center">
        <LinkButton href={resolve("/auth/login")} style="button--outline">Log in</LinkButton>
        <LinkButton href={resolve("/auth/signin")}>Sign up</LinkButton>
        <p>|</p>
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
    }
</style>