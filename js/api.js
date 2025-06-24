const LAT = 40.7128;  // New York latitude
const LON = -74.0060; // New York longitude

const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`;

export async function fetchCoords(city) {
  const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
  const res = await fetch(geoURL);
  const data = await res.json();
  if (!data.results || data.results.length === 0) throw new Error("City not found");
  return {
    lat: data.results[0].latitude,
    lon: data.results[0].longitude
  };
}

export async function fetchWeatherData(city = "New York", unit = "fahrenheit") {
  try {
    const { lat, lon } = await fetchCoords(city);
    const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=${unit}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
