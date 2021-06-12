<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../components/Button.svelte";
  import Badge from "../components/Badge.svelte";

  export let id;
  export let title;
  export let description;
  export let address;
  export let contact;
  export let fees;
  export let email;
  export let isAttending;

  const dispatch = createEventDispatcher();
</script>

<div class="event-item">
  <header>
    <h1>
      {title}
      {#if isAttending}
        <Badge>ATTENDING</Badge>
      {/if}
    </h1>
    <p>{description}</p>
  </header>
  <div class="content">
    <p>{address}</p>
    <p>{contact}</p>
    <p>{fees}</p>
  </div>
  <div class="buttons">
    <Button href="mail:to:{email}">Contact</Button>
    <Button type="button">Show Details</Button>
    <Button type="button" on:click={() => dispatch("toggleAttending", id)}
      >{isAttending ? "Unattend" : "Attend"}</Button
    >
  </div>
</div>

<style>
  .event-item {
    height: fit-content;
    width: 100%;
    display: inline-block;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    margin: 1rem;
    background: #393e46;
  }

  header,
  .content {
    padding: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  .content {
    text-align: right;
  }

  .buttons {
    text-align: center;
    margin-bottom: 5px;
  }
</style>
