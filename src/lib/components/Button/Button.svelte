<script lang="ts">
	import type { ButtonProps } from "#lib/types/components/types.ts";
    import "./styles.css";

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