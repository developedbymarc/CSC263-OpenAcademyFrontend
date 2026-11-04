<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import TextAreaInput from "#lib/components/Inputs/TextAreaInput.svelte";
	import TextInput from "#lib/components/Inputs/TextInput.svelte";
	import type { ICourseData } from "#lib/forms.ts";
	import type { SuperForm } from "sveltekit-superforms";
	import { Carta, MarkdownEditor } from 'carta-md';
    import 'carta-md/default.css';

   	let collapse = $state(true);

    const carta = new Carta();
	let { form, errors, constraints, moduleIdx, idx }: Pick<SuperForm<ICourseData>, "form" | "errors" | "constraints">
	    & { moduleIdx : number, idx: number } = $props();
</script>

<div class="flex flex-direction-column gap-1">
    <div class="flex align-items-center justify-content-space-between">
        <h2>Module {moduleIdx + 1} / Lesson {idx + 1}</h2>

        <div class="flex gap-1">
            <Button onclick={() => collapse = !collapse} class="button-outline button-flat" type="button">
                { collapse ? "Open" : "Collapse" }
            </Button>
            <Button class="button-outline button-flat" accent="error">Remove</Button>
        </div>
    </div>

    {#if !collapse}
        <TextInput
            {...$constraints?.modules?.title}
            bind:value={$form.modules[moduleIdx].lessons[idx].title}
            errors={$errors.modules?.[moduleIdx].lessons?.[idx]?.title}

            label="Title"
            placeholder="Enter lesson title"
            type="text"
            name="title"
        />
        <TextAreaInput
            {...$constraints?.modules?.description}
            bind:value={$form.modules[moduleIdx].lessons[idx].description}
            errors={$errors.modules?.[moduleIdx].lessons?.[idx]?.description}

            label="Description"
            placeholder="Enter lesson description"
            name="description"
        />

        <MarkdownEditor {carta} />
    {/if}
</div>

<style>
    :global(.carta-editor) {
        --border-color: var(--bgOverlay);
        --focus-outline: var(--accent);
        --hover-color: var(--accent);
        --caret-color: var(--accent);
        --text-color: var(--text);

        border-width: var(--globBorderThickness) !important;
    }

    :global(.carta-toolbar) { border-width: var(--globBorderThickness) !important; }
    :global(.carta-font-code) {
        font-family: inherit;
        font-size: var(--fs1);
        color: var(--text) !important;

        line-height: 1.1rem;
        letter-spacing: normal;
    }
</style>
