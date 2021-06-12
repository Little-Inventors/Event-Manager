<script>
  import events from "./Events/events-store";
  import Header from "./components/Header.svelte";
  import Button from "./components/Button.svelte";
  import EventsGrid from "./Events/EventsGrid.svelte";
  import EditEvents from "./Events/EditEvents.svelte";

  let ids = ["title", "description", "contact", "fees", "address"];

  // let events = ;

  let editMode = false;

  const addEvent = (event) => {
    if (
      event.detail.title.trim() === "" ||
      event.detail.email.trim() === "" ||
      event.detail.description.trim() === "" ||
      event.detail.address.trim() === "" ||
      event.detail.contact.trim() === "" ||
      event.detail.fees.trim() === ""
    ) {
      alert("Please fill in all the fields");
    } else {
      const newEventData = {
        title: event.detail.title,
        email: event.detail.email,
        description: event.detail.description,
        address: event.detail.address,
        contact: event.detail.contact,
        fees: event.detail.fees,
      };

      events.addEvent(newEventData);

      for (const id of ids) {
        const el = document.getElementById(id);
        el.value = "";
      }
    }
    editMode = false;
  };

  // const addEvent = (event) => {
  //   console.log(event.detail.description);
  //   if (
  //     event.detail.title.trim() === "" ||
  //     event.detail.email.trim() === "" ||
  //     event.detail.description.trim() === "" ||
  //     event.detail.address.trim() === "" ||
  //     event.detail.contact.trim() === "" ||
  //     event.detail.fees.trim() === ""
  //   ) {
  //     alert("Please fill in all the fields");
  //   } else {
  //     const newEvent = {
  //       id: Math.random().toString(),
  //       title: event.detail.title,
  //       email: event.detail.email,
  //       description: event.detail.description,
  //       address: event.detail.address,
  //       contact: event.detail.contact,
  //       fees: event.detail.fees,
  //     };

  //     events = [newEvent, ...events];

  //     for (const id of ids) {
  //       const el = document.getElementById(id);
  //       el.value = "";
  //     }
  //   }
  //   editMode = false;
  // };

  function toggleAttending(e) {
    const id = e.detail;

    events.toggleAttending(id)
    // const updatedEvent = { ...events.find((m) => m.id === id) };
    // updatedEvent.isAttending = !updatedEvent.isAttending;
    // const eventIndex = events.findIndex((m) => m.id === id);
    // const updatedEvents = [...events];
    // updatedEvents[eventIndex] = updatedEvent;
    // events = updatedEvents;
  }
</script>

<Header />

<main>
  {#if editMode}
    <EditEvents on:save={addEvent} />
  {:else}
    <div class="edit-controls">
      <Button on:click={() => (editMode = true)}>New Event</Button>
    </div>
  {/if}
  <EventsGrid events={$events} on:toggleAttending={toggleAttending} />
</main>

<style>
  main {
    margin: 6rem auto;
  }
  .edit-controls {
    float: right;
  }
</style>
