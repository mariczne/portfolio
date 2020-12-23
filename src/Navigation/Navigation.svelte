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
