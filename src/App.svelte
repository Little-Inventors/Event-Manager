<script>
  import Header from "./components/Header.svelte";
  import TextInput from "./components/TextInput.svelte";
  import EventItems from "./Events/EventItems.svelte";

  let ids = ["title", "description", "contact", "fees", "address"];

  let events = [
    {
      id: "1",
      title: "Programming Bootcamp",
      description: "A bootcamp to learn a new language",
      address: "27th NerdStreet",
      contact: "0000000000",
      fees: "$25",
    },
    {
      id: "2",
      title: "Webdesign",
      description: "A web design competition",
      address: "27th NerdStreet",
      contact: "0000000000",
      fees: "$25",
    },
  ];

  let title = "";
  let desc = "";
  let address = "";
  let contact = "";
  let fees = "";

  const submitHandler = () => {
    const newEvent = {
      id: Math.random().toString(),
      title: title,
      description: desc,
      address: address,
      contact: contact,
      fees: fees,
    };

    events = [newEvent, ...events];
    console.log(events);

    for (const id of ids) {
      const el = document.getElementById(id);
      el.value = "";
    }
  };
</script>

<Header />

<form on:submit|preventDefault={submitHandler}>
  <TextInput
    label="title"
    type="text"
    on:input={(event) => (title = event.target.value)}
  />
  <TextInput
    label="description"
    type="textarea"
    on:input={(event) => (desc = event.target.value)}
  />
  <TextInput
    label="address"
    type="text"
    on:input={(event) => (address = event.target.value)}
  />
  <TextInput
    label="contact"
    type="text"
    on:input={(event) => (contact = event.target.value)}
  />
  <TextInput
    label="fees"      
    type="text"
    on:input={(event) => (fees = event.target.value)}
  />
  <button>Submit</button>
</form>

<div class="events">
  {#each events as event}
    <EventItems
      title={event.title}
      description={event.description}
      address={event.address}
      contact={event.contact}
      fees={event.fees}
    />
  {/each}
</div>

<style>
  form {
    margin-top: 6rem;
  }
</style>
