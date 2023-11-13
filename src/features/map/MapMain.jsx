import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import {
  Marker,
  MapContainer,
  TileLayer,
  Popup,
  useMapEvent,
} from "react-leaflet";
import Control from "react-leaflet-custom-control";
import styled from "styled-components";
import { IoNavigateCircle } from "react-icons/io5";

import { useWeather } from "../../context/WeatherContextAPI";
import { getUrlPosition } from "../../services/useUrlPosition";
import { useGeolocation } from "../../services/useGeoLocation";
import WeatherIcon from "../../ui/WeatherIcon";

const Main = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;

const PopupContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & p,
  & span {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: var(--tx-color);
  }

  & > img {
    width: 5rem;
    height: 5rem;
  }
`;

const IconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 3rem;
    height: 3rem;
  }
`;

function MapMain() {
  const { weathers } = useWeather();
  const { position: geolocationPosition, getPosition } = useGeolocation();
  const [mapPosition, setMapPosition] = useState([21.0275465, 105.8227867]);

  const [mapLat, mapLng] = getUrlPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition) {
        const { lat, lng } = geolocationPosition;
        setMapPosition([lat, lng]);
      }
    },
    [geolocationPosition]
  );

  return (
    <Main>
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", zIndex: "1" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=NiUETTtWtvEPo7AWPWvR"
        />

        <Control position="bottomleft">
          <IconContainer
            onClick={() => {
              getPosition();
            }}
          >
            <IoNavigateCircle />
          </IconContainer>
        </Control>

        {weathers.map((weather) => (
          <Marker
            position={[weather.latitude, weather.longitude]}
            key={weather.id}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <PopupContainer>
                <p>{weather.cityName}</p>
                <WeatherIcon weathercode={weather.current.weathercode} />
                <span>{`${Math.round(weather.current.temperature_2m)}°`}</span>
              </PopupContainer>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </Main>
  );
}

function ChangeCenter({ position }) {
  const map = useMapEvent({});

  useEffect(
    function () {
      if (position) {
        const zoom = map.getZoom() < 8 ? 8 : map.getZoom();
        map.flyTo(position, zoom);
      }
    },

    [map, position]
  );
}

function DetectClick() {
  const { getMapWeather } = useWeather();

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useMapEvent({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setSearchParams({ lat, lng });
      getMapWeather(lat, lng);
    },
  });
}

export default MapMain;
