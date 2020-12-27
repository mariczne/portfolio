<script lang="ts">
  import CodeIcon from "../components/Icon/CodeIcon.svelte";
  import LinkIcon from "../components/Icon/LinkIcon.svelte";

  export let key: string;
  export let name: string;
  export let href: string;
  export let repoHref: string;
  export let description: string;
</script>

<div class="project">
  <a class="imagebox" {href}>
    <picture>
      <source
        media="(max-width: 767px)"
        srcset={`static/images/${key}-736.webp`} />
      <source
        media="(min-width: 768px)"
        srcset={`static/images/${key}-320.webp`} />
      <source srcset={`static/images/${key}-736.png`} />
      <img
        src={`static/images/${key}-736.png`}
        loading="lazy"
        alt={`${name} screenshot`} />
    </picture>
  </a>
  <div class="description">
    <header>
      <h3>{name}</h3>
      <span class="links">
        <a {href} class="link">
          <LinkIcon size="32" title={`See ${name} live`} />
        </a>
        {#if repoHref}
          <a href={repoHref} class="link">
            <CodeIcon size="32" title={`Visit ${name} code repository`} />
          </a>
        {/if}
      </span>
    </header>
    <p>{description}</p>
  </div>
</div>

<style>
  .project {
    display: flex;
    flex-direction: row;
    background-color: var(--grey);
    border-radius: 3px;
    padding: 4rem;
    margin: 4rem 0;
  }

  .description {
    flex-basis: 70%;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .description p {
    font-size: 2rem;
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 767px) {
    .project {
      flex-direction: column;
    }

    header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .links {
    margin: 1rem 0 1rem 0.2rem;
  }

  .link,
  .link:link,
  .link:visited {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    min-height: 48px;
    color: inherit;
    text-decoration: none;
  }

  .link:hover {
    color: var(--yellow);
  }

  .imagebox {
    position: relative;
    margin-right: 2rem;
    flex-shrink: 0;
    width: 320px;
  }

  @media (max-width: 767px) {
    .imagebox {
      margin-right: 0;
      margin-bottom: 2rem;
      width: auto;
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
