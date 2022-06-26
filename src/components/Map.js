import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet";
import Locate from "./Locate";

export default function Map(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        flexGrow: 1,
        flexBasis: "100%",
        minWidth: "75%",
        height: "100%",
      }}
    >
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[51.505, -0.09]}
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Locate></Locate>
      </MapContainer>
    </div>
  );
}
