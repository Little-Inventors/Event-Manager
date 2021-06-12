<script>
  export let type;
  export let href;
</script>

<!-- navigation -->
{#if href}
  <button><a {href}><slot /></a></button>
{:else}
  <!-- normal button -->
  <button {type} on:click><slot /></button>
{/if}

<style>
  a {
    text-decoration: none;
    color: #222831;
  }
  button {
    margin: 2px 8px;
    background-color: #00adb5;
    height: 40px;
    padding: 0 40px;
    border: none;
  }
</style>
