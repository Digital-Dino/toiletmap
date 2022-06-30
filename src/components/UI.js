import classes from "./UI.module.css";
import { useContext } from "react";
import EventsCtx from "../EventsCtx";

export default function UI(props) {
  const ctx = useContext(EventsCtx);
  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData);
    console.log(data);
    console.log("Shit Submitted");
    // return (
    //   <Marker key={i} position={e}>
    //     <Popup>You clicked here</Popup>
    //   </Marker>
    // );
  }
  let form;
  if (ctx.events) {
    form = ctx.events.map((e, i) => {
      return (
        <form onSubmit={handleSubmit} key={i}>
          <p key={i}>
            {e.latlng.lat} {e.latlng.lng}
          </p>
          <div>
            <label htmlFor="clean">Cleanliness?</label>
            <input
              name="clean"
              type={"number"}
              max={10}
              min={0}
              value={0}
            ></input>
            <label htmlFor="rec">Would Recommend?</label>
            <input name="rec" type={"checkbox"} value={"false"}></input>
            <label htmlFor="rate">What Rating?</label>
            <input
              name="rate"
              type={"number"}
              max={10}
              min={0}
              value={0}
            ></input>
          </div>
          <button type="submit" value="submit">
            Submit Shit
          </button>
        </form>
      );
    });
  }

  return <div className={classes["ui-pane"]}>{form}</div>;
}
