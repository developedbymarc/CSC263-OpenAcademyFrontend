<script lang="ts">
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import type { ICourse } from "#lib/types/entities/course.ts";
	import { humanizeDate } from "#lib/utils/utils.ts";
	import { untrack } from "svelte";
	import CourseExploreModule from "./CourseExploreModule.svelte";
	import "#lib/styles/containers.css";

	let lessonCount = $state(0);
    let { data } : { data: { course: ICourse } } = $props();
    $effect(() => {
        untrack(() => data.course.modules.forEach(x => lessonCount += x.lessons.length))
    })
</script>

<div class="course-explore-container flex flex-direction-column gap-2">
    <section class="flex flex-direction-column gap-0-75">
        <img class="course-explore__banner margin-block-end-1" src="" alt="Banner of {data.course.title}" />
        <div class="course-explore__header flex align-items-center justify-content-space-between">
            <h2>
                { data.course.title }
                <span class="clr-muted fs1"><i> - Last updated: { humanizeDate(data.course.updatedAt) }</i></span>
            </h2>
            <LinkButton>Enroll</LinkButton>
        </div>
        <article>{ data.course.description }</article>
    </section>
    <section class="course-explore__content">
        <div>
            <h3>Course Content</h3>
            <p>{data.course.modules.length} modules - {lessonCount} lesson(s) - 23hrs total length</p>
        </div>
        <div class="course-explore__modules flex flex-direction-column gap-1 margin-block-start-1">
            {#each data.course.modules as module, idx (idx)}
                <CourseExploreModule {...module} />
            {/each}
        </div>
    </section>
</div>

<style>
    .course-explore-container {
        .course-explore__banner {
            min-width: 100%;
            aspect-ratio: 16 / 4;
        }
    }
</style>
