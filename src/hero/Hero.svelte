<script>
  import HeroLine from "./HeroLine.svelte";
</script>

<div class="hero">
  <div class="hero__wrapper">
    <div class="hero__name"><span>Marcin Kwiek</span></div>
    <div class="hero__lines">
      <HeroLine color="red" />
      <HeroLine color="green" />
      <HeroLine color="blue" />
    </div>
    <div class="hero__title">
      <span class="hero__title-line-top">
        web
        <span class="hero__title--small">front&centerdot;end</span>
      </span>
      <br />
      <span class="hero__title-line-bottom">developer</span>
    </div>
  </div>
</div>

<style>
  .hero {
    position: relative;
    height: 100vh;
    width: 100vw;
    color: var(--white);
    overflow-x: hidden;
    backface-visibility: hidden;
    user-select: none;
  }
  .hero__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(-14deg);
    width: 110%;
    line-height: 1;
    backface-visibility: hidden;
    overflow: hidden;
  }
  .hero__name {
    position: relative;
    font-family: "Helvetica Neue Bold", "Liberation Sans", "Arial";
    font-size: 6.4rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }
  .hero__title {
    font-family: "Helvetica Neue Bold", "Liberation Sans", "Arial";
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-right: 12.8rem;
  }
  .hero__title-line-top {
    display: inline-block;
    position: relative;
    font-size: 6.4rem;
    color: var(--yellow);
    margin-bottom: -1rem;
  }
  .hero__title-line-bottom {
    display: inline-block;
    position: relative;
    font-size: 5.8rem;
  }
  .hero__title--small {
    font-size: 50%;
  }
  .hero__lines {
    font-size: 0px;
    overflow: hidden;
  }

  .hero__name {
    animation: 1.6s slideFromRight 0.5s;
    animation-fill-mode: backwards;
    will-change: transform;
  }
  .hero__title-line-top {
    animation-duration: 1.8s;
    animation-name: slideFromRight;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    will-change: transform;
  }
  .hero__title-line-bottom {
    animation-duration: 2s;
    animation-name: slideFromRight;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    will-change: transform;
  }
</style>
