<script lang="ts">
  import type { IconType } from "../components/Icon/Icon";
  import KwiekdevIcon from "../components/Icon/KwiekdevIcon.svelte";

  export let Icon: typeof IconType = KwiekdevIcon;
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
