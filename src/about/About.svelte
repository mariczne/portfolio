<script>
  import Section from "../components/Section.svelte";
  import Css3Icon from "../components/Icon/Css3Icon.svelte";
  import GitIcon from "../components/Icon/GitIcon.svelte";

  import Html5Icon from "../components/Icon/Html5Icon.svelte";
  // import LinuxIcon from "../components/Icon/LinuxIcon.svelte";
  import NodejsIcon from "../components/Icon/NodejsIcon.svelte";
  import ReactIcon from "../components/Icon/ReactIcon.svelte";
  import SqlIcon from "../components/Icon/SqlIcon.svelte";
  import TypeScriptIcon from "../components/Icon/TypeScriptIcon.svelte";
</script>

<Section id="about" headerText="About me">
  <p>
    Hi, my name is Marcin. I primarily build user interfaces, but I also work
    with server-side technologies.<br />
    My journey with web development began in mid-2018 and I've been learning
    something new every day since. I&nbsp;enjoy solving problems and seeing the
    effect of my work gives me a lot of satisfaction.
  </p>

  <h3 class="about__header--secondary">
    Technologies that I have experience with:
  </h3>
  <h4>On the front-end, I use:</h4>
  <ul class="about__list">
    <li>
      <Html5Icon /><span>HTML</span>
    </li>
    <li>
      <Css3Icon /><span>CSS (SASS)</span>
    </li>
    <li>
      <TypeScriptIcon /><span>TypeScript/JavaScript</span>
    </li>
    <li>
      <ReactIcon /><span>React</span>
    </li>
  </ul>

  <h4>On the back-end, I work with:</h4>
  <ul class="about__list">
    <li>
      <NodejsIcon /><span>Node.js with Express</span>
    </li>
    <li>
      <SqlIcon /><span>SQL or MongoDB</span>
    </li>
  </ul>

  <h4>I also use:</h4>
  <ul class="about__list">
    <li>
      <GitIcon /><span>git</span>
    </li>
    <li>
      <!-- <LinuxIcon /> -->
      <span>Linux</span>
    </li>
  </ul>

  <p>I speak <strong>Polish</strong> and <strong>English</strong>.</p>
</Section>

<style>
  .about__header--secondary {
    margin: 2rem 0;
  }
  .about__list {
    margin: 1rem 0;
    list-style: none;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  ul li {
    display: inline-flex;
    align-items: center;
  }

  ul li > span {
    margin-left: 0.5em;
  }
</style>
