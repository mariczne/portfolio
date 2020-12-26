<script>
  export let href;
</script>

<a {href} ><slot /></a>

<style>
  a,
  a:link,
  a:visited {
    display: inline-block;
    font-size: 2rem;
    line-height: 2rem;
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    margin: 1rem 2rem;
    vertical-align: middle;
  }
  
  a:hover {
    color: var(--yellow);
  }
</style>
