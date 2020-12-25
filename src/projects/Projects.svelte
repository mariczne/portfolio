<script>
  import ProjectsItem from "./ProjectsItem.svelte";
</script>

<section id="projects">
  <div class="content">
    <h2>Projects</h2>
    <ProjectsItem
      name="EQTHERM.pl"
      href="https://www.eqtherm.pl"
      imgSrc="static/eqtherm.png"
      imgAlt="eqtherm"
      description="Commercial project made using Gatsby.js; a modern website for a
      company that will allow easy contact and show the company's line of
      products, with special emphasis on speed and ease of use." />

    <ProjectsItem
      name="color-ui"
      href="https://mariczne.github.io/color-ui"
      repoHref="https://github.com/mariczne/color-ui"
      imgSrc="static/colorui.png"
      description="Web user interface created using React; the application connects to an
      API that analyses main colours present in the image provided by the
      user and displays results." />

    <ProjectsItem
      name="kwiek.dev"
      href="https://www.kwiek.dev"
      repoHref="https://github.com/mariczne/portfolio"
      imgSrc="static/kwiekdev.png"
      description="The site that you are viewing right now - a personal portfolio page to
      showcase my projects. Made with pure HTML, CSS and JavaScript with no
      external libraries." />
  </div>
</section>

<style>
  section#projects {
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 500;
    text-align: justify;
    margin-bottom: 10rem;
    padding-top: 8rem;
    transition: opacity 1s;
  }
  h2 {
    margin: 0 0 4rem;
  }
  .content {
    margin: 0 2rem;
  }
</style>
