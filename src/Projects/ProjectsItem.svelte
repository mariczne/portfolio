<script>
  import CodeIcon from "../icons/CodeIcon.svelte";
  import LinkIcon from "../icons/LinkIcon.svelte";

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
        <LinkIcon />
      </a>
      {#if repoHref}
        <a href={repoHref} class="projects__item-link">
          <CodeIcon />
        </a>
      {/if}
    </span>
    <p>{description}</p>
  </div>
</div>
