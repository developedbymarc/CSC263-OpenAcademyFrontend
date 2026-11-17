<script lang="ts">
	import { resolve } from "$app/paths";
	import Card from "#lib/components/Card/Card.svelte";
	import { EUserRole } from "#lib/types/entities/user.ts";

	const roles = [
		{ role: EUserRole.Student, title: "Student", description: "Student learning on my own" },
		{ role: EUserRole.Teacher, title: "Teacher", description: "Educator with a classroom" }
	];
</script>

<section class="landing">
	<div class="landing__intro flex flex-direction-column gap-1-5">
		<h2 class="landing__heading">Turn big learning goals into <i>real results.</i></h2>
		<p class="landing__text">
			Learn at your own pace, strengthen core skills, and build confidence, whether you're catching up,
			keeping pace, or ready to move ahead.
		</p>

		<svg class="landing__art" viewBox="0 0 420 260" role="img" aria-label="Friendly mascot walking up a path">
			<polygon points="0,260 360,40 400,40 330,260" fill="var(--bgOverlay)" />
			<ellipse cx="190" cy="150" rx="120" ry="52" transform="rotate(-18 190 150)" fill="none" stroke="var(--accent)" stroke-opacity="0.45" stroke-width="8" />
			<polygon points="190,70 250,98 262,165 205,215 140,190 128,115" fill="var(--accent)" />
			<circle cx="172" cy="118" r="14" fill="#fff" /><circle cx="214" cy="124" r="14" fill="#fff" />
			<circle cx="170" cy="118" r="7" fill="#000" /><circle cx="216" cy="126" r="7" fill="#000" />
			<path d="M180 145 Q192 158 206 146" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" />
			<polygon points="40,110 58,118 54,138 30,138 24,118" fill="#f26b38" />
			<polygon points="330,120 336,134 350,140 336,146 330,160 324,146 310,140 324,134" fill="#fbb814" />
			<rect x="300" y="200" width="22" height="22" fill="#f472b6" />
		</svg>
	</div>

	<div class="landing__start flex flex-direction-column gap-1">
		<h3>Get started</h3>
		{#each roles as { role, title, description } (role)}
			<a class="role-link" href={resolve(`/auth/signup?role=${role}`)}>
				<Card class="role-card flex align-items-center justify-content-space-between gap-1">
					<div>
						<h4>{title}</h4>
						<p class="clr-muted">{description}</p>
					</div>
					<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
				</Card>
			</a>
		{/each}
		<p>
			Already have an account?
			<a href={resolve("/auth/login")} data-active="true">Log in</a>
		</p>
	</div>
</section>

<style>
	.landing {
		display: grid;
		grid-template-columns: auto;
		gap: 3rem;
		align-items: start;
		max-inline-size: 1200px;
		margin-inline: auto;
		padding-block: 2rem;
	}

	.landing__heading { font-size: clamp(2rem, 5vw, 3.25rem); line-height: 1.1; }
	.landing__text { max-inline-size: 44ch; }
	.landing__art { inline-size: 100%; max-inline-size: 420px; }

	.role-link { display: block; text-decoration: none; color: inherit; }
	:global(.role-card) { transition: transform 0.1s ease; }
	.role-link:hover :global(.role-card),
	.role-link:focus-visible :global(.role-card) { transform: translateX(0.25rem); border-color: var(--accent); }

	@container main (min-width: 100ch) {
		.landing { grid-template-columns: 1fr 1fr; }
	}
</style>
