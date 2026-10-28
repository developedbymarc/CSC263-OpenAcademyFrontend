<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

    let { children, class: className, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="card {className ?? ''}" {...rest}>
    {@render children?.()}
</div>

<style>
    .card {
        --m-spacing: var(--cardSpacing);

        padding: var(--m-spacing);
        border: 
            var(--globBorderThickness) 
            solid 
            hsl(from var(--accent) h s calc(l + var(--globThemeBorderBrightness)) / var(--globThemeBorderAlpha));
        border-radius: var(--globBorderRadius);

        &.card--medium { --m-spacing: var(--cardSpacingMedium); }
        &.card--large { --m-spacing: var(--cardSpacingLarge); }
    }
</style>