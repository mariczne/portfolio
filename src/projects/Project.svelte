<script>
  import CodeIcon from "../components/Icon//CodeIcon.svelte";
  import LinkIcon from "../components/Icon//LinkIcon.svelte";

  export let name;
  export let href;
  export let repoHref;
  export let imgSrc;
  export let description;
</script>

<div class="project">
  <a class="imagebox" {href}>
    <img src={`${imgSrc}?nf_resize=fit&w=660`} alt={`${name} screenshot`} />
  </a>
  <div class="description">
    <header>
      <h3>{name}</h3>
      <span class="links">
        <a {href} class="link">
          <LinkIcon size={32} />
        </a>
        {#if repoHref}
          <a href={repoHref} class="link">
            <CodeIcon size={32} />
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
