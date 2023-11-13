import styled from "styled-components";
import { useWeather } from "../context/WeatherContextAPI";

const TimeStyled = styled.div`
  margin-top: auto;
  padding: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: var(--tx-color--dark);
  font-weight: 600;
  border: 2px solid #fff;
  background-color: #fff;
  border-radius: 0.5rem;

  & span {
    color: var(--tx-color);
  }
`;

function Timer() {
  const { timer } = useWeather();

  const mins = Math.floor(timer / 60).toString();
  const seconds = (timer % 60).toString();

  return (
    <TimeStyled>
      Data will be refresh in{" "}
      <span>{`${mins.padStart(2, "0")}:${seconds.padStart(2, "0")}`}</span>
    </TimeStyled>
  );
}

export default Timer;
