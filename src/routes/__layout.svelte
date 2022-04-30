<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

	<slot />

	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/interactive-rating-component">interactive-rating-component</a></li>
		<li><a href="/qr-code-component">qr-code-component</a></li>
	</ul>

<style>
ul {
	position: absolute;
	bottom: 16px;
	left: 16px;
}
</style>