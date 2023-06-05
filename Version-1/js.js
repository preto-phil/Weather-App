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
    // Call parseCurrentData function to extract and process some weatherData
    parseCurrentData(result);
    parseHourlyData(result);
    parseDailyData(result);
    console.log(result);
    return result;
  } catch (err) {
    throw new Error(`Error fetching weather data: ${err}`)
  }
}

/* Should perhaps make use of destructuring for weatherData and locationData */

// Function to parse weather data
function parseCurrentData(result) {
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

  temperatureDiv.textContent = `Temperature: ${weatherData.temp_c}`;
  realFeelDiv.textContent = `Real feel: ${weatherData.realFeel_c}`;
  humidityDiv.textContent = `Humidity: ${weatherData.humidity}`;
  windDiv.textContent = `Wind speed: ${weatherData.wind_k}`;
  conditionDiv.textContent = `Condition: ${weatherData.condition}`;
  precipitationDiv.textContent = `Precipitation: ${weatherData.precip_mm}mm`;
}



function parseHourlyData(result) {

  let hoursData = [];

  for (let i = 0; i < 24; i++) {
    let results = result.forecast.forecastday[0].hour[i];
    hoursData[i] = {
      condition: results.condition.text,
      temp_c: results.temp_c,
      temp_f: results.temp_f,
      wind_k: results.wind_kph,
      wind_m: results.wind_mph,
      humidity: results.humidity,
      realFeel_c: results.feelslike_c,
      realFeel_f: results.feelslike_f,
      precip_mm: results.precip_mm,
    }
  }

  console.log(hoursData);
}

function parseDailyData(result) {

  let dailyData = [];
  const getDailyDiv = document.getElementById('daily');

  for (let i = 0; i < 8; i++) {
    let results = result.forecast.forecastday[i];
    dailyData[i] = {
      date: results.date,
      condition: results.day.condition.text,
      mintemp_c: results.day.mintemp_c,
      maxtemp_c: results.day.maxtemp_c,
      mintemp_f: results.day.mintemp_f,
      maxtemp_f: results.day.maxtemp_f,
      daily_chance_of_rain: results.day.daily_chance_of_rain,
      maxwind_kph: results.day.maxwind_kph,
      maxwind_mph: results.day.maxwind_mph,
    }
    let createDiv = document.createElement('div');
    createDiv.classList.add('day', `day-${i}`);
    for (let j in dailyData) {
      let childDiv = document.createElement('div');
      childDiv.classList.add('day-item');
      childDiv.innerText = `${dailyData[j]}`;
      createDiv.appendChild(childDiv);
    }
    getDailyDiv.appendChild(createDiv)
  }
  console.log(dailyData);
  /* createDailyDivs(dailyData); */
  return dailyData;
}


/* 
// Solution 1 - Using nested loops

const getDailyDiv = document.getElementById('daily');

function createDailyDivs(dailyData) {

  // Used nested for loops
  // Outer loop
  for (let i = 0; i < 8; i++) {
    let createDiv = document.createElement('div');
    createDiv.classList.add(`day day-${i}`);
    for (let j in dailyData) {
      let childDiv = document.createElement('div');
      childDiv.classList.add(`day-item ${dailyData[j]}`)
      childDiv.innerText = `${dailyData[j]}`;
      createDiv.appendChild(childDiv);
    }
    getDailyDiv.appendChild(createDiv)
  }
}
 */





/* function assignHourlyValues(hourlyData) {

  const hourlyDiv = document.getElementById('hourly');

  for (let i in hourlyData) {
    const item = document.createElement('div');
    item.classList.add("item", "item-" + i);
    item.innerHTML = 
    `
    <div class="hourly hour-${1}temperature"></div>
    <div class="realfeel"></div>
    <div class="humidity"></div>
    <div class="wind"></div>
    <div class="condition"></div>
    <div class="precipitation"></div>` 
  }



  const temperatureDiv = document.getElementById('temperature');
  const realFeelDiv = document.getElementById('realfeel');
  const humidityDiv = document.getElementById('humidity');
  const windDiv = document.getElementById('wind');
  const conditionDiv = document.getElementById('condition');
  const precipitationDiv = document.getElementById('precipitation');
  let weatherData = wData;

  temperatureDiv.textContent = `Temperature: ${weatherData.temp_c}`;
  realFeelDiv.textContent = `Real feel: ${weatherData.realFeel_c}`;
  humidityDiv.textContent = `Humidity: ${weatherData.humidity}`;
  windDiv.textContent = `Wind speed: ${weatherData.wind_k}`;
  conditionDiv.textContent = `Condition: ${weatherData.condition}`;
  precipitationDiv.textContent = `Precipitation: ${weatherData.precip_mm}mm`;
} */