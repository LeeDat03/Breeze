import styled from "styled-components";

import { useWeather } from "../../context/WeatherContextAPI";

import WeatherCity from "../../ui/WeatherCity";
import Spinner from "../../ui/Spinner";
import Message from "../../ui/Message";
import TextSpan from "../../ui/TextSpan";

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

function CitiesMain() {
  const { weathers, cityWeather, status, error } = useWeather();

  if (status === "loading") return <Spinner />;

  if (status === "error") return <Message>{error}</Message>;

  return (
    <>
      {Object.keys(cityWeather).length > 0 && (
        <Top>
          <TextSpan>Result</TextSpan>
          <WeatherCity $size="medium" city={cityWeather} saved={false} />
        </Top>
      )}

      {weathers.length !== 0 && (
        <Bottom>
          <TextSpan>Saved cities</TextSpan>
          <ul>
            {weathers.map((w) => (
              <WeatherCity $size="medium" key={w.id} city={w} saved={true} />
            ))}
          </ul>
        </Bottom>
      )}
    </>
  );
}

export default CitiesMain;
