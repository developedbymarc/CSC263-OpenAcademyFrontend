<script lang="ts">
	import type { ThemeOptions } from "#lib/types/components/types.ts";

    let theme: ThemeOptions = $state("dark");

    const updateTheme = () => {
        document.startViewTransition(() => {
            document.body.dataset["theme"] = theme;
        });
    }
</script>

<select name="theme" id="theme-input" bind:value={theme} onchange={updateTheme}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="gruvbox">Gruvbox</option>
</select>

<style>
    #theme-input {
        padding: var(--select-inpt-spacing);
    }
</style>