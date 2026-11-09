<script lang="ts">
	import type { CheckboxInputProps } from "#lib/types/components/types.ts";
	import { capitalize } from "#lib/utils/utils.ts";
	import "./styles.css";

    let {
        checked = $bindable(false),
        label,
        containerClass,
        name,
        errors,
        placeholder,
        ...rest }: CheckboxInputProps = $props()
</script>

<div class="inpt-container flex {containerClass ?? 'gap-0-5 align-items-center'}">
    <input id="{name}-inpt" {name} {placeholder} type="checkbox" {...rest} bind:checked />
    {#if errors}
        <ul class="inpt-container__errors">
            {#each (errors ?? []) as error, idx (idx)}
                <li>{capitalize(error)}</li>
            {/each}
        </ul>
    {/if}
    <label for="{name}-inpt">{label}</label>
</div>
