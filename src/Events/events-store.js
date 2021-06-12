import { writable } from "svelte/store";

const events = writable([
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
]);

const customEventsStore = {
  subscribe: events.subscribe,
  addEvent: (eventData) => {
    const newEvent = {
      ...eventData,
      id: Math.random().toString,
      isAttending: false,
    };
    events.update((items) => {
      return [newEvent, ...items];
    });
  },
  toggleAttending: (id) => {
    events.update((items) => {
      const updatedEvent = { ...items.find((m) => m.id === id) };
      updatedEvent.isAttending = !updatedEvent.isAttending;
      const eventIndex = items.findIndex((m) => m.id === id);
      const updatedEvents = [...items];
      updatedEvents[eventIndex] = updatedEvent;
      return updatedEvents;
    });
  },
};

export default customEventsStore;
