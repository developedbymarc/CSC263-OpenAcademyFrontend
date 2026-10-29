<script>
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import { resolve } from "$app/paths";

</script>

<div class="error-container center">
    <div class="flex gap-2 flex-direction-column">
        <h1><span class="clr-error text-stroke">404</span> | Page not found</h1>
        <LinkButton 
            data-accent="error" 
            href={resolve("/")}
            class="button-outline button-flat"
        >
            Go back
        </LinkButton>
    </div>
</div>