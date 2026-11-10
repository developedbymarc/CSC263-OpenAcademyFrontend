<script lang="ts">
	import type { ICourse } from "#lib/types/entities/course.ts";
	import { resolve } from "$app/paths";
	import Card from "./Card.svelte";
	import "./styles.scss";

    type ICourseCard = { course: ICourse, mode?: "compact" | "stretch" }
    let { course, mode = "stretch" }: ICourseCard = $props();
</script>

<a class="couse-card-container gap-1" href={resolve(`/explore/${course.id}`)} data-mode={mode}>
    <img src="" alt="Banner of {course.title}" />
    <Card class="course-card flex gap-1" accent="accent">
        <div class="card__content flex flex-direction-column gap-0-75">
            <h3>{course.title}</h3>
            <p class="content__description">{course.description}</p>
        </div>
    </Card>
</a>

<style>
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
