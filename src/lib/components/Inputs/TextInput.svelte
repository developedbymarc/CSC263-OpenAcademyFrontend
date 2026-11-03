<script lang="ts">
	import type { TextInputProps } from "#lib/types/components/types.ts";
	import "./styles.css";

    let {
        value = $bindable(""),
        label,
        type,
        name,
        errors,
        placeholder,
        hideLabel,
        ...rest }: TextInputProps = $props()
</script>

<div class="inpt-container flex flex-direction-column">
    <label data-hide={hideLabel ?? false} for="{name}-inpt">{label}</label>
    <input id="{name}-inpt" {name} {type} {placeholder} {...rest} bind:value />
    {#if errors}
        <ul class="inpt-container__errors">
            {#each (errors ?? []) as error, idx (idx)}
                <li>{error}</li>
            {/each}
        </ul>
    {/if}
</div>
