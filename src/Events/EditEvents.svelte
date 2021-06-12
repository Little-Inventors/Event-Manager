<script>
  import { createEventDispatcher } from "svelte";
  import events from "./events-store";
  import Button from "../components/Button.svelte";
  import TextInput from "../components/TextInput.svelte";

  let title = "";
  let email = "";
  let desc = "";
  let address = "";
  let contact = "";
  let fees = "";

  const dispatch = createEventDispatcher();

  function submitForm() {
    const newEventData = {
      title: title,
      email: email,
      description: desc,
      address: address,
      contact: contact,
      fees: fees,
    };
    events.addEvent(newEventData);
    dispatch(save);

    // dispatch("save", {
    //   title: title,
    //   email: email,
    //   description: desc,
    //   address: address,
    //   contact: contact,
    //   fees: fees,
    // });
  }
</script>

<form on:submit|preventDefault={submitForm}>
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
    <Button type="submit">Submit</Button>
  </fieldset>
</form>

<style>
  form {
    width: 50%;
    margin: 0 auto;
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
