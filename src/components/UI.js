import classes from "./UI.module.css";
import { useContext } from "react";
import EventsCtx from "../EventsCtx";

export default function UI(props) {
  const ctx = useContext(EventsCtx);
  let events;
  if (ctx.events) {
    events = ctx.events.map((e, i) => {
      return e;
    });
  }

  return <div className={classes["ui-pane"]}>{events}</div>;
}
