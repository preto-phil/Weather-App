// Set initial / default search input value
let searchInputValue = 'Thabazimbi';

// Set initial slider index
let sliderIndex = 1;

// Load initial data
window.onload = () => {
  getWeather();
}

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

  let hourlyData = [];
  let currentDateTime = result.current.last_updated;
  // trim everything before and after hour
  let time = currentDateTime.slice(11, 13);
/*   time = Math.floor(time); */
  console.log(time);
  let timeRemaining = 24 - (24- time);
  let t = time;
  let tr = 0;

  for (let i = 0; i < 24; i++) {
    
    if (t < 24) {
      // day 0
      let results = result.forecast.forecastday[0].hour[i];
      hourlyData[i] = {
        hour: `${t}:00`,
        condition: results.condition.text,
        temp_c: results.temp_c,
/*         temp_f: results.temp_f,
        wind_k: results.wind_kph,
        wind_m: results.wind_mph,
        humidity: results.humidity,
        realFeel_c: results.feelslike_c,
        realFeel_f: results.feelslike_f,
        precip_mm: results.precip_mm, */
      }
      t++;
    } else if (tr < timeRemaining) {
      // day 1
      let results = result.forecast.forecastday[1].hour[tr];

      let hour;
      if (tr < 10) {
        hour = `0${tr}`;
      } else {
        hour = tr;
      }

      hourlyData[i] = {
        hour: `${hour}:00`,
        condition: results.condition.text,
        temp_c: results.temp_c,
/*         temp_f: results.temp_f,
        wind_k: results.wind_kph,
        wind_m: results.wind_mph,
        humidity: results.humidity,
        realFeel_c: results.feelslike_c,
        realFeel_f: results.feelslike_f,
        precip_mm: results.precip_mm, */
      }
      tr++;
    }
  }

  createHourlyDivs(hourlyData);

  console.log(hourlyData);
  return hourlyData;
}

function parseDailyData(result) {

  let dailyData = [];

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
  }
  
  createDailyDivs(dailyData);

  console.log(dailyData);
  return dailyData;
}


function createDailyDivs(dailyData) {

  const getDailyDiv = document.getElementById('daily');
  getDailyDiv.innerHTML = '';

  for (let i = 0; i < dailyData.length; i++) {
    
    const createDiv = document.createElement('div');
    createDiv.classList.add('day', `day-${i}`);

    for (const [key, value] of Object.entries(dailyData[i])) {
      const childDiv = document.createElement('div');
      childDiv.classList.add('day-item', key);
      childDiv.innerText = `${key}: ${value}`;
      createDiv.appendChild(childDiv);
    }
    getDailyDiv.appendChild(createDiv);
  }
}

function createHourlyDivs(hourlyData) {

  const getHourlyDiv = document.getElementById('hourly');
  getHourlyDiv.innerHTML = '';

  for (let i = 0; i < hourlyData.length; i++) {
    
    const createDiv = document.createElement('div');
    createDiv.classList.add('hours', `hour-${i}`);

    for (const [key, value] of Object.entries(hourlyData[i])) {
      const childDiv = document.createElement('div');
      childDiv.classList.add('hour-item', key);
      childDiv.innerText = `${value}`;
      createDiv.appendChild(childDiv);
    }
    getHourlyDiv.appendChild(createDiv);
  }
  hourlySlider();
}


function hourlySlider(index = 0) {
  sliderIndex = sliderIndex + index;
  console.log(sliderIndex);
  if (sliderIndex === 0) {
    sliderIndex = 4;
  } 
  if (sliderIndex === 5) {
    sliderIndex = 1;
  }

  let hourlyDivs = document.querySelectorAll(`.hours`);
  hourlyDivs.forEach((div) => {
    div.style.display = 'none';
  });

  // Calculate the start and end indices for the range of divs to display
  const start = (sliderIndex - 1) * 6;
  const end = start + 6;

  // Display the selected range of hourly divs
  for (let i = start; i < end; i++) {
    if (hourlyDivs[i]) {
      hourlyDivs[i].style.display = 'flex';
    }
  }

  const dots = document.getElementsByClassName("dot");
  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  dots[sliderIndex - 1].className += " active";

}
