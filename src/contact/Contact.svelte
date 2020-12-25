<script lang="ts">
  import Section from "../components/Section.svelte";
  import Footer from "./Footer.svelte";
  import GithubIcon from "../components/Icon//GithubIcon.svelte";
  import FacebookIcon from "../components/Icon//FacebookIcon.svelte";
  import LinkedinIcon from "../components/Icon//LinkedinIcon.svelte";
  import MailIcon from "../components/Icon//MailIcon.svelte";
</script>

<Section id="contact" headerText="Contact">
  <div class="contact__content">
    <p>
      If you are interested in my services, would like to collaborate or simply
      have a question, feel free to contact me using one of the following:
    </p>
    <div class="contact__links">
      <a href="mailto:mxaxxrzzcyyin@kwzzixeyyk.dev" id="mail-link">
        <MailIcon size={72} />
      </a>
      <a href="https://m.me/marcin.kwiekk">
        <FacebookIcon size={72} />
      </a>
      <a href="https://www.linkedin.com/in/marcin-kwiek/">
        <LinkedinIcon size={72} />
      </a>
      <a href="https://github.com/mariczne">
        <GithubIcon size={72} />
      </a>
    </div>
  </div>
  <Footer />
</Section>

<style>
  .contact__content {
    flex-grow: 1;
  }
  .contact__links {
    display: flex;
    justify-content: space-around;
    margin-top: 8rem;
    padding: 4rem;
  }
  .contact__links > * {
    font-size: 7.2rem;
  }
  .contact__links > a,
  .contact__links > a:link,
  .contact__links > a:visited {
    color: inherit;
    text-decoration: none;
  }
  .contact__links > a:hover {
    color: var(--yellow);
  }
</style>
