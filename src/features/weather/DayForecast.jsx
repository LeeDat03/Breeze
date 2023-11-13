/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import WeatherHour from "../../ui/WeatherHour";
import Heading from "../../ui/Heading";

const Container = styled.div`
  background-color: var(--bg-gray--2);
  padding: 1.2rem 2.4rem;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
`;

const WeatherListHour = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

function DayForecast({ weather }) {
  const {
    hourly: { temperature_2m: hourlyWeather, weathercode },
  } = weather;

  return (
    <Container>
      <Heading as="h4">Today's Forecast</Heading>

      <WeatherListHour>
        {Array.from(Array(6).keys()).map((el) => (
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

export default DayForecast;
