<script lang="ts">
  // import { onMount } from "svelte";
  import Navigation from "./Navigation/Navigation.svelte";
  import Hero from "./Hero/Hero.svelte";
  import About from "./About/About.svelte";
  import Projects from "./Projects/Projects.svelte";
  import Contact from "./Contact/Contact.svelte";
  // import mountHandler from "./mountHandler";

  // onMount(mountHandler);
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

<style global>
  :root {
    --red: #fe272a;
    --green: #6fb716;
    --blue: #1aa2c9;
    --yellow: #fad205;
    --white: #eee;
    --black: #121316;
    --grey: #1f2125;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    background-color: #121316;
    font-family: "Arimo", "Liberation Sans", "Arial";
    scroll-behavior: smooth;
  }

  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 37.5%;
    }
  }

  @media (min-width: 2000px) {
    html {
      font-size: 75%;
    }
  }

  @media (min-width: 4000px) {
    html {
      font-size: 100%;
    }
  }

  body {
    overflow-x: hidden;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #1f2125 #121316;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }
  *::-webkit-scrollbar-track {
    background: #121316;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #1f2125;
    border-radius: 20px;
    border: 3px solid #121316;
  }

  main {
    line-height: 1.3;
  }
  @media (min-width: 1140px) {
    main {
      max-width: 114rem;
      margin: 0 auto;
    }
  }

  @keyframes slideFromRight {
    0% {
      transform: translateX(110vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
  @keyframes slideFromLeft {
    0% {
      transform: translateX(-110vw);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
