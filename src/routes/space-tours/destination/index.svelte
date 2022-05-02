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

<h1>destinations</h1>
<img src={destinations[activeTabIndex].images.png} alt={destinations[activeTabIndex].name} />
{#each destinations as destination, index}
  <p on:click={() => setTab(index)}>{destination.name}</p>
{/each}

<p>{destinations[activeTabIndex].description}</p>
<p>{destinations[activeTabIndex].distance}</p>
<p>{destinations[activeTabIndex].travel}</p>
