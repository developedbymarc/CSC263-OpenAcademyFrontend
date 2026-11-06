<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import "./styles.scss";

    let {
        children,
        class: className,
        accent,
        ...rest
    }: { accent?: string } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="card {className ?? ''}" {...rest} data-accent="{accent ?? ''}">
    {@render children?.()}
</div>
