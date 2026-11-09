<script>
	import AdminAside from "#lib/pages/Dashboard/AdminAside.svelte";
	import CommonAside from "#lib/pages/Dashboard/CommonAside.svelte";

	let { children } = $props();
</script>
<section class="dashboard-container gap-2">
    <aside class="flex flex-direction-column gap-1">
        <h2>Dashboard</h2>

        <AdminAside />

        <!-- All users no matter the role have this -->
        <CommonAside />
    </aside>
    <div class="dashboard__content">
        {@render children()}
    </div>
</section>

<style>
    @container main (min-width: var(--mobileThreshold)) {
        .dashboard-container { display: grid; grid-template-columns: var(--dashboardGridColumns) }
    }
</style>
