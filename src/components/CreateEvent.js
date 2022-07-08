import { useEffect } from "react";
import { useMapEvents, Marker, Popup, useMap } from "react-leaflet";
import Form from "./Form";
import Card from "./Card";

export default function CreateEvent(props) {
  const mapView = useMap();
  const map = useMapEvents({
    click(e) {
      props.setEvents((prevState) => {
        let key = Number(Math.random().toFixed(3));
        let newForm = (
          <Form
            setMarkers={props.setMarkers}
            setEvents={props.setEvents}
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

  useEffect(() => {
    let events = [];
    let markers = [];
    Object.keys(localStorage).forEach((key) => {
      let event = JSON.parse(localStorage.getItem(key));
      let marker = (
        <Marker key={event.id} position={event.position}>
          <Popup>
            I would {event.rec === "yes" ? "recommend" : "not recommend"} using
            the bathroom here. I give it a score of {event.rate + "/10"} and its
            clealiness level was {event.clean + "/10"}.
          </Popup>
        </Marker>
      );
      markers.push(marker);
      events.push(
        <Card
          key={event.id}
          data={event}
          map={mapView}
          position={event.position}
        />
      );
    });

    props.setEvents(events);
    props.setMarkers(markers);
  }, []);
}
