<script lang="ts">
  import Section from "../components/Section.svelte";
  import Project from "./Project.svelte";
</script>

<Section id="projects" headerText="Projects">
  <Project
    name="EQTHERM.pl"
    href="https://www.eqtherm.pl"
    imgSrc="static/sm-eqtherm.png"
    description="Commercial project made using Gatsby.js; a modern website for a
      company that will allow easy contact and show the company's line of
      products, with special emphasis on speed and ease of use." />

  <Project
    name="color-ui"
    href="https://mariczne.github.io/color-ui"
    repoHref="https://github.com/mariczne/color-ui"
    imgSrc="static/sm-colorui.png"
    description="Web user interface created using React; the application connects to an
      API that analyses main colours present in the image provided by the
      user and displays results." />

  <Project
    name="kwiek.dev"
    href="https://www.kwiek.dev"
    repoHref="https://github.com/mariczne/portfolio"
    imgSrc="static/sm-kwiekdev.png"
    description="The site that you are viewing right now - a personal portfolio page to
      showcase my projects. Made with pure HTML, CSS and JavaScript with no
      external libraries." />
</Section>
