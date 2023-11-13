import styled, { css } from "styled-components";
import { formatTemp, formatWeekday } from "../utils/format";
import WeatherIcon from "./WeatherIcon";
import WeatherStatus from "./WeatherStatus";

const Day = styled.li`
  font-size: 1.6rem;
  color: var(--tx-color--dark);
  padding: 1.6rem 0;

  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  & > * {
    flex: 1;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--tx-color--light);
  }

  ${(props) =>
    props.type === "cities" &&
    css`
      font-size: 1.4rem;
      padding: 1.2rem 0.6rem;
    `}
`;

const Temporary = styled.div`
  text-align: right;

  & span:last-child {
    font-weight: 700;
  }
`;

const Weather = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  & img {
    width: 4rem;
    height: 4rem;
    filter: drop-shadow(#9ca3af 0 1px 2px);

    ${(props) =>
      props.type === "cities" &&
      css`
        width: 2rem;
      `}
  }

  & p {
    color: var(--tx-color);
    font-weight: 700;
  }
`;

function WeatherDay({
  day,
  temp_min,
  temp_max,
  weathercode,
  type = "weather",
}) {
  return (
    <Day type={type}>
      <p>{formatWeekday(day)}</p>

      <Weather type={type}>
        <WeatherIcon weathercode={weathercode} />
        <WeatherStatus weathercode={weathercode} />
      </Weather>
      <Temporary type={type}>
        <span>{formatTemp(temp_min)}°</span> /{" "}
        <span>{formatTemp(temp_max)}°</span>
      </Temporary>
    </Day>
  );
}

export default WeatherDay;
