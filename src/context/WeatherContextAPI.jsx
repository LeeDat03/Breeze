/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import {
  getCityName,
  getCityPosition,
  getWeathers,
} from "../services/apiWeather";
import { useLocalStorage } from "../services/useLocalStorage";
import { TIME_REFRESH } from "../utils/constants";

const WeatherContextAPI = createContext();

const initialState = {
  status: "idle",
  error: "",
  weathers: [],
  cityWeather: {},
  curWeatherView: null,
  timer: TIME_REFRESH,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "savedWeathers/loaded":
      return {
        ...state,
        status: "idle",
        weathers: action.payload,
      };
    case "weather/view":
      return {
        ...state,
        status: "idle",
        curWeatherView: action.payload,
      };
    case "city/loaded":
      return { ...state, status: "idle", cityWeather: action.payload };

    case "tick":
      return {
        ...state,
        timer: state.timer === 0 ? TIME_REFRESH : state.timer - 1,
      };

    case "rejected":
      return { ...state, status: "error", error: action.payload };
  }
}

function WeatherProvider({ children }) {
  const [
    { status, error, weathers, cityWeather, curWeatherView, timer },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [savedWeathers, setSavedWeathers] = useLocalStorage([], "weathers");

  //////////////////////////////////////////////////////////////
  //// GET SAVED WEATHER IN LOCAL STORAGE
  useEffect(
    function () {
      async function fetchWeather() {
        dispatch({ type: "loading" });
        try {
          dispatch({ type: "savedWeathers/loaded", payload: savedWeathers });
        } catch (err) {
          dispatch({
            type: "rejected",
            payload: "Something wrong when fetching weathers",
          });
        }
      }

      fetchWeather();
    },
    [savedWeathers]
  );

  //////////////////////////////////////////////////////////////
  //// TIMER
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      if (timer === 0) {
        reloadWeathers();
      }

      return () => clearInterval(id);
    },
    [timer]
  );

  //////////////////////////////////////////////////////////////
  // GET WEATHER WHEN SEARCH
  async function getCityWeather(cityName) {
    dispatch({ type: "loading" });
    try {
      const position = await getCityPosition(cityName);
      if (!position.results) {
        throw new Error(`Can't get position of city`);
      }

      const {
        latitude: lat,
        longitude: lng,
        timezone,
        name,
      } = position.results.at(0);

      const data = await getWeathers(lat, lng, timezone);
      if (data.error)
        throw new Error(
          `Something wrong when get weather of the city your provide`
        );
      dispatch({
        type: "city/loaded",
        payload: {
          ...data,
          cityName: name,
          id: new Date().getTime().toString(),
        },
      });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: err.message,
      });
    }
  }

  //////////////////////////////////////////////////////////////
  //// GET WEATHER WHEN CLICK ON MAP
  async function getMapWeather(lat, lng) {
    dispatch({ type: "loading" });
    if (!lat && !lng) return;

    try {
      const cityInfo = await getCityName(lat, lng);

      if (!cityInfo.city || !cityInfo.countryCode) {
        dispatch({
          type: "rejected",
          payload: "Error when get city",
        });
        return;
      }
      const data = await getWeathers(lat, lng);

      if (data.error)
        throw new Error(
          `Something wrong when get weather of the city your provide`
        );
      dispatch({
        type: "city/loaded",
        payload: {
          ...data,
          cityName: cityInfo.city,
          id: new Date().getTime().toString(),
        },
      });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "Something wrong when fetching weathers",
      });
    }
  }

  //////////////////////////////////////////////////////////////
  //// RE-FETCH ALL WEATHERS
  async function reloadWeathers() {
    dispatch({ type: "loading" });

    if (!savedWeathers.length) return;

    try {
      const data = await Promise.all(
        savedWeathers.map(async (w) => {
          const weatherData = {
            ...(await getWeathers(w.latitude, w.longitude, w.timezone)),
            cityName: w.cityName,
            id: w.id,
          };
          return weatherData;
        })
      );
      dispatch({ type: "savedWeathers/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "Something wrong when fetching weathers",
      });
    }
  }

  function addToSavedWeather(city) {
    dispatch({ type: "city/loaded", payload: {} });
    setSavedWeathers((weathers) => [...weathers, city]);
  }

  function deleteSavedWeather(id) {
    setSavedWeathers((weathers) => weathers.filter((w) => w.id !== id));
  }

  function setCurWeatherView(weather) {
    dispatch({ type: "loading" });

    dispatch({ type: "weather/view", payload: weather });
  }

  return (
    <WeatherContextAPI.Provider
      value={{
        status,
        error,
        weathers,
        cityWeather,
        curWeatherView,
        timer,
        getCityWeather,
        getMapWeather,
        reloadWeathers,
        addToSavedWeather,
        deleteSavedWeather,
        setCurWeatherView,
      }}
    >
      {children}
    </WeatherContextAPI.Provider>
  );
}

function useWeather() {
  const context = useContext(WeatherContextAPI);

  if (context === undefined) {
    throw new Error(`WeatherContextAPI was used outside the WeatherProvider`);
  }

  return context;
}

export { WeatherProvider, useWeather };
