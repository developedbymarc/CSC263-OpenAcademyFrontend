<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import TextAreaInput from "#lib/components/Inputs/TextAreaInput.svelte";
	import TextInput from "#lib/components/Inputs/TextInput.svelte";
	import { CourseSchema, type ICourseData } from "#lib/forms.ts";
	import { untrack } from "svelte";
	import { superForm } from "sveltekit-superforms";
	import { yupClient } from "sveltekit-superforms/adapters";
	import ModuleForm from "./ModuleForm.svelte";
	import Card from "#lib/components/Card/Card.svelte";
	import Logo from "#lib/components/Logo/Logo.svelte";
	import FormMessage from "#lib/components/FormMessage/FormMessage.svelte";
	import { resolve } from "$app/paths";
	import type { ICourseCreated } from "#lib/types/entities/course.ts";

	let { data } = $props();
    const { form, constraints, errors, enhance, reset, message, delayed } = superForm<ICourseData, string | ICourseCreated>(untrack(() => data.form), {
      validators: yupClient(CourseSchema),
      validationMethod: "onsubmit",
      dataType: "json"
    });

    const addModule = () => {
        form.update((course) => ({
			...course,
			modules: [
				...course.modules ?? [],
				{
					title: '',
					description: '',
					order: course.modules.length,
					lessons: []
				}
			]
		}), { taint: false });
    }
</script>

<form class="flex flex-direction-column gap-1" method="POST" use:enhance>
    <div class="flex flex-direction-column gap-1">
        <h2 class="fs2">
            <span class="text-stroke clr-accent"><Logo /></span> / create course
        </h2>
        <TextInput
            {...$constraints.title}
            bind:value={$form.title}
            errors={$errors.title}

            label="Title"
            placeholder="Enter course title"
            type="text"
            name="title"
        />
        <TextAreaInput
            {...$constraints.description}
            bind:value={$form.description}
            errors={$errors.description}

            label="Description"
            placeholder="Enter course description"
            name="description"
        />
    </div>
    <div class="flex flex-direction-column gap-{$form.modules.length > 0 ? 2 : 1}">
        <h2>Modules</h2>
        {#each $form.modules as _, moduleIdx (moduleIdx)}
            <Card class="card-medium">
                <ModuleForm {form} {errors} {constraints} idx={moduleIdx} />
            </Card>
        {/each}
        <Button onclick={addModule} type="button" class="button-outline button-flat">Add Module</Button>
    </div>

    {#if typeof $message === 'object' && $message}
        <Card accent="accent">
            <h3>Course created</h3>
            <p>Add images and videos to your lessons:</p>
            <ul>
                {#each $message.lessons as lesson (lesson.id)}
                    <li><a data-active="true" href={resolve('/(private)/lessons/[lessonId]/assets', { lessonId: lesson.id })}>{lesson.title}</a></li>
                {/each}
            </ul>
        </Card>
    {:else}
        <FormMessage message={$message as string | undefined} />
    {/if}

    <div class="flex gap-1 margin-block-start-2 justify-content-space-between">
        <Button type="submit" disabled={$delayed}>Submit Course</Button>
        <div class="flex align-items-center gap-1">
            <!-- The API has no draft/publish switch yet: new courses are created with the backend's default status. -->
            <Button onclick={() => reset()} type="button" accent="error">Reset</Button>
        </div>
    </div>
</form>
