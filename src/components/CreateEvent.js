import { useContext, useEffect, useId } from "react";
import { useMapEvents, Marker, Popup, useMap } from "react-leaflet";
import EventsCtx from "../EventsCtx";
import classes from "./CreateEvent.module.css";
import Form from "./Form";

export default function CreateEvent(props) {
  const ctx = useContext(EventsCtx);
  const mapView = useMap();
  const map = useMapEvents({
    click(e) {
      ctx.setEvents((prevState) => {
        let key = Number(Math.random().toFixed(3));
        let newForm = (
          <Form
            setMarkers={props.setMarkers}
            id={key}
            key={key}
            location={e.latlng}
            map={mapView}
          />
        );
        if (prevState) {
          return [newForm, ...prevState];
        } else {
          return [newForm];
        }
      });
    },
  });

  useEffect(() => {
    map.once("locationfound", (e) => {
      map.openPopup("<strong>You are here...</strong>", e.latlng);
    });
    map.locate({ setView: true });
  }, []);
}
