<script lang="ts">
	import type { ButtonProps } from "#lib/types/components/types.ts";

    let { children, onclick, style }: ButtonProps = $props();
</script>

<button class="button {style}" {onclick}>
    {@render children?.()}
</button>

<style>
    .button {
        padding: var(--btn-spacing);
        background-color: var(--accent);
        font-size: var(--fs-button);

        &:hover,
        &:focus-visible {
            background-color: hsl(from var(--accent) h s calc(l + var(--btn-active-strength)));
        }
    }

    .button--outline {
        background-color: hsl(from var(--accent) h s l / var(--btn-outline-alpha));
        color: hsl(from var(--accent) h s l);
        border: var(--btn-outline-border-thickness) solid var(--accent);

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