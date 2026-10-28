<script lang="ts">
	import type { LinkButtonProps } from "#lib/types/components/types.ts";
    import "./styles.css";

    let { children, href, style, accent, ...rest }: LinkButtonProps = $props();
</script>

<a 
    // eslint-disable-next-line svelte/no-navigation-without-resolve
    {href}
    data-accent={accent ?? ""}
    class="button {style}" 
    {...rest}
>
    {@render children?.()}
</a>