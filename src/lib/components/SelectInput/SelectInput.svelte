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
        errors,
        label,
        ...rest }: SelectInputProps = $props();
</script>

<label for="{id}">{label}</label>
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
<ul class="inpt-container__errors">
    {#each (errors ?? []) as error, idx (idx)}
        <li>{error}</li>
    {/each}
</ul>

<style>
    .select-inpt {
        padding: var(--selectInptPadding);
    }
</style>
