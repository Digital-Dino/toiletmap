import { useContext, useEffect } from "react";
import { useMapEvents, useMap, Marker, Popup } from "react-leaflet";
import EventsCtx from "../EventsCtx";
import classes from "./CreateEvent.module.css";

function Form(props) {
  const ctx = useContext(EventsCtx);
  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    console.log(data);
    let newMarker = (
      <Marker
        key={props.id}
        position={[props.location.lat, props.location.lng]}
      >
        <Popup>
          I would {data.rec === "yes" ? "recommend" : "not recommend"} using the
          bathroom here. I give it a score of {data.rate + "/10"} and its
          clealiness level was {data.clean + "/10"}.
        </Popup>
      </Marker>
    );

    console.log(ctx.events);
    console.log(e.target.id);
    ctx.setEvents((prevState) => {
      let newEvents = prevState.filter((f, i) => {
        return f.key !== e.target.id;
      });
      return [...newEvents, <span>The completed form data</span>];
    });

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

export default function CreateEvent(props) {
  const ctx = useContext(EventsCtx);
  const map = useMapEvents({
    click(e) {
      ctx.setEvents((prevState) => {
        let key = Number(Math.random().toFixed(3));
        let newPoint = (
          <Form
            setMarkers={props.setMarkers}
            key={key}
            id={key}
            location={e.latlng}
          />
        );
        if (prevState) {
          return [...prevState, newPoint];
        } else {
          return [newPoint];
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

export { Form };
