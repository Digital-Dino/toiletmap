import classes from "./CreateEvent.module.css";
import { useContext, useId } from "react";
import EventsCtx from "../EventsCtx";
import Card from "./Card";
import { Marker, Popup } from "react-leaflet";

export default function Form(props) {
  const ctx = useContext(EventsCtx);
  const formId = useId();
  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    let eventsFiltered = ctx.events.filter((f) => e.target.id !== f.key);
    let key = Number(Math.random().toFixed(3));
    ctx.setEvents((prevState) => {
      if (prevState) {
        return [
          <Card
            key={key}
            data={data}
            map={props.map}
            position={[props.location.lat, props.location.lng]}
          />,
          ...eventsFiltered,
        ];
      } else {
        return (
          <Card
            key={key}
            data={data}
            map={props.map}
            position={[props.location.lat, props.location.lng]}
          />
        );
      }
    });

    let newMarker = (
      <Marker key={formId} position={[props.location.lat, props.location.lng]}>
        <Popup>
          I would {data.rec === "yes" ? "recommend" : "not recommend"} using the
          bathroom here. I give it a score of {data.rate + "/10"} and its
          clealiness level was {data.clean + "/10"}.
        </Popup>
      </Marker>
    );

    props.setMarkers((prevState) => {
      if (prevState) {
        return [...prevState, newMarker];
      } else {
        return [newMarker];
      }
    });
  }

  return (
    <form
      id={props.id}
      onSubmit={handleSubmit}
      className={classes["form-container"]}
    >
      <div className={classes.elements}>
        <div>Please submit your review of this location:</div>
        <div>
          <div className={classes.space}>
            <label htmlFor="clean">Cleanliness?</label>
            <input
              name="clean"
              type={"number"}
              max={10}
              min={0}
              defaultValue={0}
            ></input>
          </div>
          <div className={classes.space}>
            <label htmlFor="rec">Would Recommend?</label>
            <input name="rec" type={"hidden"} defaultValue="no"></input>
            <input name="rec" type={"checkbox"} defaultValue="yes"></input>
          </div>
          <div className={classes.space}>
            <label htmlFor="rate">What Rating?</label>
            <input
              name="rate"
              type={"number"}
              max={10}
              min={0}
              defaultValue={0}
            ></input>
          </div>
        </div>
        <button type="submit" value="submit">
          Submit Shit
        </button>
      </div>
    </form>
  );
}
