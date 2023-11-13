import MapAside from "../features/map/MapAside";
import MapMain from "../features/map/MapMain";
import MainContainer from "../ui/MainContainer";

function Map() {
  return (
    <MainContainer>
      <MapMain />
      <MapAside />
    </MainContainer>
  );
}

export default Map;
