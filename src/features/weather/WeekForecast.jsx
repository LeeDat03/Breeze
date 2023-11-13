import styled from "styled-components";
import Heading from "../../ui/Heading";
import WeatherDay from "../../ui/WeatherDay";

const Container = styled.div`
  background-color: var(--bg-gray--2);
  border-radius: 2rem;
  padding: 2.4rem 3.6rem;
  box-shadow: var(--shadow-md);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

function WeekForecast({ weather }) {
  const {
    daily: {
      time: week_time,
      temperature_2m_max: temp_weekly_max,
      temperature_2m_min: temp_weekly_min,
      weathercode,
    },
  } = weather;

  return (
    <Container>
      <Heading as="h4">7-Day Forecast</Heading>

      <List>
        {week_time.map((d, index) => (
          <WeatherDay
            key={index}
            day={d}
            temp_max={temp_weekly_max.at(index)}
            temp_min={temp_weekly_min.at(index)}
            weathercode={weathercode.at(index)}
          />
        ))}
      </List>
    </Container>
  );
}

export default WeekForecast;
