<script lang="ts">
  type Technology = {
    name: string
    images: any
    description: string
  }

  export let technologies: Technology[]
  let activeTabIndex: number = 0

  function setTab(index: number) {
    activeTabIndex = index
  }
</script>

<h1>Technology</h1>
<img src={technologies[activeTabIndex].images.portrait} alt={technologies[activeTabIndex].name} />
{#each technologies as technology, index}
  <p on:click={() => setTab(index)}>{technology.name}</p>
{/each}

<p>{technologies[activeTabIndex].description}</p>
