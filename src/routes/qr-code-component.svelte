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
			<div class="img-container">
				<img src="images/image-qr-code.png" alt="Frontend Mentor QR Code" />
			</div>
			<h1 class="title">Improve your frontend skills by building projects</h1>
			<p class="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!</p>
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
    background-color: #d5e1ef;
		min-height: 100vh;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
	.card {
		width: 320px;
		background: #ffffff;
		margin-bottom: 3rem;
		padding: 16px;
		border-radius: 20px;
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
	}

	.img-container {
		width: 100%;
		height: 288px;
		border-radius: 10px;
		margin-bottom: 24px;
	}

	img {
		width: inherit;
		height: inherit;
		border-radius: 10px;
	}

	.title {
		text-align: center;
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 8px;
		color: #1f314f;
	}

	.description {
		text-align: center;
		font-size: 15px;
		line-height: 1.5;
		margin-bottom: 24px;
		color: #7d889e;
	}

	.attribution {
		color: #1f314f;
		font-size: 11px;
		text-align: center;
	}
	.attribution a {
		color: #fc7612;
	}
</style>
