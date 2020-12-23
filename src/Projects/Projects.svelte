<script>
  import ProjectsItem from "./ProjectsItem.svelte";
</script>

<section class="projects" id="projects">
  <div class="projects__content">
    <h2 class="projects__header">Projects</h2>
    <ProjectsItem
      name="EQTHERM.pl"
      href="https://www.eqtherm.pl"
      imgSrc="img/project1.jpg"
      imgAlt="eqtherm"
      description="Commercial project made using Gatsby.js; a modern website for a
      company that will allow easy contact and show the company's line of
      products, with special emphasis on speed and ease of use." />

    <ProjectsItem
      name="color-ui"
      href="https://mariczne.github.io/color-ui"
      repohref="https://github.com/mariczne/color-ui"
      imgSrc="img/project2.jpg"
      description="Web user interface created using React; the application connects to an
      API that analyses main colours present in the image provided by the
      user and displays results." />

    <ProjectsItem
      name="kwiek.dev"
      href="https://www.kwiek.dev"
      repoHref="https://github.com/mariczne/portfolio"
      imgSrc="img/project3.png"
      description="The site that you are viewing right now - a personal portfolio page to
      showcase my projects. Made with pure HTML, CSS and JavaScript with no
      external libraries." />
  </div>
</section>
