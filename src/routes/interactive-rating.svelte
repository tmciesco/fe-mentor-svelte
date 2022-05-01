<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  let rating: number;
  let submitSuccess: boolean = false;
  let isSubmitting: boolean = false;
  let isLoaded: boolean = false;
  function handleOnSubmit(e: any) {
    e.preventDefault();
    isSubmitting = true;
    console.log(`Your rating is ${rating}`);
    setTimeout(() => {
      isSubmitting = false;
      submitSuccess = true;
    }, 1500);
  }
  onMount(() => {
    isLoaded = true;
  });
</script>

<main>
  {#if isLoaded}
    <div class="card" in:fly={{ y: 100 }}>
      {#if !submitSuccess}
        <span class="icon">
          <img src="images/icon-star.svg" alt="star icon" />
        </span>
        <h1 class="title">How did we do?</h1>
        <p class="description">
          Please let us know how we did with your support request. All feedback is appreciated to
          help us improve our offering!
        </p>
        <form on:submit={handleOnSubmit}>
          <div class="rating-container">
            {#each { length: 5 } as _, i}
              <label>
                <input type="radio" bind:group={rating} value={i + 1} />
                <span class="rating" class:selected={rating === i + 1}>{i + 1}</span>
              </label>
            {/each}
          </div>
          <button
            class="btn"
            type="submit"
            class:disabled={isSubmitting || !rating}
            disabled={isSubmitting || !rating}>{isSubmitting ? 'Submitting...' : 'Submit'}</button
          >
        </form>
      {:else}
        <div class="result-container">
          <img src="images/illustration-thank-you.svg" alt="thank you illustration" />
          <div class="result">You selected {rating} out of 5</div>
        </div>
        <h1 class="title thank-you">Thank you!</h1>
        <p class="description thank-you">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t
          hesitate to get in touch!
        </p>
      {/if}
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
    background-color: #131518;
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .card {
    color: #ffffff;
    width: 87%;
    max-width: 412px;
    margin-inline: 24px;
    background: linear-gradient(#232a34, #181e27);
    margin-bottom: 3rem;
    padding: 32px;
    border-radius: 24px;
  }

  .title {
    text-align: left;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .description {
    text-align: left;
    line-height: 1.5;
    margin-bottom: 24px;
    color: #969fad;
  }

  .thank-you {
    text-align: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #262e38;
    margin-bottom: 30px;
  }

  input[type='radio'] {
    display: none;
  }

  .btn {
    background-color: #fc7612;
    border: none;
    border-radius: 24px;
    padding: 12px 24px;
    color: #ffffff;
    text-transform: uppercase;
    width: 100%;
  }

  .btn:hover {
    color: #fc7612;
    background-color: #ffffff;
    cursor: pointer;
  }

  .btn.disabled {
    background-color: #7c8798;
    color: #ffffff;
    cursor: not-allowed;
  }

  .rating-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .rating {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #7c8798;
    background-color: #262e38;
    cursor: pointer;
  }

  @media (min-width: 425px) {
    .rating {
      width: 52px;
      height: 52px;
    }
  }

  .rating:hover {
    background-color: #fc7612;
    color: #ffffff;
  }

  .selected {
    background-color: #7c8798;
    color: #ffffff;
  }

  .result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin-bottom: 32px;
  }

  .result {
    color: #fc7612;
    background-color: #262e38;
    padding: 4px 20px;
    border-radius: 24px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  .attribution {
    color: #ffffff;
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: #fc7612;
  }
</style>
