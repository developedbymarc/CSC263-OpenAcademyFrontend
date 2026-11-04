<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import TextAreaInput from "#lib/components/Inputs/TextAreaInput.svelte";
	import TextInput from "#lib/components/Inputs/TextInput.svelte";
	import type { ICourseData } from "#lib/forms.ts";
	import type { SuperForm } from "sveltekit-superforms";
	import LessonForm from "./LessonForm.svelte";
	import Card from "#lib/components/Card/Card.svelte";

	let { form, errors, constraints, idx }: Pick<SuperForm<ICourseData>, "form" | "errors" | "constraints"> & { idx: number } = $props();
	const addLesson = () => {
        form.update((course) => {
            course.modules[idx].lessons = [
                ...course.modules[idx].lessons,
                {
                    title: "",
                    description: "",
                    order: course.modules[idx].lessons.length,
                    content: ""
                }
            ]

            return course;
        }, { taint: false })
    }
</script>

<div class="flex flex-direction-column gap-1">
    <div class="flex align-items-center justify-content-space-between">
        <h2>Module {idx + 1}</h2>

        <div class="flex gap-1">
            <Button class="button-outline button-flat" accent="error">Remove</Button>
        </div>
    </div>

    <TextInput
        {...$constraints?.modules?.title}
        bind:value={$form.modules[idx].title}
        errors={$errors.modules?.[idx]?.title}

        label="Title"
        placeholder="Enter module title"
        type="text"
        name="title"
    />
    <TextAreaInput
        {...$constraints?.modules?.description}
        bind:value={$form.modules[idx].description}
        errors={$errors.modules?.[idx]?.description}

        label="Description"
        placeholder="Enter module description"
        name="description"
    />
</div>

<div class="flex flex-direction-column gap-1 margin-block-start-1">
    <h2>Lessons</h2>
    {#each $form.modules[idx].lessons as _, lessonIdx (lessonIdx)}
        <Card class="card-medium">
            <LessonForm {form} {errors} {constraints} moduleIdx={idx} idx={lessonIdx} />
        </Card>
    {/each}
    <Button onclick={addLesson} type="button" class="button-outline button-flat">Add Lesson</Button>
</div>
