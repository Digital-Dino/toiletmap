import classes from "./CreateEvent.module.css";

export default function Card(props) {
  function handleClick(e) {
    props.map.flyTo(props.position);
  }
  return (
    <div className={classes.card} onClick={handleClick}>
      <div>{props.data.rec === "no" ? "Not Recommended" : "Recommended"}</div>
      <div>Clealiness Score: {props.data.clean}</div>
      <div>Overall Rating: {props.data.rate}</div>
    </div>
  );
}
