<script lang="ts">
	import type { TextAreaInputProps } from "#lib/types/components/types.ts";
	import { capitalize } from "#lib/utils/utils.ts";
	import "./styles.css";

    let {
        value = $bindable(""),
        label,
        name,
        errors,
        placeholder,
        hideLabel,
        ...rest }: TextAreaInputProps = $props()
</script>

<div class="inpt-container flex flex-direction-column">
    <label data-hide={hideLabel ?? false} for="{name}-inpt">{label}</label>
    <textarea id="{name}-inpt" {name} {placeholder} {...rest} bind:value></textarea>
    {#if errors}
        <ul class="inpt-container__errors">
            {#each (errors ?? []) as error, idx (idx)}
                <li>{capitalize(error)}</li>
            {/each}
        </ul>
    {/if}
</div>
