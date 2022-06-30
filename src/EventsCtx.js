import React from "react";
const EventsCtx = React.createContext({
  events: [],
  setEvents: () => {},
});

export default EventsCtx;
