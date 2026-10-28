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

<div class="inpt-container flex flex-direction-column">
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
        --mTextState: var(--text);

        width: 100%;
        gap: var(--inptGap);

        /* &:has(:user-valid) { --mTextState: var(--clrSuccess) } */
        &:has(:user-invalid) { --mTextState: var(--clrError) }

        label {
            font-size: var(--fsInptLabel);
            color: var(--mTextState);
            font-weight: bold;

            &[data-hide="true"] { display: none; }
        }

        input {
            --mState: var(--bgOverlay);
            --mBorderColor: 
                hsl(from var(--mState) 
                h s calc(l + var(--globThemeBorderBrightness)) 
                / var(--globThemeBorderAlpha));

            font-size: var(--fsInptText);
            background-color: var(--mState);
            padding: var(--inptPadding);
            color: var(--mTextState);
            
            border: var(--globBorderThickness) solid var(--mBorderColor);
            
            &:focus-visible { border-color: var(--accent); }
            &:user-invalid { --mState: hsl(from var(--clrError) h s l / var(--inptBgAlpha)); }
        }

        .inpt-container__errors {
            color: var(--clrError);
            margin-inline-start: var(--inptErrListMargin);
        }
    }
</style>