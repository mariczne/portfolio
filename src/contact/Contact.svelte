<script lang="ts">
  import Section from "../components/Section.svelte";
  import Footer from "./Footer.svelte";
  import GithubIcon from "../components/Icon/GithubIcon.svelte";
  import MessengerIcon from "../components/Icon/MessengerIcon.svelte";
  import LinkedinIcon from "../components/Icon/LinkedinIcon.svelte";
  import MailIcon from "../components/Icon/MailIcon.svelte";

  const fallbackDecodeMessage = encodeURIComponent(
    `If you're seeing this message, something went wrong and spambot prevention didn't work properly. Please replace appropriate characters in the e-mail address manually.`
  );
</script>

<Section id="contact" headerText="Contact">
  <div class="content">
    <p>
      If you are interested in my services, would like to collaborate or simply
      have a question, feel free to contact me using one of the following:
    </p>
    <div class="links">
      <a
        href={`mailto:marcin🐒kwiek🍅dev?body=${fallbackDecodeMessage}`}
        id="mail-link">
        <MailIcon size="7.2rem" />
      </a>
      <a href="https://m.me/marcin.kwiekk">
        <MessengerIcon size="7.2rem" />
      </a>
      <a href="https://www.linkedin.com/in/marcin-kwiek/">
        <LinkedinIcon size="7.2rem" />
      </a>
      <a href="https://github.com/mariczne">
        <GithubIcon size="7.2rem" />
      </a>
    </div>
  </div>
  <Footer />
</Section>

<style>
  .content {
    flex-grow: 1;
  }

  .links {
    display: flex;
    justify-content: space-around;
    margin-top: 8rem;
    padding: 4rem;
    font-size: 7.2rem;
  }

  a,
  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: var(--yellow);
  }
</style>
