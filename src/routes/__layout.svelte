<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
	let isDrawerOpen: boolean = false;
	import { fade, fly } from 'svelte/transition';

	let duration = 350

	function toggleDrawer() {
		setTimeout(() => {
			window.document.body.classList.toggle('open-drawer')
		}, isDrawerOpen ? duration + 100 : 0);
			isDrawerOpen = !isDrawerOpen
	}
</script>

<button on:click={toggleDrawer}>
	<i class="ph-hamburger"></i>
</button>
<slot />

{#if isDrawerOpen}
<div class="drawer" in:fly={{x: 100, duration}} out:fly={{x: 100, duration}}>
	<button on:click={toggleDrawer}>
		<i class="ph-x"></i>
	</button>
	<ul>
		<li><a on:click={toggleDrawer} href="/">Home</a></li>
		<li><a on:click={toggleDrawer} href="https://github.com/tmciesco/fe-mentor-svelte">Github</a></li>
		<li><a on:click={toggleDrawer} href="/interactive-rating">interactive-rating</a></li>
		<li><a on:click={toggleDrawer} href="/qr-code">qr-code</a></li>
		<li><a on:click={toggleDrawer} href="/stats-preview-card">stats-preview-card</a></li>
	</ul>
</div>
<div class="overlay" in:fade={{duration: duration - 100}} out:fade={{duration: duration - 100}}></div>
{/if}

<style>
	:global(body.open-drawer) {
		overflow: hidden;
	}
  button {
		position: absolute;
		top: 16px;
		right: 16px;
		background-color: #97d1d5;
		border: none;
		cursor: pointer;
		border-radius: 50%;
		display: flex;
		align-items: center;
		padding: 8px;
	}
	i {
		color: #141883;
		font-size: 32px;
  }

	.drawer {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
		min-height: 100vh;
		background-color: #ffffff;
		padding: 80px 112px 0 36px;
		overflow: hidden;
	}

	ul {
		list-style: none;
	}

	li {
		margin-bottom: 16px;
	}

	a {
		text-decoration: none;
	}

	.overlay {
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		background-color: rgba(189, 7, 7, 0.507);
		z-index: 2;
	}

</style>
