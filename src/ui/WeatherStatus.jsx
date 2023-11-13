function WeatherStatus({ weathercode }) {
  function getWeatherStatus() {
    if (weathercode === 0) {
      return "Sunny";
    } else if (weathercode === 1 || weathercode === 2) {
      return "Cloudy";
    } else if (weathercode === 3) {
      return "Cloudy";
    } else if (weathercode === 45 || weathercode === 48) {
      return "Windy";
    } else if (
      weathercode === 51 ||
      weathercode === 56 ||
      weathercode === 61 ||
      weathercode === 66 ||
      weathercode === 80
    ) {
      return "Rainy";
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
      return "Rainny";
    } else if (
      weathercode === 71 ||
      weathercode === 73 ||
      weathercode === 75 ||
      weathercode === 77 ||
      weathercode === 85 ||
      weathercode === 86
    ) {
      return "Snowy";
    } else if (weathercode === 95) {
      return "Thunderstorm";
    } else {
      return "Clear";
    }
  }

  return <p>{getWeatherStatus()}</p>;
}

export default WeatherStatus;
