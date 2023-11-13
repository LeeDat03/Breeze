import styled from "styled-components";
import WeatherDay from "../../ui/WeatherDay";
import Heading from "../../ui/Heading";

const Container = styled.div`
  border-radius: 2rem;
  padding: 2.4rem 3.6rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

function Cities3DaysForecast({ weather }) {
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
      <Heading as="h4">3-Day Forecast</Heading>

      <List>
        {Array.from(Array(3).keys()).map((index) => (
          <WeatherDay
            key={index}
            day={week_time.at(index)}
            temp_max={temp_weekly_max.at(index)}
            temp_min={temp_weekly_min.at(index)}
            weathercode={weathercode.at(index)}
          />
        ))}
      </List>
    </Container>
  );
}

export default Cities3DaysForecast;
