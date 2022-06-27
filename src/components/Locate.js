import { useEffect, useRef, useState } from "react";
import { useMap } from "react-leaflet";
import { Marker } from "react-leaflet";
import L from "leaflet";

export default function Locate(props) {
  const map = useMap();
  const [locations, setLocations] = useState([]);
  map.locate().on("locationfound", (e) => {
    map.flyTo(e.latlng);
    // L.marker(e.latlng)
    //   .addTo(map)
    //   .bindPopup("<strong>You are here! 💩</strong>")
    //   .openPopup();
  });

  map.on("click", (e) => {
    setLocations((prevState) => {
      return [e.latlng];
    });
  });

  let points = locations.map((e, i) => {
    return <Marker key={i} position={e}></Marker>;
  });
  return points;
}
