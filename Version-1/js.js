/*  Weather App

Weather API: 'https://api.weatherapi.com/v1/current.json?key=e0d3c7ebf93b4fb48c1121421233105&q=thabazimbi'

Forecast weather API: 'http://api.weatherapi.com/v1/forecast.json?key=e0d3c7ebf93b4fb48c1121421233105&q=thabazimbi'

*/

/*  */

// Set initial / default search input value
let searchInputValue = 'Thabazimbi';

// Load initial data
window.onload = getWeather();

// Get search button element
const searchBtn = document.querySelector('#search-btn');

// Add event listener to search button
searchBtn.addEventListener('click', () => {
  // check if search input is empty
  if (document.querySelector('#search').value === '') {
    // Use default search input value
    getWeather();
  } else {
    // Use the entered search input value, whilst trimming whitespace
    const rawSearchValue = document.querySelector('#search').value;
    searchInputValue = encodeURIComponent(rawSearchValue.trim());
    getWeather();
  }
});


// Function that fetches weather data
async function getWeather() {
  try {
    // Fetch weather data from API
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e0d3c7ebf93b4fb48c1121421233105&days=8&q=${searchInputValue}`, { mode: 'cors' });
    const result = await response.json();
    // Call parseData function to extract and process some weatherData
    parseData(result);
    console.log(result);
    return result;
  } catch (err) {
    throw new Error(`Error fetching weather data: ${err}`)
  }
}

/* Should perhaps make use of destructuring for weatherData and locationData */

// Function to parse weather data
function parseData(result) {
  // Extract necessary weather data
  const weatherData = {
  condition: result.current.condition.text,
  temp_c: result.current.temp_c,
  temp_f: result.current.temp_f,
  wind_k: result.current.wind_kph,
  wind_m: result.current.wind_mph,
  humidity: result.current.humidity,
  realFeel_c: result.current.feelslike_c,
  realFeel_f: result.current.feelslike_f,
  precip_mm: result.current.precip_mm,
  }
  // Extract necessary location data
  const locationData = {
    city: result.location.name,
    region: result.location.region,
    country: result.location.country,
    localTime: result.location.localtime,
  }

  // Call function
  assignLocationValues(locationData);
  assignWeatherValues(weatherData);

  // Console log to test whether correct
/*   console.log(weatherData);
  console.log(locationData); */
  return {
    weatherData,
    locationData,
  }
}

// Function that adds text to location from API data
function assignLocationValues(lData) {
  // Get the reference to the HTML div elements
  const locationDiv = document.getElementById('location');
  let locationData = lData;

  locationDiv.textContent = `${locationData.city}, ${locationData.region}, ${locationData.country}`;
}

// Function that adds text to weather from API data
function assignWeatherValues(wData) {
  // Get the reference to the HTML div elements
  const temperatureDiv = document.getElementById('temperature');
  const realFeelDiv = document.getElementById('realfeel');
  const humidityDiv = document.getElementById('humidity');
  const windDiv = document.getElementById('wind');
  const conditionDiv = document.getElementById('condition');
  const precipitationDiv = document.getElementById('precipitation');
  let weatherData = wData;

  temperatureDiv.textContent = `${weatherData.temp_c}`;
  realFeelDiv.textContent = `${weatherData.realFeel_c}`;
  humidityDiv.textContent = `${weatherData.humidity}`;
  windDiv.textContent = `${weatherData.wind_k}`;
  conditionDiv.textContent = `${weatherData.condition}`;
  precipitationDiv.textContent = `${weatherData.precip_mm}`;
}
