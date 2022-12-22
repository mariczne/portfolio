<script lang="ts">
  import Section from "../components/Section.svelte";
  import Item from "./Item.svelte";
</script>

<Section id="about" headerText="About me">
  <p>
    Hi, my name is&nbsp;<strong>Marcin</strong>. I primarily build user
    interfaces, but I also work with server-side technologies.<br />
    My journey with web development began in mid-2018 and I've been learning
    something new every day since. I&nbsp;enjoy solving problems and seeing the
    effect of my work gives me a lot of satisfaction.
  </p>

  <h3>Technologies that I have experience with:</h3>
  <h4>On the front-end, I use:</h4>
  <ul>
    <Item icon="html5">HTML</Item>
    <Item icon="css3">CSS (SASS)</Item>
    <Item icon="typescript">TypeScript/JavaScript</Item>
    <Item icon="react">React</Item>
  </ul>

  <h4>On the back-end, I work with:</h4>
  <ul>
    <Item icon="nodejs">Node.js</Item>
    <Item icon="sql">SQL or MongoDB</Item>
  </ul>
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
