<script lang="ts">
	import type { ButtonProps } from "#lib/types/components/types.ts";
    import "./styles.scss";

    let { children, onclick, class: className, accent, ...rest }: ButtonProps = $props();
</script>

<button
    data-accent={accent ?? ""}
    class="button {className}"
    {onclick}
    {...rest}
>
    {@render children?.()}
</button>
