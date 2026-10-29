<script>
	import Button from "#lib/components/Button/Button.svelte";
	import TextInput from "#lib/components/TextInput/TextInput.svelte";
</script>

<section class="explore-head-container flex flex-direction-column gap-1-5 align-items-center">
    <div class="text-align-center">
        <h2 class="fs5">
            Explore 
            <span class="clr-accent">Θ</span>pen 
            <span class="clr-accent">Λ</span>cademy
        </h2>
        <p class="fs2 clr-accent">Search for courses, materials & teaching resources</p>
    </div>

    <div class="explore-head__inpt-container flex align-items-center gap-1">
        <TextInput 
            hideLabel={true}
            label="Search content"
            name="query"
            placeholder="Search content..."
            type="text"
        />

        <Button class="button-outline button-flat">Search</Button>
    </div>
</section>

<style>
    .explore-head-container { margin-block-end: 2rem; }
    .explore-head__inpt-container { min-width: var(--exploreHeadInptWidth); }
</style>