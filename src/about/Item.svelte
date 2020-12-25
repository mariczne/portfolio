<script>
  export let Icon;
</script>

<li>
  <Icon />
  <span><slot /></span>
</li>

<style>
  li {
    display: inline-flex;
    align-items: center;
  }

  span {
    margin-left: 0.5em;
  }
</style>
