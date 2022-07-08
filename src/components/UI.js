import classes from "./UI.module.css";

export default function UI(props) {
  let events;
  if (props.events) {
    events = props.events.map((e, i) => {
      return e;
    });
  }

  return <div className={classes["ui-pane"]}>{events}</div>;
}
