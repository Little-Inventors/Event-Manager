<script>
  import Button from "./components/Button.svelte";
  import Header from "./components/Header.svelte";
  import TextInput from "./components/TextInput.svelte";
  import EventsGrid from "./Events/EventsGrid.svelte";

  let ids = ["title", "description", "contact", "fees", "address"];

  let events = [
    {
      id: "1",
      title: "Programming Bootcamp",
      description: "A bootcamp to learn a new language",
      email: "irenekurien01@gmail.com",
      address: "27th NerdStreet",
      contact: "0000000000",
      fees: "$25",
      isAttending: false,
    },
    {
      id: "2",
      title: "Webdesign",
      description: "A web design competition",
      address: "27th NerdStreet",
      contact: "0000000000",
      fees: "$25",
      isAttending: false,
    },
  ];

  let title = "";
  let email = "";
  let desc = "";
  let address = "";
  let contact = "";
  let fees = "";

  const submitHandler = () => {
    if (
      title.trim() === "" ||
      email.trim() === "" ||
      desc.trim() === "" ||
      address.trim() === "" ||
      contact.trim() === "" ||
      fees.trim() === ""
    ) {
      alert("Please fill in all the fields");
    } else {
      const newEvent = {
        id: Math.random().toString(),
        title: title,
        email: email,
        description: desc,
        address: address,
        contact: contact,
        fees: fees,
      };

      events = [newEvent, ...events];

      for (const id of ids) {
        const el = document.getElementById(id);
        el.value = "";
      }
    }
  };

  function toggleAttending(e) {
    const id = e.detail;
    const updatedEvent = { ...events.find((m) => m.id === id) };
    updatedEvent.isAttending = !updatedEvent.isAttending;
    const eventIndex = events.findIndex((m) => m.id === id);
    const updatedEvents = [...events];
    updatedEvents[eventIndex] = updatedEvent;
    events = updatedEvents;
  }
</script>

<Header />

<form on:submit|preventDefault={submitHandler}>
  <fieldset>
    <legend>Event Registeration</legend>
    <TextInput
      label="title"
      type="text"
      on:input={(event) => (title = event.target.value)}
    />
    <TextInput
      label="email"
      type="email"
      on:input={(event) => (email = event.target.value)}
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
      type="number"
      on:input={(event) => (contact = event.target.value)}
    />
    <TextInput
      label="fees"
      type="text"
      on:input={(event) => (fees = event.target.value)}
    />
    <Button type="submit" caption="Submit" />
  </fieldset>
</form>

<EventsGrid {events} on:toggleAttending={toggleAttending}/>

<!-- on:toggleAttending={toggleAttending} -->
<style>
  form {
    width: 50%;
    margin: 6rem auto;
  }

  fieldset {
    padding: 40px;
    border: solid 1px #00adb5;
    width: 100%;
    margin: 0 auto;
  }

  fieldset legend {
    background: #00adb5;
    padding: 10px;
    border: solid 1px #00adb5;
  }
</style>
