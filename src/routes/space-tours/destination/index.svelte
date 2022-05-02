<script lang="ts">
  type Destination = {
    name: string
    images: any
    description: string
    distance: string
    travel: string
  }

  export let destinations: Destination[]
  let activeTabIndex: number = 0

  function setTab(index: number) {
    activeTabIndex = index
  }
</script>

<img
  class="bg-img"
  src="../images/space-tours/destination/background-destination-desktop.jpg"
  alt="space"
/>
<main>
  <h1 class="ff-sans-cond title">
    <span class="title-number text-accent">01</span> Pick Your Destination
  </h1>
  <div class="content-container">
    <div>
      <img src={destinations[activeTabIndex].images.png} alt={destinations[activeTabIndex].name} />
    </div>
    <div>
      <div class="tabs">
        {#each destinations as destination, index}
          <span class="tab" on:click={() => setTab(index)}>{destination.name}</span>
        {/each}
      </div>

      <h2 class="ff-serif fs-800 uppercase name">{destinations[activeTabIndex].name}</h2>
      <p class="description">{destinations[activeTabIndex].description}</p>
      <hr class="divider" />
      <div class="trip-info">
        <span class="trip-detail">
          <p>Avg. Distance</p>
          <p>{destinations[activeTabIndex].distance}</p>
        </span>
        <span class="trip-detail">
          <p>Est. Travel Time</p>
          <p>{destinations[activeTabIndex].travel}</p>
        </span>
      </div>
    </div>
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
  main {
    max-width: 1110px;
    margin-inline: auto;
  }

  .title {
    margin-bottom: 4rem;
  }

  .title-number {
    font-weight: 700;
  }

  .name {
    margin-bottom: 2rem;
  }

  .description {
    margin-bottom: 3.5rem;
  }

  .divider {
    height: 1px;
    border: none;
    background: #383b4b;
    margin-bottom: 1.5rem;
  }
  .content-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  .tab {
    cursor: pointer;
    font-family: var(--ff-sans-cond);
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
  }

  .trip-info {
    display: flex;
    gap: 5rem;
  }

  .trip-detail {
    & p:first-child {
      font-family: var(--ff-sans-cond);
      color: #d0d6f9;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.36px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    & p:last-child {
      font-family: var(--ff-serif);
      color: #ffffff;
      text-transform: uppercase;
      font-size: 28px;
      line-height: 32px;
    }
  }
</style>
