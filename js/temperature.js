import { fetchWeatherData } from './api.js';

window.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchWeatherData();
  const container = document.getElementById('temp-data');
  if (data) {
    const temp = data.current_weather.temperature;
    container.innerHTML = `
      <p>Temperature: ${temp} °C</p>
    `;
  } else {
    container.innerHTML = '<p>Error fetching temperature data.</p>';
  }
});
