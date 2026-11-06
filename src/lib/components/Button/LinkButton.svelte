<script lang="ts">
	import type { LinkButtonProps } from "#lib/types/components/types.ts";
    import "./styles.scss";

    let { children, href, class: className, accent, ...rest }: LinkButtonProps = $props();
</script>

<a
    // eslint-disable-next-line svelte/no-navigation-without-resolve
    {href}
    data-accent={accent ?? ""}
    class="button {className ?? ''}"
    {...rest}
>
    {@render children?.()}
</a>
