import Layout from "./components/Layout";
import UI from "./components/UI";
import Map from "./components/Map";
import EventsCtx from "./EventsCtx";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState(null);
  return (
    <Layout>
      <EventsCtx.Provider value={{ events: events, setEvents: setEvents }}>
        <UI></UI>
        <Map></Map>
      </EventsCtx.Provider>
    </Layout>
  );
}

export default App;
