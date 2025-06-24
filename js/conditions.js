import { fetchWeatherData } from './api.js';

const weatherCodeMap = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
};

window.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchWeatherData();
  const container = document.getElementById('condition-data');
  if (data) {
    const code = data.current_weather.weathercode;
    const condition = weatherCodeMap[code] || 'Unknown condition';
    container.innerHTML = `
      <p>Condition: ${condition} (code ${code})</p>
      <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
    `;
  } else {
    container.innerHTML = '<p>Error fetching condition data.</p>';
  }
});
