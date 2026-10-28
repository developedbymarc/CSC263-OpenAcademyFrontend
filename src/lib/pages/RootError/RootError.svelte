<script>
	import Button from "#lib/components/Button/Button.svelte";
	import { goto } from "$app/navigation";
	import { resolve } from "$app/paths";

</script>

<div class="error-container center">
    <div class="flex flex-gap-2 flex-direction-column">
        <h1><span class="clr-error text-stroke">404</span> | Page not found</h1>
        <Button 
            data-accent="error" 
            onclick={() => goto(resolve("/"))} 
            class="button-outline button-flat"
        >
            Go back
        </Button>
    </div>
</div>