<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

	<slot />

	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/interactive-rating">interactive-rating</a></li>
		<li><a href="/qr-code">qr-code</a></li>
		<li><a href="/stats-preview-card">stats-preview-card</a></li>
	</ul>

<style>
ul {
	position: absolute;
	top: 16px;
	left: 16px;
}
</style>