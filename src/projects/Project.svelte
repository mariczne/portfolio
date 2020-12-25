<script>
  import CodeIcon from "../components/Icon//CodeIcon.svelte";
  import LinkIcon from "../components/Icon//LinkIcon.svelte";

  export let href;
  export let imgSrc;
  export let imgAlt;
  export let repoHref;
  export let name;
  export let description;
</script>

<div class="projects__item">
  <div class="projects__item-imagebox">
    <a {href}>
      <img src={imgSrc} alt={imgAlt || name} class="projects__item-image" />
    </a>
  </div>
  <div class="projects__item-description">
    <h3 class="projects__item-header">{name}</h3>
    <span class="projects__item-links">
      <a {href} class="projects__item-link">
        <LinkIcon size={32} />
      </a>
      {#if repoHref}
        <a href={repoHref} class="projects__item-link">
          <CodeIcon size={32} />
        </a>
      {/if}
    </span>
    <p>{description}</p>
  </div>
</div>

<style>
  .projects__item {
    display: flex;
    flex-direction: row;
    background-color: var(--grey);
    border-radius: 3px;
    padding: 4rem;
    margin: 4rem 0;
  }
  @media (max-width: 639px) {
    .projects__item {
      flex-direction: column;
    }
  }
  .projects__item-description {
    flex-basis: 70%;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .projects__item-description p {
    font-size: 2rem;
  }
  .projects__item-links {
    margin: 1rem 0 1rem 0.2rem;
  }
  .projects__item-link,
  .projects__item-link:link,
  .projects__item-link:visited {
    display: inline-flex;
    align-items: center;
    min-width: 48px;
    min-height: 48px;
    color: inherit;
    text-decoration: none;
  }

  .projects__item-link:hover {
    color: var(--yellow);
  }
  .projects__item-imagebox {
    position: relative;
    margin-right: 2rem;
    flex-basis: 30%;
    flex-shrink: 0;
  }
  @media (max-width: 639px) {
    .projects__item-imagebox {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
  .projects__item-image {
    max-width: 100%;
    max-height: 100%;
  }
  @media (min-width: 640px) {
    .projects__item-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
