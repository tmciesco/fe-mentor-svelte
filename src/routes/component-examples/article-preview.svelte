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
      <div class="image">
        <img src="../images/drawers.jpg" alt="green side table with a plant" />
      </div>
      <div class="content">
        <h3 class="content__title">
          Shift the overall look and feel by adding these wonderful touches to furniture in your
          home
        </h3>
        <p class="content__description">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and
          uninviting. I've got some simple tips to help you make any room feel complete.
        </p>
        <div class="details">
          <div>img</div>
          <div>
            <div>name</div>
            <div>date</div>
          </div>
          <div>link</div>
        </div>
      </div>
    </div>
  {/if}
</main>

<style lang="scss">
  :root {
    --bg-light: #ecf2f8;
    --text-dark: #48556a;
    --text-gray: #6e8098;
  }

  main {
    background-color: var(--bg-light);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card {
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 40px 40px -10px rgba(201, 213, 225, 0.503415);
  }

  .image {
    height: 100%;
    width: 285px;
    border-radius: 10px 0 0 10px;

    & img {
      border-radius: 10px 0 0 10px;
      height: inherit;
      width: inherit;
      object-fit: cover;
    }
  }

  .content {
    padding: 32px 40px;
    border-radius: 0 10px 10px 0;
    background-color: #ffffff;
    width: 365px;

    &__title {
      font-size: 18px;
      line-height: 28px;
      color: var(--text-dark);
      margin-bottom: 12px;
    }

    &__description {
      font-size: 13px;
      line-height: 20px;
      color: var(--text-gray);
      margin-bottom: 20px;
    }
  }

  .details {
    display: flex;
  }
</style>
