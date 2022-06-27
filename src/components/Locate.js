import { useEffect, useContext } from "react";
import L from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import PositionsCon from "../PositionsCon";

export default function Locate(props) {
  const ctx = useContext(PositionsCon);

  const map = useMapEvents({
    click(e) {
      ctx.setPositions((prevState) => {
        if (prevState === null) {
          return [e.latlng];
        } else {
          return [...prevState, e.latlng];
        }
      });
    },
    locationfound(e) {
      map.flyTo(e.latlng);
      let popup = new L.popup()
        .setLatLng(e.latlng)
        .setContent("You are here 💩")
        .openOn(map);
    },
  });

  useEffect(() => {
    map.locate();
  }, []);

  let markers;

  if (ctx.positions !== null) {
    markers = ctx.positions.map((coord, i) => {
      return (
        <Marker key={i} position={coord}>
          <Popup>You clicked here</Popup>
        </Marker>
      );
    });
  }

  return <div>{ctx.positions === null ? null : markers}</div>;
}
