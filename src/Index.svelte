<script lang="ts">
  import Navigation from "./navigation/Navigation.svelte";
  import Hero from "./hero/Hero.svelte";
  import Main from "./components/Main.svelte"
  import About from "./about/About.svelte";
  import Projects from "./projects/Projects.svelte";
  import Contact from "./contact/Contact.svelte";
</script>

<slot>
  <Navigation />
  <Hero />
  <Main>
    <About />
    <Projects />
    <Contact />
  </Main>
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
    background-color: var(--black);
    font-family: "Sans", "Arimo";
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
    scrollbar-color: var(--grey) var(--black);
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--black);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--grey);
    border-radius: 20px;
    border: 3px solid var(--black);
  }

  @keyframes slideFromRight {
    0% {
      transform: translateX(110vw);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
