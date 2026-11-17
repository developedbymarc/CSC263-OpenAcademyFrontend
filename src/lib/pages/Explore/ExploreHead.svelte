<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import TextInput from "#lib/components/Inputs/TextInput.svelte";

    // `form` ties the input and the button to the filters <form> in Explore.svelte, so one GET submits everything.
    let { title = $bindable(""), formId }: { title?: string, formId: string } = $props();
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
            bind:value={title}
            form={formId}
            hideLabel={true}
            label="Search content"
            name="title"
            placeholder="Search content..."
            type="text"
        />

        <Button type="submit" form={formId} class="button-outline button-flat">
            Search
            <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
    </div>
</section>

<style>
    .explore-head-container { margin-block-end: 2rem; }
    .explore-head__inpt-container { min-width: var(--exploreHeadInptWidth); }
</style>
