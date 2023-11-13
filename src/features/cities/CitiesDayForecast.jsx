/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import WeatherHour from "../../ui/WeatherHour";
import Heading from "../../ui/Heading";

const Container = styled.div`
  padding: 1.2rem 2.4rem;
  display: flex;
  flex-direction: column;
`;

const WeatherListHour = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

function CitiesDayForecast({ weather }) {
  const {
    hourly: { temperature_2m: hourlyWeather, weathercode },
  } = weather;

  return (
    <Container>
      <Heading as="h4">Today's Forecast</Heading>

      <WeatherListHour>
        {Array.from(Array(3).keys()).map((el) => (
          <WeatherHour
            key={el}
            hour={el * 3 + 6}
            temp={hourlyWeather.at(el * 3 + 6)}
            weathercode={weathercode.at(el * 3 + 6)}
          />
        ))}
      </WeatherListHour>
    </Container>
  );
}

export default CitiesDayForecast;
