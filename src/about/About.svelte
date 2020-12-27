<script lang="ts">
  import Section from "../components/Section.svelte";
  import Item from "./Item.svelte";
  import Css3Icon from "../components/Icon/Css3Icon.svelte";
  import GitIcon from "../components/Icon/GitIcon.svelte";
  import Html5Icon from "../components/Icon/Html5Icon.svelte";
  import LinuxIcon from "../components/Icon/LinuxIcon.svelte";
  import NodejsIcon from "../components/Icon/NodejsIcon.svelte";
  import ReactIcon from "../components/Icon/ReactIcon.svelte";
  import SqlIcon from "../components/Icon/SqlIcon.svelte";
  import TypeScriptIcon from "../components/Icon/TypeScriptIcon.svelte";
</script>

<Section id="about" headerText="About me">
  <p>
    Hi, my name is&nbsp;<strong>Marcin</strong>. I primarily build user interfaces, but I also work
    with server-side technologies.<br />
    My journey with web development began in mid-2018 and I've been learning
    something new every day since. I&nbsp;enjoy solving problems and seeing the
    effect of my work gives me a lot of satisfaction.
  </p>

  <h3>Technologies that I have experience with:</h3>
  <h4>On the front-end, I use:</h4>
  <ul>
    <Item Icon={Html5Icon}>HTML</Item>
    <Item Icon={Css3Icon}>CSS (SASS)</Item>
    <Item Icon={TypeScriptIcon}>TypeScript/JavaScript</Item>
    <Item Icon={ReactIcon}>React</Item>
  </ul>

  <h4>On the back-end, I work with:</h4>
  <ul>
    <Item Icon={NodejsIcon}>Node.js</Item>
    <Item Icon={SqlIcon}>SQL or MongoDB</Item>
  </ul>

  <h4>I also use:</h4>
  <ul>
    <Item Icon={GitIcon}>git</Item>
    <Item Icon={LinuxIcon}>Linux</Item>
  </ul>

  <p>I speak&nbsp;<strong>Polish</strong>&nbsp;and&nbsp;<strong>English</strong>.</p>
</Section>

<style>
  h3 {
    margin: 2rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    list-style: none;
  }
</style>
