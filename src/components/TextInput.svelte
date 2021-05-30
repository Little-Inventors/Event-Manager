<script>
  export let label;
  export let type;
  export let value = "";
</script>

<div class="form-control">
  <label for={label}>{label}</label>
  {#if type === "text"}
    <input type="text" id={label} {value} on:input />
  {:else}
    <textarea type="text" id="description" {value} on:input />
  {/if}
</div>
