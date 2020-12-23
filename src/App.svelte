<script lang="ts">
  import { onMount } from "svelte";
  import Navigation from "./Navigation/Navigation.svelte";
  import Hero from "./Hero/Hero.svelte";
  import About from "./About/About.svelte";
  import Projects from "./Projects/Projects.svelte";
  import Contact from "./Contact/Contact.svelte";
  import mountHandler from "./mountHandler";

  onMount(mountHandler);
</script>

<slot>
  <Navigation />
  <Hero />
  <main>
    <About />
    <Projects />
    <Contact />
  </main>
</slot>

<style lang="scss" global>
  @import "sass/main.scss";

  main {
    line-height: 1.3;

    @media (min-width: 1140px) {
      max-width: 114rem;
      margin: 0 auto;
    }
  }
</style>
