<script lang="ts">
	import type { SelectInputProps } from "#lib/types/components/types.ts";
	import { capitalize } from "#lib/utils/utils.ts";

    let { 
        value = $bindable(""), 
        onchange,
        class: className,
        name, 
        id, 
        options,
        ...rest }: SelectInputProps = $props();
</script>

<select 
    bind:value
    class="select-inpt {className ?? ''}"
    {onchange}
    {name} 
    {id} 
    {...rest}
>
    {#each options as option, idx (idx)}
        <option value="{option}">{capitalize(option)}</option>
    {/each}
</select>

<style>
    .select-inpt {
        padding: var(--selectInptPadding);
    }
</style>