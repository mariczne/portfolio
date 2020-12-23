<script lang="ts">
  import { onMount } from "svelte";
  import Navigation from "./Navigation.svelte";
  import Hero from "./Hero.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  import Contact from "./Contact.svelte";
  import mountHandler from "./mountHandler";

  onMount(mountHandler);
</script>

<main>
  <Navigation />
  <Hero />
  <div class="container">
    <About />
    <Projects />
    <Contact />
  </div>
</main>

<style lang="scss" global>
  @import "sass/main.scss";

  .container {
    line-height: 1.3;

    @media (min-width: 1140px) {
      max-width: 114rem;
      margin: 0 auto;
    }
  }
</style>
