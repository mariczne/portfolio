<script lang="ts">
  import HeroLine from "./HeroLine.svelte";
</script>

<div class="hero">
  <div class="wrapper">
    <div class="name"><span>Marcin Kwiek</span></div>
    <div class="hero-lines">
      <HeroLine color="red" />
      <HeroLine color="green" />
      <HeroLine color="blue" />
    </div>
    <div class="title">
      <span class="title-line title-line-top">
        web&nbsp;
        <span class="small">front&centerdot;end</span>
      </span>
      <br />
      <span class="title-line title-line-bottom">developer</span>
    </div>
  </div>
</div>

<style>
  .hero {
    position: relative;
    height: 100vh;
    width: 100vw;
    color: var(--white);
    font-weight: 700;
    text-transform: uppercase;
    overflow-x: hidden;
    backface-visibility: hidden;
    user-select: none;
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(-14deg);
    width: 110%;
    line-height: 1;
    backface-visibility: hidden;
    overflow: hidden;
  }

  .name {
    font-size: 6.4rem;
    text-align: center;
    animation: 1.6s slideFromRight 0.5s;
    animation-fill-mode: backwards;
    will-change: transform;
  }

  .hero-lines {
    font-size: 0px;
    overflow: hidden;
  }

  .title {
    text-align: center;
    /* margin-right: 12.8rem; */
    transform: translateX(-6rem);
  }

  .title-line {
    display: inline-block;
    animation-name: slideFromRight;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    will-change: transform;
  }

  .title-line-top {
    font-size: 6.4rem;
    color: var(--yellow);
    margin-bottom: -1rem;
    animation-duration: 1.8s;
  }

  .title-line-bottom {
    font-size: 5.8rem;
    animation-duration: 2s;
  }

  .small {
    font-size: 50%;
  }
</style>
