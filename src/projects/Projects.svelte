<script lang="ts">
  import Section from "../components/Section.svelte";
  import Project from "./Project.svelte";
</script>

<Section id="projects" headerText="Projects">
  <Project
    key="eqtherm"
    name="EQTHERM.pl"
    href="https://www.eqtherm.pl"
    description="Commercial project made using Gatsby.js; a modern website for a
      company that will allow easy contact and show the company's line of
      products, with special emphasis on speed and ease of use." />

  <Project
    key="colorui"
    name="color-ui"
    href="https://mariczne.github.io/color-ui"
    repoHref="https://github.com/mariczne/color-ui"
    description="Web user interface created using React; the application connects to an
      API that analyses main colours present in the image provided by the
      user and displays results." />

  <Project
    key="kwiekdev"
    name="kwiek.dev"
    href="https://www.kwiek.dev"
    repoHref="https://github.com/mariczne/portfolio"
    description="The site that you are viewing right now - a personal portfolio page to
      showcase my projects. Made with pure HTML, CSS and JavaScript with no
      external libraries." />
</Section>
