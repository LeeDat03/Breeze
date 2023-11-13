import styled from "styled-components";

import WeatherDisplayed from "../../ui/WeatherDisplayed";

import CitiesDayForecast from "./CitiesDayForecast";
import Cities3DaysForecast from "./Cities3DaysForecast";
import { useWeather } from "../../context/WeatherContextAPI";
import { useParams } from "react-router-dom";
import Message from "../../ui/Message";

const Aside = styled.div`
  position: relative;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  & > div {
    padding: 1.2rem 0;
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid var(--tx-color--light);
  }
`;

function CitiesAside() {
  const { cityWeather, weathers } = useWeather();

  const cityId = useParams().id;

  const curWeather = [cityWeather, ...weathers].find((w) => w.id === cityId);

  return (
    <Aside>
      {curWeather && cityId && (
        <>
          <WeatherDisplayed type="cities" weather={curWeather} />
          <CitiesDayForecast weather={curWeather} />
          <Cities3DaysForecast weather={curWeather} />
        </>
      )}

      {cityId && !curWeather && <Message>City doesn&apos;t exist</Message>}
    </Aside>
  );
}

export default CitiesAside;
