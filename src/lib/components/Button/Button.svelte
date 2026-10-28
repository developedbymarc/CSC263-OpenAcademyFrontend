<script lang="ts">
	import type { ButtonProps } from "#lib/types/components/types.ts";

    let { children, onclick, style, accent, ...rest }: ButtonProps = $props();
</script>

<button 
    data-accent={accent ?? ""} 
    class="button {style}" 
    {onclick} 
    {...rest}
>
    {@render children?.()}
</button>

<style>
    .button {
        padding: var(--btn-spacing);
        background-color: var(--accent);
        font-size: var(--fs-button);
        border: var(--btn-border-thickness) solid var(--accent);

        &[data-accent="error"] {
            --accent: var(--clr-error);
        }

        &:hover,
        &:focus-visible {
            --active-clr: hsl(from var(--accent) h s calc(l + var(--btn-active-strength)));
            background-color: var(--active-clr);
            border-color: var(--active-clr);

        }
    }

    .button--outline {
        background-color: hsl(from var(--accent) h s l / var(--btn-outline-alpha));
        color: hsl(from var(--accent) h s l);

        &:where(.button--flat) { 
            border: none; 
        }

        &:hover,
        &:focus-visible {
            color: hsl(from var(--accent) h s calc(l + var(--btn-outline-text-active-strength)));
            background-color: hsl(
                from var(--accent) 
                h s calc(l + var(--btn-outline-bg-active-strength)) / var(--btn-outline-alpha-active)
            );
        }
    }
</style>