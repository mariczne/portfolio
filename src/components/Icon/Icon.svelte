<script lang="ts">
  type IconName =
    | "code"
    | "css3"
    | "github"
    | "git"
    | "html5"
    | "linkedin"
    | "link"
    | "linux"
    | "mail"
    | "messenger"
    | "nodejs"
    | "react"
    | "sql"
    | "typescript"
    | "youtube";

  export let name: IconName;
  export let title = "";
  export let size = "100%";
</script>

<svg width={size} height={size}>
  {#if title}
    <title>{title}</title>
  {/if}
  <use xlink:href={`#icon-${name}`} />
</svg>
