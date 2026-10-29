<script lang="ts">
	import type { ICourse } from "#lib/types/entities/course.ts";
	import Card from "./Card.svelte";

    type ICourseCard = { course: ICourse, mode: string }
    let { course, mode }: ICourseCard = $props();
</script>

<Card class="course-card flex gap-1" data-mode={mode}>
    <div class="card__content flex flex-direction-column">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
    </div>
</Card>