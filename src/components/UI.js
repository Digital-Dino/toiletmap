import classes from "./UI.module.css";
import { useContext } from "react";
import EventsCtx from "../EventsCtx";

export default function UI(props) {
  const ctx = useContext(EventsCtx);
  let form;
  if (ctx.events) {
    form = ctx.events.map((e, i) => {
      return e;
    });
  }

  return <div className={classes["ui-pane"]}>{form}</div>;
}
