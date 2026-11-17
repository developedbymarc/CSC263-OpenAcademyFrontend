<script lang="ts">
	import type { ICourseSummary } from "#lib/types/entities/course.ts";
	import { resolve } from "$app/paths";
	import Card from "./Card.svelte";
	import "./styles.scss";

    type ICourseCard = { course: ICourseSummary, mode?: "compact" | "stretch" }
    let { course, mode = "stretch" }: ICourseCard = $props();
</script>

<a class="couse-card-container gap-1" href={resolve("/explore/[slug]", { slug: course.id })} data-mode={mode}>
    {#if course.thumbnailUrl}
        <img src={course.thumbnailUrl} alt="Banner of {course.title}" />
    {:else}
        <div class="course-card__placeholder" aria-hidden="true"></div>
    {/if}
    <Card class="course-card flex gap-1" accent="accent">
        <div class="card__content flex flex-direction-column gap-0-75">
            <h3>{course.title}</h3>
            <p class="content__description">{course.description}</p>
            {#if course.categories.length > 0}
                <p class="clr-muted fs1">{course.categories.map((c) => c.name).join(" · ")}</p>
            {/if}
        </div>
    </Card>
</a>

<style>
    .course-card__placeholder {
        background-color: var(--bgOverlay);
        border-radius: var(--globBorderRadius);
        min-height: 6rem;
    }
    .couse-card-container:is([data-mode="compact"]) .course-card__placeholder { aspect-ratio: 1; }

    .couse-card-container:is([data-mode="stretch"]) {
        display: grid;
        grid-template-columns: 24% auto;
    }

    .couse-card-container:is([data-mode="compact"]) {
        display: flex;
        flex-direction: column;

        img { aspect-ratio: 1; }
    }
</style>
