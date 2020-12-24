<script>
  export let color;
</script>

<div class="hero__line hero__line--{color}" />

<style>
  .hero__line {
    display: block;
    position: relative;
    height: 1.5rem;
    width: 100%;
  }
  .hero__line--red {
    background-color: var(--red);
  }
  .hero__line--green {
    background-color: var(--green);
  }
  .hero__line--blue {
    background-color: var(--blue);
  }

  .hero__line {
    animation-name: slideFromRight;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    will-change: transform;
  }
  .hero__line--red {
    animation-duration: 0.8s;
  }
  .hero__line--green {
    animation-duration: 1s;
  }
  .hero__line--blue {
    animation-duration: 1.2s;
  }
</style>
