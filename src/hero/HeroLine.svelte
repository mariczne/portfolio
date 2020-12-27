<script lang="ts">
  export let color: "red" | "green" | "blue";
</script>

<div class="hero-line {color}" />

<style>
  .hero-line {
    display: block;
    height: 1.5rem;
    width: 100%;
    animation-name: slideFromRight;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    will-change: transform;
  }

  .red {
    background-color: var(--red);
    animation-duration: 0.8s;
  }

  .green {
    background-color: var(--green);
    animation-duration: 1s;
  }

  .blue {
    background-color: var(--blue);
    animation-duration: 1.2s;
  }
</style>
