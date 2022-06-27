import Layout from "./components/Layout";
import UI from "./components/UI";
import Map from "./components/Map";
import PositionsCon from "./PositionsCon";
import { useState } from "react";

function App() {
  const [markers, setMarkers] = useState(null);
  const value = {
    positions: markers,
    setPositions: setMarkers,
  };
  return (
    <PositionsCon.Provider value={value}>
      <Layout>
        <UI></UI>
        <Map></Map>
      </Layout>
    </PositionsCon.Provider>
  );
}

export default App;
