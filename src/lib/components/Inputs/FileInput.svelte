<script lang="ts">
	import type { FileInputProps } from "#lib/types/components/types.ts";
	import "./styles.css";

    let {
        value = $bindable(""),
        label,
        name,
        errors,
        placeholder,
        hideLabel,
        accept,
        ...rest }: FileInputProps = $props()
</script>

<div class="inpt-container flex flex-direction-column">
    <label data-hide={hideLabel ?? false} for="{name}-inpt">{label}</label>
    <input id="{name}-inpt" type="file" {accept} {name} {placeholder} {...rest} bind:value />
    {#if errors}
        <ul class="inpt-container__errors">
            {#each (errors ?? []) as error, idx (idx)}
                <li>{error}</li>
            {/each}
        </ul>
    {/if}
</div>
