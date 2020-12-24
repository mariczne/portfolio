<script>
  import Footer from "./Footer.svelte";
  import GithubIcon from "../icons/GithubIcon.svelte";
  import FacebookIcon from "../icons/FacebookIcon.svelte";
  import LinkedinIcon from "../icons/LinkedinIcon.svelte";
  import MailIcon from "../icons/MailIcon.svelte";
</script>

<section class="contact" id="contact">
  <div class="contact__content">
    <h2 class="contact__header">Contact</h2>
    <p>
      If you are interested in my services, would like to collaborate or simply
      have a question, feel free to contact me using one of the following:
    </p>
    <div class="contact__links">
      <a href="mailto:mxaxxrzzcyyin@kwzzixeyyk.dev" id="mail-link">
        <MailIcon />
      </a>
      <a href="https://m.me/marcin.kwiekk">
        <FacebookIcon />
      </a>
      <a href="https://www.linkedin.com/in/marcin-kwiek/">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/mariczne">
        <GithubIcon />
      </a>
    </div>
  </div>
  <Footer />
</section>

<style>
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 100;
    min-height: 100vh;
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 500;
    text-align: justify;
    padding-top: 8rem;
  }
  .contact__header {
    margin-bottom: 4rem;
  }
  .contact__content {
    margin: 0 2rem;
    height: 100%;
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

  .contact {
    transition: opacity 1s;
  }
</style>
