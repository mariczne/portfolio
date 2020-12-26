<script lang="ts">
  // import type { SvelteComponentTyped } from "svelte";

  export let Icon: any;
</script>

<li>
  <Icon size="2rem" />
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
