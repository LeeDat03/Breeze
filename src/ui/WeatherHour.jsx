import styled from "styled-components";
import { formatHour, formatTemp } from "../utils/format";
import WeatherIcon from "./WeatherIcon";

const Weather = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:not(:last-child) {
    border-right: 2px solid var(--tx-color--light);
  }

  & span {
    color: var(--tx-color--gray);
    font-size: 1.4rem;
    font-weight: 700;
  }

  & img {
    width: 5rem;
    height: 5rem;
    filter: drop-shadow(#9ca3af 0 3px 6px);
  }

  & p {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--tx-color);
  }
`;

function WeatherHour({ hour, temp, weathercode }) {
  return (
    <Weather>
      <span>{formatHour(hour)}</span>
      <WeatherIcon weathercode={weathercode} />
      <p>{formatTemp(temp)}°C</p>
    </Weather>
  );
}

export default WeatherHour;
