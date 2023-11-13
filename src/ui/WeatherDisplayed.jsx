import styled, { css } from "styled-components";
import WeatherIcon from "./WeatherIcon";
import { getChanceOfRain } from "../utils/format";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 4rem;

  ${(props) =>
    props.type == "cities" &&
    css`
      padding: 0rem;
    `}
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2rem;

  ${(props) =>
    props.type == "cities" &&
    css`
      padding-right: 0rem;
    `}

  & img {
    width: 14rem;
    height: 14rem;
    filter: drop-shadow(#9ca3af 0 5px 10px);

    ${(props) =>
      props.type == "cities" &&
      css`
        width: 10rem;
        height: 10rem;
      `}
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    font-size: 3.6rem;
    font-weight: 700;

    ${(props) =>
      props.type == "cities" &&
      css`
        font-size: 3.2rem;
      `}
  }

  & h3 {
    margin-top: 1rem;
    font-size: 5.2rem;
    letter-spacing: -2px;

    ${(props) =>
      props.type == "cities" &&
      css`
        font-size: 4.8rem;
      `};
  }

  & p {
    margin-top: -0.5rem;
    font-size: 1.6rem;
    color: var(--tx-color--gray);
    font-weight: 500;

    ${(props) =>
      props.type == "cities" &&
      css`
        font-size: 1.2rem;
      `}
  }
`;

function WeatherDisplayed({ weather, type = "weather" }) {
  const {
    cityName,
    current: { temperature_2m: currentWeather, weathercode },
  } = weather;

  return (
    <Container type={type}>
      <TextContainer type={type}>
        <div>
          <h2>{cityName}</h2>
          <p>Chance of rain: {getChanceOfRain(weathercode)}</p>
        </div>
        <h3>{Math.round(currentWeather)}°</h3>
      </TextContainer>

      <ImgContainer type={type}>
        <WeatherIcon weathercode={weathercode} />
      </ImgContainer>
    </Container>
  );
}

export default WeatherDisplayed;
