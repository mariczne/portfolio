<script>
  import YoutubeIcon from "../icons/YoutubeIcon.svelte";

  let currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer__logobox"><img src="img/logo.png" alt="Logo" /></div>
  <div class="footer__copyright">&copy; 2019-{currentYear} Marcin Kwiek</div>
  <div class="footer__inspired-by">
    inspired by&NonBreakingSpace;
    <a
      href="https://www.youtube.com/watch?v=e9DfSCk-6Ko"
      class="footer__ytlink">
      <YoutubeIcon />&NonBreakingSpace; blank vhs covers were kinda beautiful
    </a>
  </div>
</footer>

<style>
  .footer {
    text-align: center;
    font-size: 1.6rem;
  }
  .footer__logobox img {
    padding-top: 1rem;
    max-width: 2rem;
  }
  .footer__copyright {
    padding: 1rem;
    color: #ddd;
  }
  .footer__inspired-by {
    padding-bottom: 1rem;
    color: #666;
  }

  .footer__ytlink,
  .footer__ytlink:link,
  .footer__ytlink:visited {
    color: #aaa;
    text-decoration: none;
  }
</style>
