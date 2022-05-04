<script lang="ts">
  import { onMount } from "svelte"
  import { fly } from "svelte/transition"

  let isLoaded: boolean = false

  onMount(() => {
    isLoaded = true
  })
</script>

<main>
  <img class="bg-top" src="../images/bg-pattern-top.svg" alt="" />
  <img class="bg-bottom" src="../images/bg-pattern-bottom.svg" alt="" />
  {#if isLoaded}
    <div class="card" in:fly={{ y: 100 }}>
      <div class="banner-container">
        <img src="../images/bg-pattern-card.svg" alt="" />
      </div>
      <div class="avatar-container">
        <img src="../images/image-victor.jpg" alt="victor" />
      </div>
      <div class="content-container">
        <div
          style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;"
        >
          <h1 class="title">Victor Crest</h1>
          <p style="font-size: 18px; color: #6B7082;">26</p>
        </div>
        <p class="location">London</p>
        <div class="stats-container">
          <div class="stat">
            <div class="stat__number">80K</div>
            <div class="stat__label">Followers</div>
          </div>
          <div class="stat">
            <div class="stat__number">803K</div>
            <div class="stat__label">Likes</div>
          </div>
          <div class="stat">
            <div class="stat__number">1.4K</div>
            <div class="stat__label">Photos</div>
          </div>
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
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    position: relative;
    background-color: #19a1ae;
    overflow: hidden;
  }

  .bg {
    &-top {
      position: absolute;
      top: -350px;
      left: -300px;
      z-index: 1;
    }
    &-bottom {
      position: absolute;
      z-index: 1;
      bottom: -350px;
      right: -300px;
    }
  }

  .card {
    z-index: 2;
    width: 87%;
    max-width: 350px;
    background: #ffffff;
    margin-bottom: 3rem;
    border-radius: 20px;
    box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);
  }

  .banner-container {
    width: 100%;
    height: 140px;
    border-radius: 20px 20px 0 0;
    & img {
      width: inherit;
      height: inherit;
      object-fit: cover;
      border-radius: 20px 20px 0 0;
    }
  }

  .avatar-container {
    margin-top: -48px;
    margin-bottom: 24px;
    height: 96px;

    & img {
      border: 5px solid #ffffff;
      border-radius: 50%;
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;
  }

  .stats-container {
    display: flex;
    padding: 24px 54px;
    justify-content: space-between;
    border-top: 1px solid #979797;
  }

  .stat {
    &__number {
      font-size: 18px;
      font-weight: 700;
      color: #2e3349;
    }

    &__label {
      font-size: 10px;
    }
  }

  .title {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: #2e3349;
  }

  .location {
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 28px;
    color: #6b7082;
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
