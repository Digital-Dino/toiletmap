import { useContext, useState } from "react";
import { useMapEvents } from "react-leaflet";
import EventsCtx from "../EventsCtx";

class Event {
  constructor(latlng, clean = null, rec = null, rate = null) {
    this.latlng = latlng;
    this.clean = clean;
    this.rec = rec;
    this.rate = rate;
  }
}

export default function CreateEvent(props) {
  const ctx = useContext(EventsCtx);
  const map = useMapEvents({
    click(e) {
      ctx.setEvents((prevState) => {
        let newPoint = new Event(e.latlng);
        if (prevState) {
          return [...prevState, newPoint];
        } else {
          return [newPoint];
        }
      });
    },
  });
}
