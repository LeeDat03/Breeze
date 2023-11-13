/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import DayForecast from "../features/weather/DayForecast";
import WeatherOption from "../features/weather/WeatherOption";
import WeekForecast from "../features/weather/WeekForecast";

import MainContainer from "../ui/MainContainer";
import WeatherDisplayed from "../ui/WeatherDisplayed";
import Spinner from "../ui/Spinner";
import Message from "../ui/Message";

import { useWeather } from "../context/WeatherContextAPI";
import { useEffect, useState } from "react";

const WeatherMain = styled.div`
  /* overflow-x: hidden;
  overflow-y: scroll; */

  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  gap: 2rem;
  position: relative;
`;

function Weather() {
  const { weathers, curWeatherView, status } = useWeather();
  const [weather, setWeather] = useState(null);

  useEffect(
    function () {
      if (weathers.length) {
        setWeather(weathers.at(0));
      }

      if (curWeatherView) {
        setWeather(curWeatherView);
      }
    },
    [curWeatherView, weathers]
  );

  if (status === "loading") return <Spinner />;

  if (!weather)
    return (
      <Message>
        It seems like you haven't selected any city yet. Please select by search
        or click on the Map😬
      </Message>
    );

  return (
    <MainContainer>
      <WeatherMain>
        <WeatherDisplayed type="weather" weather={weather} />
        <DayForecast weather={weather} />
        <WeatherOption weather={weather} />
      </WeatherMain>

      <WeekForecast weather={weather} />
    </MainContainer>
  );
}

export default Weather;
