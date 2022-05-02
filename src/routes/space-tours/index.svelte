<img
  class="bg-img"
  src="../images/space-tours/home/background-home-desktop.jpg"
  alt="space view of earth"
/>
<main class="grid-container grid-container--home">
  <div>
    <h1 class="ff-sans-cond text-accent fs-500 uppercase letter-spacing-1">
      So, you want to travel to <span class="d-block ff-serif fs-900 text-white">space</span>
    </h1>
    <p class="ff-sans text-accent">
      Let's face it; if you want to go to space, you might as well genuinely go to outer space and
      not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly
      out of this world experience!
    </p>
  </div>
  <div>
    <a href="/space-tours/destination" class="large-button uppercase ff-serif text-dark bg-white">
      Explore
    </a>
  </div>
</main>

<style lang="scss">
  .bg-img {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }
  @media (min-width: 45em) {
    .grid-container {
      text-align: left;
      column-gap: var(--container-gap, 10rem);
      grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
    }

    .grid-container--home {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }

    .grid-container--home > *:first-child {
      grid-column: 2;
    }

    .grid-container--home > *:last-child {
      grid-column: 3;
    }
  }
</style>
