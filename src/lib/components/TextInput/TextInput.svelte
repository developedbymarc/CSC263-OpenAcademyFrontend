<script lang="ts">
	import type { TextInputProps } from "#lib/types/components/types.ts";

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

<div class="inpt-container flex flex--col">
    <label data-hide={hideLabel ?? false} for="{name}-inpt">{label}</label>
    <input id="{name}-inpt" {name} {type} {placeholder} {...rest} bind:value />
    <ul class="inpt-container__errors">
        {#each (errors ?? []) as error, idx (idx)}
            <li>{error}</li>
        {/each}
    </ul>
</div>

<style>
    .inpt-container {
        --m-text-state: var(--text);

        width: 100%;
        gap: var(--inpt-gap);

        /* &:has(:user-valid) { --m-text-state: var(--clr-success) } */
        &:has(:user-invalid) { --m-text-state: var(--clr-error) }

        label {
            font-size: var(--fs-inpt-label);
            color: var(--m-text-state);
            font-weight: bold;

            &[data-hide="true"] { display: none; }
        }

        input {
            --m-state: var(--bg-overlay);

            font-size: var(--fs-inpt-value);
            background-color: var(--m-state);
            padding: var(--inpt-spacing);
            color: var(--m-text-state);
            
            border: 
                var(--glob-border-thickness)
                solid 
                hsl(from var(--m-state) h s calc(l + var(--glob-theme-border-brightness)) / var(--glob-theme-border-alpha));
            
            &:focus-visible { border-color: var(--accent); }
            &:user-invalid { 
                --m-state: hsl(from var(--clr-error) h s l / var(--inpt-bg-alpha)); 
            }
        }

        .inpt-container__errors {
            color: var(--clr-error);
            margin-inline-start: var(--inpt-error-list-spacing);
        }
    }
</style>