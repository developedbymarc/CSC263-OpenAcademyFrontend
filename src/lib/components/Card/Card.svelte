<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

    let { children, style, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="card {style}" {...rest}>
    {@render children?.()}
</div>

<style>
    .card {
        --m-spacing: var(--card-spacing);

        padding: var(--m-spacing);
        border: 
            var(--glob-border-thickness) 
            solid 
            hsl(from var(--accent) h s calc(l + var(--glob-theme-border-brightness)) / var(--glob-theme-border-alpha));
        border-radius: var(--glob-border-radius);

        &.card--medium { --m-spacing: var(--card-spacing-medium); }
        &.card--large { --m-spacing: var(--card-spacing-large); }
    }
</style>