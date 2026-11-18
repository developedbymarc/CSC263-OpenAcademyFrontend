<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '../Logo/Logo.svelte';
	import type { WhoAmIDto } from '#lib/api/index.ts';
	import { canManageCourses } from '#lib/utils/roles.ts';

	let { user = null }: { user?: WhoAmIDto | null } = $props();

	const year = new Date().getFullYear();
</script>

<footer class="main-footer">
	<div class="footer__inner">
		<div class="footer__brand flex flex-direction-column gap-0-75">
			<h2 class="footer__logo"><a href={resolve('/')}><Logo /></a></h2>
			<p class="clr-muted">Learn at your own pace and turn big goals into real results.</p>
		</div>

		<nav class="footer__column flex flex-direction-column gap-0-5" aria-label="Learn">
			<h3 class="footer__title">Learn</h3>
			<a href={resolve('/')}>Home</a>
			<a href={resolve('/explore')}>Explore courses</a>
			{#if canManageCourses(user)}
				<a href={resolve('/(private)/create')}>Create a course</a>
			{/if}
		</nav>

		<nav class="footer__column flex flex-direction-column gap-0-5" aria-label="Account">
			<h3 class="footer__title">Account</h3>
			{#if user}
				<a href={resolve('/(private)/dashboard')}>Dashboard</a>
				<a href={resolve('/(private)/dashboard/settings')}>Settings</a>
			{:else}
				<a href={resolve('/auth/login')}>Log in</a>
				<a href={resolve('/auth/signup')}>Sign up</a>
				<a href={resolve('/auth/forgot-passw')}>Forgot password?</a>
			{/if}
		</nav>
	</div>

	<div class="footer__bottom flex align-items-center justify-content-space-between flex-wrap gap-1">
		<p class="clr-muted fs-small">&copy; {year} <Logo />. All rights reserved.</p>
		<a class="footer__top clr-muted" href="#top">
			Back to top <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
		</a>
	</div>
</footer>

<style>
	.main-footer {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 3rem var(--mainContainerPadding) 1.5rem;
		background-color: var(--bgOverlay);
		border-block-start: var(--globBorderThickness) solid hsl(from var(--accent) h s l / 0.35);
	}

	.footer__inner {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 2rem;
		inline-size: 100%;
		max-inline-size: var(--mainContainerMaxWidth);
		margin-inline: auto;
	}

	.footer__logo {
		font-size: var(--ffNav);
	}
	.footer__brand p {
		max-inline-size: 36ch;
	}

	.footer__title {
		font-size: var(--fsInptLabel);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--accent);
	}

	.footer__column a {
		inline-size: fit-content;
	}

	.footer__bottom {
		inline-size: 100%;
		max-inline-size: var(--mainContainerMaxWidth);
		margin-inline: auto;
		padding-block-start: 1.25rem;
		border-block-start: var(--mainNavBorderThickness) solid hsl(from var(--text) h s l / 0.15);
	}

	.fs-small {
		font-size: 0.875rem;
	}

	@media (max-width: 40rem) {
		.footer__inner {
			grid-template-columns: 1fr 1fr;
		}
		.footer__brand {
			grid-column: 1 / -1;
		}
	}
</style>
