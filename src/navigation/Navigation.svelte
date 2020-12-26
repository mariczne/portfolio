<script>
  import NavigationLink from "./NavigationLink.svelte";
  import NavigationUnderline from "./NavigationUnderline.svelte";
  import GithubIcon from "../components/Icon//GithubIcon.svelte";
</script>

<nav>
  <NavigationLink href="#about">About me</NavigationLink>
  <NavigationLink href="#projects">Projects</NavigationLink>
  <NavigationLink href="#contact">Contact</NavigationLink>
  <NavigationLink href="https://github.com/mariczne">
    <GithubIcon size={18} />
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
</style>
