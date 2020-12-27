<script lang="ts">
  export let color: "red" | "green" | "blue";
</script>

<div class="underline {color}" />

<style>
  .underline {
    display: inline-block;
    height: 1px;
    width: 100%;
    animation-name: slideFromLeft;
    animation-fill-mode: backwards;
    will-change: transform;
  }

  .red {
    background-color: var(--red);
    animation-duration: 0.4s;
  }

  .green {
    background-color: var(--green);
    animation-duration: 0.6s;
  }

  .blue {
    background-color: var(--blue);
    animation-duration: 0.8s;
  }
</style>
