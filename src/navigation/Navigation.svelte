<script lang="ts">
  import NavigationLink from "./NavigationLink.svelte";
  import NavigationUnderline from "./NavigationUnderline.svelte";
  import Icon from "../components/Icon/Icon.svelte";
</script>

<nav>
  <NavigationLink href="#about">About me</NavigationLink>
  <NavigationLink href="#projects">Projects</NavigationLink>
  <NavigationLink href="#contact">Contact</NavigationLink>
  <NavigationLink href="https://github.com/mariczne">
    <Icon name="github" size="18" title="See my GitHub profile" />
  </NavigationLink>

  <div class="underlines">
    <NavigationUnderline color="red" />
    <NavigationUnderline color="green" />
    <NavigationUnderline color="blue" />
  </div>
</nav>

<style>
  nav {
    font-weight: 700;
    background-color: var(--black);
    display: block;
    width: 100%;
    position: fixed;
    z-index: 2;
    animation: toFullOpacity 1s 2.5s;
    animation-fill-mode: backwards;
  }

  .underlines {
    display: none;
    font-size: 0px;
  }

  @keyframes toFullOpacity {
    0% {
      /* Hack for Lighthouse */
      opacity: 0.001;
    }
    100% {
      opacity: 100;
    }
  }
</style>
