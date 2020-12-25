<script>
  export let href;
</script>

<a {href} class="navigation__link"><slot /></a>

<style>
  .navigation__link,
  .navigation__link:link,
  .navigation__link:visited {
    display: inline-block;
    font-size: 2rem;
    line-height: 2rem;
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    margin: 1rem 2rem;
    vertical-align: middle;
  }
  .navigation__link:hover {
    color: var(--yellow);
  }
</style>
