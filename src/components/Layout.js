import classes from "./Layout.module.css";

export default function Layout(props) {
  return <div className={classes.container}>{props.children}</div>;
}
