const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function formatHour(hour) {
  if (hour < 12) return `${hour}:00 AM`;

  return `${hour === 12 ? hour : hour % 12}:00 PM`;
}

export function formatTemp(temp) {
  return Math.round(temp);
}

export function calcTempAverage(temp) {
  const total = temp.reduce((acc, cur) => acc + cur, 0) / temp.length;
  return Math.round(total);
}

export function formatWeekday(day) {
  const date = new Date(day);
  const today = new Date();

  if (date.getDay() == today.getDay()) return "Today";

  return daysOfWeek[date.getDay()].slice(0, 3);
}

export function calcHourMin(day) {
  const date = new Date(day);

  const hour = date.getHours().toString();
  const min = date.getMinutes().toString();

  return `${hour.padStart(2, "0")}:${min.padStart(2, "0")}`;
}

export function getChanceOfRain(weathercode) {
  if (
    weathercode === 51 ||
    weathercode === 56 ||
    weathercode === 61 ||
    weathercode === 66 ||
    weathercode === 71 ||
    weathercode === 80
  ) {
    return "40%";
  } else if (
    weathercode === 53 ||
    weathercode === 57 ||
    weathercode === 63 ||
    weathercode === 67 ||
    weathercode === 73 ||
    weathercode === 81
  ) {
    return "60%";
  } else if (
    weathercode === 55 ||
    weathercode === 65 ||
    weathercode === 75 ||
    weathercode === 77 ||
    weathercode === 82
  ) {
    return "80%";
  } else {
    return "20%";
  }
}
