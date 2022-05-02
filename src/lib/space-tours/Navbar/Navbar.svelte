<script lang="ts">
  import logo from "$lib/space-tours/assets/shared/logo.svg"
  import { page } from "$app/stores"

  const links = [
    { routeId: "space-tours", text: "Home" },
    { routeId: "space-tours/destination", text: "Destination" },
    { routeId: "space-tours/crew", text: "Crew" },
    { routeId: "space-tours/technology", text: "Technology" }
  ]
</script>

<header class="primary-header flex">
  <div>
    <img class="logo" src={logo} alt="logo" />
  </div>
  <nav>
    <ul class="primary-navigation underline-indicators flex">
      {#each links as link, index}
        <a href={`/${link.routeId}`} class:active={$page.routeId === link.routeId}>
          <li class="ff-sans-cond uppercase text-white letter-spacing-2">
            <span aria-hidden="true">0{index}</span>{link.text}
          </li>
        </a>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  .logo {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  .primary-header {
    justify-content: space-between;
    align-items: center;
  }

  .primary-navigation {
    --gap: clamp(1.5rem, 5vw, 3.5rem);
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
    background: hsl(var(--clr-white) / 0.05);
    backdrop-filter: blur(1.5rem);

    & a {
      text-decoration: none;

      & span {
        font-weight: 700;
        margin-right: 0.5em;
      }
    }
  }

  @media (min-width: 35em) {
    .primary-navigation {
      padding-inline: clamp(3rem, 7vw, 7rem);
    }
  }

  @media (min-width: 35em) and (max-width: 44.999em) {
    .primary-navigation li > span {
      display: none;
    }
  }

  @media (min-width: 45em) {
    .primary-header::after {
      content: "";
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -2.5rem;
      background: hsl(var(--clr-white) / 0.25);
      order: 1;
    }

    nav {
      order: 2;
    }

    .primary-navigation {
      margin-block: 2rem;
    }
  }

  .underline-indicators > * {
    cursor: pointer;
    padding: var(--underline-gap, 0.5rem) 0;
    border: 0;
    border-bottom: 0.2rem solid hsl(var(--clr-white) / 0);
    background-color: transparent;
  }

  .underline-indicators > *:hover,
  .underline-indicators > *:focus {
    border-color: hsl(var(--clr-white) / 0.5);
  }

  .underline-indicators .active {
    color: hsl(var(--clr-white) / 1);
    border-color: hsl(var(--clr-white) / 1);
  }
</style>
