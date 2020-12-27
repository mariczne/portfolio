<script lang="ts">
  export let id: string;
  export let headerText: string;
</script>

<section {id}>
  <h2>{headerText}</h2>
  <slot />
</section>

<style>
  section {
    font-size: 2.4rem;
    color: var(--white);
    padding-top: 8rem;
    transition: opacity 1s;
    margin-bottom: 10rem;
  }

  section:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 4rem;
  }
</style>
