<script lang="ts">
  import Icon from "../components/Icon/Icon.svelte";

  export let icon: Icon["$$prop_def"]["name"];
</script>

<li>
  {#if icon}
    <Icon name={icon} size="2rem" />
  {/if}
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
