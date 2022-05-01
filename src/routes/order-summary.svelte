<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let isLoaded: boolean = false;

  onMount(() => {
    isLoaded = true;
  });
</script>

<main>
  {#if isLoaded}
    <div class="card" in:fly={{ y: 100 }}>
      <div class="img-container">
        <img src="images/illustration-hero.svg" alt="Illustrated woman dancing with headphones on" />
      </div>
      <div class="content-container">
        <h1 class="title">Order Summary</h1>
        <p class="description">
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        <div class="plan">
          <div style="flex-grow: 1; display: flex; align-items: center;">
            <div class="plan__icon">
              <img src="images/icon-music.svg" alt="music icon" />
            </div>
            <div class="plan__details">
            <span class="plan__type">Annual Plan</span>
            <span class="plan__price">$59.99 / year</span>
          </div>
        </div>
          <span class="plan__update">Change</span>
        </div>
        <button class="btn btn--primary">Proceed to Payment</button>
        <button class="btn btn--secondary">Cancel Order</button>
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

<style>
  p {
    margin: 0;
    padding: 0;
  }
  main {
    background-color: #E0E8FF;
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
    max-width: 450px;
    background: #ffffff;
    margin-bottom: 3rem;
    border-radius: 20px;
    box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);
  }

  .img-container {
    width: 100%;
    height: 220px;
    border-radius: 20px 20px 0 0;
  }

  .content-container {
    padding: 48px;
    display: flex;
    flex-direction: column;
  }

  .plan {
    display: flex;
    border-radius: 12px;
    background-color: #F7F9FF;
    padding: 24px;
    margin-bottom: 32px;
    align-items: center;
    justify-content: space-between;
  }

  .plan__icon {
    margin-right: 20px;
  }

  .plan__details {
    display: flex;
    flex-direction: column;
  }

  .plan__type {
    font-weight: 900;
    color: #1F2E55;
    margin-bottom: 4px;
    text-align: left;
  }

  .plan__price {
    font-weight: 500;
    color: #717FA6;
  }

  .plan__update {
    font-weight: 700;
    color: #382AE1;
    text-decoration: underline;
    cursor: pointer;
  }

  .btn {
    font-size: 16px;
    font-weight: 900;
    border: none;
    cursor: pointer;
  }

  .btn--primary {
    color: #ffffff;
    background-color: #382AE1;
    box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 32px;
  }

  .btn--secondary {
    color: #717FA6;
    background: none;
  }
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  .title {
    text-align: center;
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 16px;
    color: #1F2E55;
  }

  .description {
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #717fa6;
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
