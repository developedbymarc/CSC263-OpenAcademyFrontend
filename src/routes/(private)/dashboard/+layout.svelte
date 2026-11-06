<script>
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import { resolve } from "$app/paths";

	let { children } = $props();
</script>
<section class="dashboard-container gap-2">
    <aside class="flex flex-direction-column gap-1">
        <h2>Dashboard</h2>

        <div class="flex flex-direction-column gap-1">
            <LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard")}>Dashboard</LinkButton>
            <LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard/settings")}>Settings</LinkButton>
        </div>
    </aside>
    <div class="dashboard__content">
        {@render children()}
    </div>
</section>

<style>
    @container main (min-width: var(--mobileThreshold)) {
        .dashboard-container { display: grid; grid-template-columns: 10% auto }
    }
</style>
