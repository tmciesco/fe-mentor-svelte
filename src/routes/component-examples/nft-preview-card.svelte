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
        <img src="../images/image-equilibrium.jpg" alt="3d cube on a point" />
      </div>
      <div class="content-container">
        <h1 class="title">Equilibrium #3429</h1>
        <p class="description">Our Equilibrium collection promotes balance and calm.</p>
        <div class="nft">
          <span class="nft__price">0.041 ETH</span>
          <span class="nft__countdown">3 days left</span>
        </div>
        <hr class="divider" />
        <div class="creator">
          <div class="creator__avatar">
            <img src="../images/image-avatar.png" alt="Jules Wyvern" />
          </div>
          <p class="creator__credit">Creation of <span>Jules Wyvern</span></p>
        </div>
      </div>
    </div>
  {/if}
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by
    <a href="https://troycies.co">Troy Ciesco</a>.
  </div>
</main>

<style lang="scss">
  p {
    margin: 0;
    padding: 0;
  }
  main {
    background-color: #0d192c;
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .card {
    width: 87%;
    max-width: 350px;
    background: #15263f;
    margin-bottom: 3rem;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  }

  .img-container {
    width: 100%;
    height: 302px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
  }

  .nft {
    display: flex;
    margin-bottom: 24px;
    align-items: center;
    justify-content: space-between;
  }

  .nft__price {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
    color: #00fff8;
  }

  .nft__countdown {
    color: #8bacd9;
    line-height: 1.25;
  }

  .divider {
    border: 0;
    height: 1px;
    background: #2e405a;
    margin-bottom: 16px;
  }

  .creator {
    display: flex;
    align-items: center;
  }

  .creator__avatar {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
  .creator__avatar img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border: 1px solid #ffffff;
    border-radius: 50%;
  }

  .creator__credit {
    color: #8bacd9;
  }

  .creator__credit span {
    color: #ffffff;
  }

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 8px;
  }

  .title {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #ffffff;
  }

  .description {
    text-align: left;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 24px;
    color: #8bacd9;
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
