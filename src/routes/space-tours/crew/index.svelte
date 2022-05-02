<script lang="ts">
  type CrewMember = {
    name: string
    images: any
    role: string
    bio: string
  }

  export let crewMembers: CrewMember[]
  let activeTabIndex: number = 0

  function setTab(index: number) {
    activeTabIndex = index
  }
</script>

<h1>Crew</h1>
<img src={crewMembers[activeTabIndex].images.png} alt={crewMembers[activeTabIndex].name} />
{#each crewMembers as crewMember, index}
  <p on:click={() => setTab(index)}>{crewMember.name}</p>
{/each}

<p>{crewMembers[activeTabIndex].role}</p>
<p>{crewMembers[activeTabIndex].bio}</p>
