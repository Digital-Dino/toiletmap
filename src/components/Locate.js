import { useMap } from "react-leaflet";

export default function Locate(props) {
  const map = useMap();
  map.locate();
  map.on("locationfound", (e) => {
    map.flyTo(e.latlng);
  });
}
