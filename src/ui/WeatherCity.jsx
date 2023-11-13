import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "./Button";
import { useWeather } from "../context/WeatherContextAPI";
import WeatherIcon from "./WeatherIcon";

const City = styled.li`
  background-color: var(--bg-gray--2);
  padding: 2.4rem 3.6rem;
  border-radius: 2rem;
  display: flex;
  gap: 3.6rem;
  align-items: center;
  border: 2px solid var(--bg-gray--2);
  font-size: 1.6rem;
  cursor: pointer;
  scroll-behavior: smooth;
  transition: all 0.3s;

  ${(props) =>
    props.type === "map" &&
    css`
      padding: 1.6rem 2rem;
      gap: 2rem;
    `}

  ${(props) =>
    props.selected === true &&
    css`
      border: 2px solid var(--color-brand);
      background-color: var(--bg-color);
    `}

  &:hover {
    background-color: var(--bg-color);
    border: 2px solid var(--color-brand);
  }

  & img {
    width: 8rem;
    height: 8rem;

    ${(props) =>
      props.type === "map" &&
      css`
        width: 4rem;
        height: 4rem;
      `}
  }

  & h3 {
    font-size: 2.6rem;

    ${(props) =>
      props.type === "map" &&
      css`
        font-size: 2rem;
      `}
  }

  & p {
    font-size: 1.6rem;
    color: var(--tx-color--dark);
  }

  & span {
    margin-left: auto;
    color: var(--tx-color--dark);
    font-size: 3.6rem;
    font-weight: 600;

    ${(props) =>
      props.type === "map" &&
      css`
        font-size: 3rem;
      `}
  }
`;

const Side = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.6rem;

  ${(props) =>
    props.type === "map" &&
    css`
      gap: 2rem;
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function WeatherCity({ city, saved, type = "cities" }) {
  const {
    cityName,
    current: { temperature_2m: currentWeather, weathercode },
    id,
    latitude: lat,
    longitude: lng,
  } = city;

  const { addToSavedWeather, deleteSavedWeather, setCurWeatherView } =
    useWeather();

  const navigate = useNavigate();
  const isSelected = id === useParams()?.id;
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSelectCity(id, lat, lng, e) {
    if (e.target.tagName !== "BUTTON") {
      if (type === "cities") navigate(`${id}`);

      setSearchParams({ lat, lng });
    }
  }

  function handleAddCity() {
    if (type === "cities") navigate("/cities");
    else navigate("/map");
    addToSavedWeather(city);
  }

  function handleDeleteCity() {
    if (type === "cities") navigate("/cities");
    else navigate("/map");
    deleteSavedWeather(id);
  }

  function handleView() {
    setCurWeatherView(city);
    navigate("/weather");
  }

  return (
    <City
      type={type}
      selected={isSelected}
      onClick={(e) => handleSelectCity(id, lat, lng, e)}
    >
      <Side type={type}>
        <WeatherIcon weathercode={weathercode} />
        <div>
          <h3>{cityName}</h3>
        </div>
      </Side>
      <span>{Math.round(currentWeather)}°</span>

      <ButtonGroup>
        <Button $size="medium" onClick={() => handleView()}>
          View details
        </Button>

        {saved && (
          <Button
            $size="medium"
            $variation="delete"
            onClick={() => {
              handleDeleteCity(id);
            }}
          >
            Delete
          </Button>
        )}

        {!saved && (
          <Button
            $size="medium"
            onClick={() => {
              handleAddCity(city);
            }}
          >
            Add
          </Button>
        )}
      </ButtonGroup>
    </City>
  );
}

export default WeatherCity;
