<script>
  import NavigationLink from "./NavigationLink.svelte";
  import NavigationUnderline from "./NavigationUnderline.svelte";
  import Github from "../icons/GithubIcon.svelte";
</script>

<nav class="navigation">
  <NavigationLink href="#about">About me</NavigationLink>
  <NavigationLink href="#projects">Projects</NavigationLink>
  <NavigationLink href="#contact">Contact</NavigationLink>
  <NavigationLink href="https://github.com/mariczne">
    <Github />
  </NavigationLink>

  <div class="navigation__underlines">
    <NavigationUnderline color="red" />
    <NavigationUnderline color="green" />
    <NavigationUnderline color="blue" />
  </div>
</nav>

<style>
  .navigation {
    font-weight: 700;
    background-color: var(--black);
    display: block;
    width: 100%;
    position: fixed;
    z-index: 2;
  }

  .navigation__underlines {
    display: none;
    font-size: 0px;
  }

  .navigation {
    animation: opacity 1s 2.5s;
    animation-fill-mode: backwards;
  }

</style>
