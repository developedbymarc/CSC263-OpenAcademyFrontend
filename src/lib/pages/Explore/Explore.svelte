<script lang="ts">
	import CourseCard from "#lib/components/Card/CourseCard.svelte";
	import SelectInput from "#lib/components/SelectInput/SelectInput.svelte";
	import type { ICourse } from "#lib/types/entities/course.ts";
	import ExploreHead from "./ExploreHead.svelte";

    type IDataProps = { data: { courses: ICourse[] } };
    let { data }: IDataProps = $props();
</script>

<ExploreHead />
<section class="explore-container gap-2">
    <aside class="explore__filters">
        <h3>Refine your search</h3>
    </aside>
    <div class="explore__content flex flex-direction-column gap-1">
        <div class="content__options flex align-items-center justify-content-end gap-2">
            <p><b>{data.courses.length}</b> results</p>
            
            <div class="flex align-items-center gap-1">
                <p>Sort by</p>
                <SelectInput name="sort-by" options={["relevance"]} />
            </div>
        </div>
        {#if data.courses.length > 0}
            <div class="content__results flex flex-direction-column gap-1">
                {#each data.courses as course, idx (idx)}
                    <CourseCard {course} mode="" />
                {/each}
            </div>
        {:else}
            <h3 class="center">Sorry, no results were found!</h3>
        {/if}
    </div>
</section>

<style>
    .explore-container {
        display: grid;
        grid-template-columns: auto;
        max-inline-size: var(--exploreContainerSize);
        margin-inline: auto;

    }
    
    @container main (min-width: 120ch) {
        .explore-container { grid-template-columns: var(--exploreContainerColumns); }
    }
</style>