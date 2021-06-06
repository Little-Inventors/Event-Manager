<script>
  import EventItems from "./EventItems.svelte";

  export let events;
</script>

<div class="events">
  {#each events as event}
    <EventItems
      id={event.id}
      title={event.title}
      description={event.description}
      address={event.address}
      contact={event.contact}
      fees={event.fees}
      email={event.email}
      isAttending={event.isAttending}
      on:toggleAttending
    />
    <!--
      id={event.id}
      isAttending={event.isAttending}
      on:toggleAttending
       -->
  {/each}
</div>

<style>
  .events {
    width: 66%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 25rem 25rem 25rem;
    grid-template-rows: 15rem auto 15rem;
    column-gap: 10px;
    row-gap: 15px;
  }
</style>
