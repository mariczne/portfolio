<script>
  export let color;
</script>

<div class="navigation__underline navigation__underline--{color}" />

<style>
  .navigation__underline {
    display: inline-block;
    position: relative;
    height: 1px;
    width: 100%;
  }
  .navigation__underline--red {
    background-color: var(--red);
  }
  .navigation__underline--green {
    background-color: var(--green);
  }
  .navigation__underline--blue {
    background-color: var(--blue);
  }

  .navigation__underline {
    animation-name: slideFromLeft;
    animation-fill-mode: backwards;
    will-change: transform;
  }
  .navigation__underline--red {
    animation-duration: 0.4s;
  }
  .navigation__underline--green {
    animation-duration: 0.6s;
  }
  .navigation__underline--blue {
    animation-duration: 0.8s;
  }
</style>
