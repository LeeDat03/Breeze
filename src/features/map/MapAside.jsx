import styled from "styled-components";
import { useWeather } from "../../context/WeatherContextAPI";

import WeatherCity from "../../ui/WeatherCity";
import Spinner from "../../ui/Spinner";
import Message from "../../ui/Message";
import TextSpan from "../../ui/TextSpan";

const Aside = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
  overflow-x: auto;
  flex-direction: column;

  & ul {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
`;

function MapAside() {
  const { weathers, cityWeather, status, error } = useWeather();

  if (status === "loading")
    return (
      <Aside>
        <Spinner />
      </Aside>
    );

  if (status === "error") {
    return (
      <Aside>
        <Message>{error}</Message>
      </Aside>
    );
  }

  return (
    <Aside>
      {Object.keys(cityWeather).length > 0 && (
        <Top>
          <TextSpan>Result</TextSpan>
          <WeatherCity city={cityWeather} saved={false} type="map" />
        </Top>
      )}

      {weathers.length > 0 && (
        <Bottom>
          <TextSpan>Saved city</TextSpan>
          <ul>
            {weathers.map((w) => (
              <WeatherCity key={w.id} city={w} saved={true} type="map" />
            ))}
          </ul>
        </Bottom>
      )}
    </Aside>
  );
}

export default MapAside;
