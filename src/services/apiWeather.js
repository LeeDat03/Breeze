export async function getWeathers(lat, lng, timezone = "Asia/Bangkok") {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weathercode&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,windspeed_10m_max&timezone=${timezone}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCityPosition(cityName) {
  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCityName(lat, lng) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
