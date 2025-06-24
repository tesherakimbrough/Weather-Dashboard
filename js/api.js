const LAT = 40.7128;  // New York latitude
const LON = -74.0060; // New York longitude

const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`;

export async function fetchWeatherData() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
