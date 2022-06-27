import classes from "./UI.module.css";
import PositionsCon from "../PositionsCon";
import { useContext } from "react";
import Event from "./Event";

export default function UI(props) {
  const ctx = useContext(PositionsCon);
  let items;
  if (ctx.positions !== null) {
    items = ctx.positions.map((e, i) => {
      return <Event key={i} pos={[e.lat, e.lng]} />;
    });
  }
  return <div className={classes["ui-pane"]}>{items}</div>;
}
