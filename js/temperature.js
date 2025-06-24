import { fetchWeatherData } from './api.js';

function renderTemperature(city, temp, unit) {
  const container = document.getElementById('temp-data');
  container.innerHTML = `
    <p>City: ${city}</p>
    <p>Temperature: ${temp} °${unit === 'fahrenheit' ? 'F' : 'C'}</p>
    <button id="toggle-unit">Switch to ${unit === 'fahrenheit' ? 'Celsius' : 'Fahrenheit'}</button>
  `;
  document.getElementById('toggle-unit').addEventListener('click', () => {
    const newUnit = unit === 'fahrenheit' ? 'celsius' : 'fahrenheit';
    loadWeather(newUnit);
  });
}

async function loadWeather(unit = 'fahrenheit') {
  const city = localStorage.getItem('selectedCity') || 'New York';
  const data = await fetchWeatherData(city, unit);
  if (data) {
    renderTemperature(city, data.current_weather.temperature, unit);
  } else {
    document.getElementById('temp-data').innerHTML = '<p>Error fetching temperature data.</p>';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadWeather();
});
