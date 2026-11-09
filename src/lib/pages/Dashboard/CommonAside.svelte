<script>
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import { resolve } from "$app/paths";

</script>
<LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard/settings")}>
    <i class="fas fa-cog"></i>
    Settings
</LinkButton>
