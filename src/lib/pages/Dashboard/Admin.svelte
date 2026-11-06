<script>
	import Card from "#lib/components/Card/Card.svelte";

</script>

<h2 class="margin-block-end-1">Summary</h2>
<section class="admin-summary-container grid gap-2">
    <Card class="text-align-center" accent="accent">
        <h2>Courses Available</h2>
        <p class="fs3">0</p>
    </Card>
    <Card class="text-align-center" accent="accent">
        <h2>Enrolled Students</h2>
        <p class="fs3">0</p>
    </Card>
    <Card class="text-align-center" accent="accent">
        <h2>Active Reports</h2>
        <p class="fs3">0</p>
    </Card>
    <Card class="text-align-center" accent="accent">
        <h2>Categories</h2>
        <p class="fs3">0</p>
    </Card>
</section>

<section class="admin-query-container">

</section>

<style>
    @container main (min-width: var(--mobileThreshold)) {
        .admin-summary-container { grid-template-columns: repeat(4, 1fr); }
    }
</style>
