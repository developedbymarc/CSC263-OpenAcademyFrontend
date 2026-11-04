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

	let { data } = $props();
    const { form, constraints, errors, enhance, reset } = superForm<ICourseData>(untrack(() => data.form), {
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

    <div class="flex gap-1 margin-block-start-2">
        <Button type="submit">Submit Course</Button>
        <Button onclick={() => reset()} type="button" accent="error">Reset</Button>
    </div>
</form>
