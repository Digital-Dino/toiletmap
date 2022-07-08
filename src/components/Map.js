import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer, Marker, Popup } from "react-leaflet";
import CreateEvent from "./CreateEvent";
import { useState } from "react";
import UI from "./UI";
import Layout from "./Layout";

export default function Map(props) {
  const [markers, setMarkers] = useState(null);
  const [events, setEvents] = useState(null);
  return (
    <Layout>
      <UI events={events}></UI>
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
          style={{ height: "100%", width: "100%", cursor: "crosshair" }}
          center={[51.505, -0.09]}
          zoom={15}
        >
          <TileLayer
            attribution="Tiles &copy; Esri | Leaflet"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          />
          <CreateEvent
            setEvents={setEvents}
            setMarkers={setMarkers}
          ></CreateEvent>
          {markers}
        </MapContainer>
      </div>
    </Layout>
  );
}
