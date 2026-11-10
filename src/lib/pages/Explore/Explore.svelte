<script lang="ts">
	import Button from "#lib/components/Button/Button.svelte";
	import CourseCard from "#lib/components/Card/CourseCard.svelte";
	import SelectInput from "#lib/components/Inputs/SelectInput.svelte";
	import type { ICourse } from "#lib/types/entities/course.ts";
	import ExploreHead from "./ExploreHead.svelte";

    type IDataProps = { data: { courses: ICourse[] } };

    let verticalCards = $state(false);
    let sortBy = $state("Relevance");
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
                <SelectInput
                    bind:value={sortBy}
                    label="Sort by"
                    name="sort-by"
                    options={["relevance"]}
                    containerClass="align-items-center gap-1"
                />
            </div>
            <div class="flex gap-1">
                <Button onclick={() => verticalCards = false} class="button-flat button-outline" data-active={verticalCards}>
                    <i class="fa-solid fa-grip-horizontal"></i>
                </Button>
                <Button onclick={() => verticalCards = true} class="button-flat button-outline" data-active={!verticalCards}>
                    <i class="fa-solid fa-grip-vertical"></i>
                </Button>
            </div>
        </div>
        {#if data.courses.length > 0}
            <div class="content__results gap-1-5" data-vertical={verticalCards}>
                {#each data.courses as course, idx (idx)}
                    <CourseCard {course} mode={verticalCards ? "compact" : "stretch"} />
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

        .content__results[data-vertical="false"] {
            display: flex;
            flex-direction: column;
        }

        .content__results[data-vertical="true"] {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(444px, 1fr));
        }
    }

    @container main (min-width: var(--mobileThreshold)) {
        .explore-container { grid-template-columns: var(--exploreContainerColumns); }
    }
</style>
