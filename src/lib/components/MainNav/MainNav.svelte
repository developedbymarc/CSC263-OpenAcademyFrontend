<script>
	import Button from "../Button/Button.svelte";
	import Themer from "../Themer/Themer.svelte";

</script>

<nav class="main-nav">
    <h1 class="nav__heading">ΘpΛcc</h1>

    <div class="flex-group--1-25 flex--align-center">
        <Button onclick={() => null} style="button--outline">Log in</Button>
        <Button onclick={() => null}>Sign up</Button>
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