<script context="module" lang="ts">
  // export const prerender = true;
</script>

<script lang="ts">
  import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="welcome">
    <div>A site for Frontend Mentor challenges.</div>
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .welcome {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
