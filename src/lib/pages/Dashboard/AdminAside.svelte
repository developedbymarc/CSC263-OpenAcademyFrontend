<script>
	import LinkButton from "#lib/components/Button/LinkButton.svelte";
	import { resolve } from "$app/paths";

</script>

<div class="flex flex-direction-column gap-1">
    <LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard")}>Dashboard</LinkButton>
    <LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard/reports")}>
        <i class="fa-solid fa-circle-exclamation"></i>
        Reports
    </LinkButton>
    <LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard/users")}>
        <i class="fa-solid fa-circle-user"></i>
        Users
    </LinkButton>
    <LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard/courses")}>
        <i class="fa-solid fa-book"></i>
        Courses
    </LinkButton>
    <LinkButton class="button-outline button-flat" href={resolve("/(private)/dashboard/settings")}>
        <i class="fas fa-cog"></i>
        Settings
    </LinkButton>
</div>
