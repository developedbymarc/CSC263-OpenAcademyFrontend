<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import Card from "#lib/components/Card/Card.svelte";
	import type { ILesson } from "#lib/types/entities/course.ts";

	type IProps = { title: string, description: string, lessons: ILesson[] };

	let expand: boolean = $state(false);
    let { title, description, lessons }: IProps = $props();
</script>

<Card class="flex flex-direction-column gap-1">
    <div class="flex flex-direction-column gap-0-5">
        <div class="flex align-items-center justify-content-space-between">
            <h3>{ title }</h3>
            <Button onclick={() => expand = !expand} class="button-outline button-flat" data-accent={expand ? 'error' : ''}>
                {expand ? "Collapse" : "Expand"}
            </Button>
        </div>
        <p>{ description }</p>
    </div>

    {#if expand}
        <div class="flex flex-direction-column gap-0-5">
            <h3>Lessons</h3>
            <div>
                {#each lessons as lesson, idx (idx)}
                    <h3>{idx + 1}) { lesson.title }</h3>
                    <p class="margin-inline-1">{ lesson.description }</p>
                {/each}
            </div>
        </div>
    {/if}
</Card>
