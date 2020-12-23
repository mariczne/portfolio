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
