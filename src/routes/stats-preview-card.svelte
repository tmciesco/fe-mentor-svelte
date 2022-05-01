<script lang="ts">
	import { onMount } from "svelte"
	import { fly } from "svelte/transition"

	let isLoaded: boolean = false

	onMount(() => {
		isLoaded = true
	})
</script>

<main>
	{#if isLoaded}
		<div class="card" in:fly={{ y: 100 }}>
			<div class="content-container">
				<h1 class="title">Get <span class="highlight">insights</span> that help your business grow.</h1>
				<p class="description">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
				<div class="stats">
					<div class="stat-container">
						<span class="stat-number">10k+</span>
						<span class="stat-description">Companies</span>
					</div>
					<div class="stat-container">
						<span class="stat-number">314</span>
						<span class="stat-description">Templates</span>
					</div>
					<div class="stat-container">
						<span class="stat-number">12m+</span>
						<span class="stat-description">Queries</span>
					</div>
				</div>
			</div>
			<div class="img-container">
				<img src="images/stats-image-header.jpg" alt="three women working at table" />
			</div>
		</div>
	{/if}
	<div class="attribution">
		Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
		<a href="https://troycies.co">Troy Ciesco</a>.
	</div>
</main>

<style>
	p {
		margin: 0;
		padding: 0;
	}
	main {
    background-color: #0A0C1C;
		min-height: 100vh;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
	.card {
		max-width: 87.2%;
		display: flex;
		flex-direction: column;
		background: #ffffff;
		margin-bottom: 3rem;
		border-radius: 8px;
	}

	.content-container {
		padding: 40px 54px 32px 54px;
		border-radius: 0 0 8px 8px;
		background-color: #1b1937;
	}

	.img-container {
		order: -1;
		height: 447px;
		width: 100%;
		position: relative;
		border-radius: 8px 8px 0 0;
		background-color: #ab5cdb;
	}
	
	img {
		height: inherit;
		width: inherit;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 0 8px 8px 0;
		object-fit: cover;
		mix-blend-mode: overlay;
	}

	.title {
		font-size: 36px;
		line-height: 44px;
		font-weight: 700;
		margin-bottom: 24px;
		color: #ffffff;
	}

	.highlight {
		color: #ab5cdb;
	}

	.description {
		font-size: 15px;
		line-height: 25px;
		margin-bottom: 40px;
		color: #ffffff;
	}

	.stats {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}

	.stat-container {
		display:flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 24px;
	}

	.stat-container:last-child {
		margin-bottom: 0;
	}

	.stat-number {
		color: #ffffff;
		font-weight: 700;
		font-size: 24px;
		margin-bottom: 2px;
	}

	.stat-description {
		color: #ffffff;
		font-size: 12px;
	}

	.attribution {
		color: #ffffff;
		font-size: 11px;
		text-align: center;
	}
	.attribution a {
		color: #fc7612;
	}

	@media (min-width: 839px) {
		.title, .description {
			text-align: left;
		}
		.description {
			margin-bottom: 72px;
		}
		.card {
			flex-direction: row;
			/* max-width: 1110px; */
		}
		.stats {
			flex-direction: row;
		}

		.content-container {
			border-radius: 8px 0 0 8px;
			padding: 72px 48px 72px 32px;
		}

		.img-container {
			order: initial;
			border-radius: 0 8px 8px 0;
		}

		.stat-container {
			margin-bottom: 0;
		}
	}

	@media (min-width: 1140px) {
		.content-container {
			padding: 72px 94px 72px 72px;
		}
	}
</style>
