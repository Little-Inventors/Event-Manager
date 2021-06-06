<script>
  export let label;
  export let type;
  export let rows = 10;
  export let value = "";
</script>

<div>
  <label for={label}>{label}</label>
  {#if type === "textarea"}
    <textarea id="description" {rows} {value} on:input />
  {:else}
    <input {type} id={label} {value} on:input />
  {/if}
</div>

<style>
  label {
    font-size: 20px;
    text-transform: uppercase;
    background: #00adb5;
    display: block;
    width: 50%;
    padding: 10px;
    color: #eeeeee;
  }

  input,
  textarea {
    padding: 8px;
    border: solid 1px #333;
    border-top: none;
    display: block;
    width: 50%;
    margin: 0 0 20px;
    font-size: 14px;
    color: #eeeeee;
    background: #393e46;
    font-family: "Courier New", Courier, monospace;
    text-transform: uppercase;
  }
  input {
    height: 3rem;
  }

  textarea {
    resize: none;
  }
</style>
