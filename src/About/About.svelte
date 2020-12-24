<script>
  import Css3Icon from "../icons/Css3Icon.svelte";
  import GitIcon from "../icons/GitIcon.svelte";

  import Html5Icon from "../icons/Html5Icon.svelte";
  // import LinuxIcon from "../icons/LinuxIcon.svelte";
  import NodejsIcon from "../icons/NodejsIcon.svelte";
  import ReactIcon from "../icons/ReactIcon.svelte";
  import SqlIcon from "../icons/SqlIcon.svelte";
  import TypeScriptIcon from "../icons/TypeScriptIcon.svelte";
</script>

<section class="about" id="about">
  <div class="about__content">
    <h2 class="about__header--primary">About me</h2>

    <p>
      Hi, my name is
      <strong>Marcin</strong>. I primarily build
      <strong>user interfaces</strong>, but I also work with server-side
      technologies.<br />
      My journey with web development began in mid-2018 and I've been learning
      something new every day since. I&nbsp;enjoy solving problems and seeing
      the effect of my work gives me a lot of satisfaction.
    </p>

    <h3 class="about__header--secondary">
      Technologies that I have experience with:
    </h3>
    <h4>On the front-end, I use:</h4>
    <ul class="about__list">
      <li>
        <Html5Icon />HTML
      </li>
      <li>
        <Css3Icon />CSS (SASS)
      </li>
      <li>
        <TypeScriptIcon />TypeScript/JavaScript
      </li>
      <li>
        <ReactIcon />React
      </li>
    </ul>

    <h4>On the back-end, I work with:</h4>
    <ul class="about__list">
      <li>
        <NodejsIcon />Node.js with Express
      </li>
      <li>
        <SqlIcon />SQL or MongoDB
      </li>
    </ul>

    <h4>I also use:</h4>
    <ul class="about__list">
      <li>
        <GitIcon />git
      </li>
      <li>
        <!-- <LinuxIcon /> -->
        Linux
      </li>
    </ul>

    <p>I speak <strong>Polish</strong> and <strong>English</strong>.</p>
  </div>
</section>

<style>
  .about {
    opacity: 100;
    color: var(--white);
    font-size: 2.4rem;
    font-weight: 500;
    text-align: justify;
    margin-bottom: 10rem;
    padding-top: 8rem;
  }
  .about__header--primary {
    margin-bottom: 4rem;
  }
  .about__header--secondary {
    margin: 2rem 0;
  }
  .about__content {
    margin: 0 2rem;
  }
  .about__list {
    margin: 1rem 0;
    list-style: none;
  }

  .about {
    transition: opacity 1s;
  }
</style>
