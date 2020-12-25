<script>
  import YoutubeIcon from "../components/Icon//YoutubeIcon.svelte";

  let currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="logobox">
    <div class="logo" />
  </div>
  <div class="copyright">&copy; 2019-{currentYear} Marcin Kwiek</div>
  <div class="inspired-by">
    inspired by
    <a href="https://www.youtube.com/watch?v=e9DfSCk-6Ko" class="ytlink">
      <span><YoutubeIcon size="1.6rem" /></span>blank vhs covers were kinda
      beautiful
    </a>
  </div>
</footer>

<style>
  footer {
    text-align: center;
    font-size: 1.6rem;
  }
  /* .footer__logobox img {
    padding-top: 1rem;
    max-width: 2rem;
  } */
  .copyright {
    padding: 1rem;
    color: #ddd;
  }
  .inspired-by {
    display: inline-flex;
    padding-bottom: 1rem;
    color: #7d7d7d;
  }

  .inspired-by span {
    display: inline-flex;
    align-items: center;
    margin: 0 0.5em;
  }

  .ytlink,
  .ytlink:link,
  .ytlink:visited {
    display: inline-flex;
    align-items: center;
    color: #aaa;
    text-decoration: none;
  }
</style>
