<script lang="ts">
	import type { ThemeOptions } from "#lib/types/components/types.ts";
	import SelectInput from "../SelectInput/SelectInput.svelte";

    let options: ThemeOptions[] = ["light", "dark", "gruvbox"];
    let theme: ThemeOptions = $state("dark");

    const updateTheme = () => {
        document.startViewTransition(() => {
            document.body.dataset["theme"] = theme;
        });
    };

    $effect(updateTheme)
</script>

<SelectInput 
    bind:value={theme}
    {options}
    
    name="theme" 
    id="theme"
    onchange={updateTheme}
/>