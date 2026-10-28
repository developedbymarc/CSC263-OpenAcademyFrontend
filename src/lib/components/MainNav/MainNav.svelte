<script>
	import Button from "../Button/Button.svelte";

</script>

<nav class="main-nav">
    <h1 class="nav__heading">ΘpΛcc</h1>

    <div class="flex-group--1-5">
        <Button text="Log in" onclick={() => null} style="button--outline" />
        <Button text="Sign up" onclick={() => null} />
    </div>
</nav>

<style>
    .main-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        /* background-color: var(--bg-overlay); */
        border-block-end: 2px solid var(--bg-overlay);
        padding: 1em 2.5em;
        margin-inline: 2em;

        .nav__heading { font-size: var(--fs-nav); }
    }
</style>