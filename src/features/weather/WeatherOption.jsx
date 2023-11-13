import styled from "styled-components";

import { FaTemperatureHalf, FaDroplet, FaWind, FaSun } from "react-icons/fa6";
import Heading from "../../ui/Heading";
import { getChanceOfRain } from "../../utils/format";

const Container = styled.div`
  background-color: var(--bg-gray--2);
  padding: 1.2rem 2.4rem;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    padding: 0.5rem 1.5rem;
    border-radius: 10rem;
    background-color: var(--color-brand);
    color: var(--bg-color);
    font-weight: 600;
    transition: all 0.5s;

    &:hover {
      background-color: var(--color-brand--1);
    }
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  align-items: center;
  padding: 1rem 2rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 4rem;

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--tx-color--dark);
  }

  & div {
    display: flex;
    flex-direction: column;
  }

  & p {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--tx-color--gray);
  }

  & span {
    font-size: 2.6rem;
    color: var(--tx-color);
    font-weight: 700;
    margin-top: -4px;
  }
`;

function WeatherOption({ weather }) {
  const {
    daily: {
      apparent_temperature_max: apparentMax,
      apparent_temperature_min: apparentMin,
      uv_index_max: uvIndex,
      windspeed_10m_max: windSpeed,
    },
    current: { weathercode },
  } = weather;

  return (
    <Container>
      <Header>
        <Heading as="h4">Air condition</Heading>
        <button>See more</button>
      </Header>

      <List>
        <Item>
          <FaTemperatureHalf />
          <div>
            <p>Real Feel</p>
            <span>{Math.round((apparentMax[0] + apparentMin[0]) / 2)}°</span>
          </div>
        </Item>
        <Item>
          <FaWind />
          <div>
            <p>Wind</p>
            <span>{windSpeed[0]} km/h</span>
          </div>
        </Item>
        <Item>
          <FaDroplet />
          <div>
            <p>Chance of rain</p>
            <span>{getChanceOfRain(weathercode[0])}</span>
          </div>
        </Item>
        <Item>
          <FaSun />
          <div>
            <p>UV Index</p>
            <span>{Math.round(uvIndex[0])}</span>
          </div>
        </Item>
      </List>
    </Container>
  );
}

export default WeatherOption;
