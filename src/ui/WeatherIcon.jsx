function WeatherIcon({ weathercode }) {
  function getWeatherIcon() {
    if (weathercode === 0) {
      return "/weather/day_clear.svg";
    } else if (weathercode === 1 || weathercode === 2) {
      return "/weather/day_partial_cloud.svg";
    } else if (weathercode === 3) {
      return "/weather/cloudy.svg";
    } else if (weathercode === 45 || weathercode === 48) {
      return "/weather/wind.svg";
    } else if (
      weathercode === 51 ||
      weathercode === 56 ||
      weathercode === 61 ||
      weathercode === 66 ||
      weathercode === 80
    ) {
      return "/weather/day_rain.svg";
    } else if (
      weathercode === 53 ||
      weathercode === 55 ||
      weathercode === 63 ||
      weathercode === 65 ||
      weathercode === 57 ||
      weathercode === 67 ||
      weathercode === 81 ||
      weathercode === 82
    ) {
      return "/weather/rain.svg";
    } else if (
      weathercode === 71 ||
      weathercode === 73 ||
      weathercode === 75 ||
      weathercode === 77 ||
      weathercode === 85 ||
      weathercode === 86
    ) {
      return "/weather/day_snow.svg";
    } else if (weathercode === 95) {
      return "/weather/thunder.svg";
    } else {
      return "/weather/day_sleet.svg";
    }
  }

  return <img src={getWeatherIcon()} />;
}

export default WeatherIcon;
