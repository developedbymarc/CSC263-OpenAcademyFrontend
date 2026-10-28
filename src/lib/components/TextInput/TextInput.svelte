<script lang="ts">
	import type { TextInputProps } from "#lib/types/components/types.ts";

    let { value = $bindable(""), label, type, name, errors, placeholder, ...rest }: TextInputProps = $props()
</script>

<div class="inpt-container flex flex--col">
    <label for="{name}-inpt">{label}</label>
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
        gap: 0.2rem;

        /* &:has(:user-valid) { --m-text-state: var(--clr-success) } */
        &:has(:user-invalid) { --m-text-state: var(--clr-error) }

        label {
            font-size: var(--fs-inpt-label);
            color: var(--m-text-state);
            font-weight: bold;
        }

        input {
            --m-bg-state: var(--bg-overlay);
            --m-state: var(--clr-muted);

            font-size: var(--fs-inpt-value);
            background-color: var(--m-bg-state);
            padding: var(--inpt-spacing);
            color: var(--m-text-state);
            
            border: var(--glob-border-thickness) solid var(--m-state, --clr-muted);
            
            /* &:user-valid { --m-state: var(--clr-success); } */
            &:focus-visible { border-color: var(--accent); }
            &:user-invalid { 
                --m-state: var(--clr-error);
                --m-bg-state: hsl(from var(--clr-error) h s l / var(--inpt-bg-error-alpha)); 
            }
        }

        .inpt-container__errors {
            color: var(--clr-error);
            margin-inline-start: 1.5rem;
        }
    }
</style>