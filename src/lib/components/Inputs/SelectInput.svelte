<script lang="ts">
	import type { SelectInputProps } from "#lib/types/components/types.ts";
	import { capitalize } from "#lib/utils/utils.ts";
	import "./styles.css";

    let {
        value = $bindable(""),
        onchange,
        class: className,
        containerClass,
        name,
        id,
        options,
        errors,
        hideLabel,
        label,
        ...rest }: SelectInputProps = $props();
</script>

<div class="inpt-container flex {containerClass ?? ''}">
    {#if !hideLabel} <label for="{id}">{label}</label> {/if}
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
    {#if errors}
        <ul class="inpt-container__errors clr-error">
            {#each (errors ?? []) as error, idx (idx)}
                <li>{error}</li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .select-inpt {
        padding: var(--selectInptPadding);
    }
</style>
