<script lang="ts">
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  let isDrawerOpen: boolean = false;
  import { fade, fly } from 'svelte/transition';

  let duration = 350;

  function toggleDrawer() {
    setTimeout(
      () => {
        window.document.body.classList.toggle('open-drawer');
      },
      isDrawerOpen ? duration + 100 : 0
    );
    isDrawerOpen = !isDrawerOpen;
  }

  const links = [
    { href: '/', text: 'Home' },
    { href: 'https://github.com/tmciesco/fe-mentor-svelt', text: 'Github' },
    { href: '/interactive-rating', text: 'Interactive Rating' },
    { href: '/order-summary', text: 'Order Summary' },
    { href: '/nft-preview-card', text: 'NFT Preview Card' },
    { href: '/qr-code', text: 'QR Code' },
    { href: '/space-tours', text: 'Space Tours' },
    { href: '/stats-preview-card', text: 'Stats Preview Card' }
  ];
</script>

<button on:click={toggleDrawer}>
  <i class="ph-hamburger" />
</button>
<slot />

{#if isDrawerOpen}
  <div class="drawer" in:fly={{ x: 100, duration }} out:fly={{ x: 100, duration }}>
    <button on:click={toggleDrawer}>
      <i class="ph-x" />
    </button>
    <ul>
      {#each links as link}
        <li><a on:click={toggleDrawer} href={link.href}>{link.text}</a></li>
      {/each}
    </ul>
  </div>
  <div
    class="overlay"
    in:fade={{ duration: duration - 100 }}
    out:fade={{ duration: duration - 100 }}
  />
{/if}

<style lang="scss">
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(189, 7, 7, 0.507);
    z-index: 2;
  }
</style>
