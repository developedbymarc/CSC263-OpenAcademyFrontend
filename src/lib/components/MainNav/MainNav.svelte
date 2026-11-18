<script lang="ts">
	import type { WhoAmIDto } from '#lib/api/index.ts';
	import Button from '../Button/Button.svelte';
	import { resolve } from '$app/paths';
	import LinkButton from '../Button/LinkButton.svelte';
	import Logo from '../Logo/Logo.svelte';
	import Themer from '../Themer/Themer.svelte';
	import { canManageCourses } from '#lib/utils/roles.ts';

	let { user = null }: { user?: WhoAmIDto | null } = $props();
</script>

<nav class="main-nav flex gap-2 align-items-center">
	<h1 class="nav__heading">
		<a href={resolve('/')}><Logo /></a>
	</h1>

	<div class="flex gap-1-25 align-items-center">
		<LinkButton class="button-outline button-flat" href={resolve('/explore')}>
			<i class="fa-solid fa-rocket"></i>
			Explore
		</LinkButton>
		{#if user}
			{#if canManageCourses(user)}
				<LinkButton class="button-outline button-flat" href={resolve('/(private)/create')}>
					<i class="fa-solid fa-plus"></i>
					Create
				</LinkButton>
			{/if}
			<LinkButton class="button-outline button-flat" href={resolve('/(private)/dashboard')}>
				<i class="fa-solid fa-sliders"></i>
				Dashboard
			</LinkButton>
		{/if}
		<p class="clr-muted">|</p>

		{#if user}
			<span class="clr-muted">{user.firstName} {user.lastName}</span>
			<form method="POST" action="/auth/logout">
				<Button type="submit" class="button-outline button-flat">Log out</Button>
			</form>
		{:else}
			<LinkButton href={resolve('/auth/login')} class="button-outline button-flat"
				>Log in</LinkButton
			>
			<LinkButton href={resolve('/auth/signup')}>Sign up</LinkButton>
		{/if}

		<p class="clr-muted">|</p>
		<Themer />
	</div>
</nav>

<style>
	.main-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		/* background-color: var(--bgOverlay); */
		border-block-end: var(--mainNavBorderThickness) solid var(--bgOverlay);
		padding: var(--mainNavSpacing);
		margin-inline: var(--mainNavMargin);

		.nav__heading {
			font-size: var(--ffNav);
		}
	}
</style>
