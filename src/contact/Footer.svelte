<script lang="ts">
  import Icon from "../components/Icon/Icon.svelte";

  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="copyright">&copy; 2019-{currentYear} Marcin Kwiek</div>
  <div class="inspired-by">
    inspired by
    <a href="https://www.youtube.com/watch?v=e9DfSCk-6Ko" class="ytlink">
      <span><Icon name="youtube" size="1.6rem" /></span>blank vhs covers were kinda
      beautiful
    </a>
  </div>
</footer>

<style>
  footer {
    text-align: center;
    font-size: 1.6rem;
  }

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
