import { createHourlyDivs, createDailyDivs } from './ui.js';
import { assignLocationValues, assignWeatherValues } from './dom.js';

// Set initial / default search input value
let searchInputValue = 'Thabazimbi';

export function getInput() {
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
}

// Function that fetches weather data
export async function getWeather() {
  try {
    // Fetch weather data from API
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e0d3c7ebf93b4fb48c1121421233105&days=8&q=${searchInputValue}`, { mode: 'cors' });
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
  condition: result.current.condition.icon,
  temp_c: result.current.temp_c,
  temp_f: result.current.temp_f,
  wind_k: result.current.wind_kph,
  wind_m: result.current.wind_mph,
  humidity: result.current.humidity,
  realFeel_c: result.current.feelslike_c,
  realFeel_f: result.current.feelslike_f,
  precip_mm: result.current.precip_mm,
  cloud: result.current.cloud,
  }
  // Extract necessary location data
  const locationData = {
    city: result.location.name,
    region: result.location.region,
    country: result.location.country,
    localTime: result.location.localtime,
    timezone: result.location.tz_id,
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

function parseHourlyData(result) {

  let hourlyData = [];
  let currentDateTime = result.current.last_updated;
  // trim everything before and after hour
  let time = currentDateTime.slice(11, 13);
  let timeRemaining = 24 - (24 - time);
  let t = time;
  if (time < 10) { t = Number(time.slice(-1)) };
  let tr = 0;

  for (let i = 0; i < 24; i++) {
    
    if (t < 24) {
      // day 0
      let results = result.forecast.forecastday[0].hour[t];
      let icon = results.condition.icon;
      icon = `./Icons${icon.substring(20)}`

      hourlyData[i] = {
        hour: `${t}:00`,
        condition: `<img src="${icon}" class="image" alt="${results.condition.text}" />`,
        temp_c: `${Math.round(results.temp_c)} \u00B0C`,
        temp_f: `${Math.round(results.temp_f)} \u2109`,
      }
      t++;
    } else if (tr < timeRemaining) {
      // day 1
      let results = result.forecast.forecastday[1].hour[tr];

      let icon = results.condition.icon;
      icon = `./Icons${icon.substring(20)}`

      let hour;
      if (tr < 10) {
        hour = `0${tr}`;
      } else {
        hour = tr;
      }

      hourlyData[i] = {
        hour: `${hour}:00`,
        condition: `<img src="${icon}" class="image" alt="${results.condition.text}" />`,
        temp_c: `${Math.round(results.temp_c)} \u00B0C`,
        temp_f: `${Math.round(results.temp_f)} \u2109`,
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

  for (let i = 1; i < 3; i++) {
    // Check if forecast data is available for the current index
    if (result.forecast.forecastday[i]) {
      let results = result.forecast.forecastday[i];

      let iconFilename = results.day.condition.icon.substring(20);
      let iconPath = require(`./Icons/${iconFilename}`).default;

      let j = i - 1;

      let formatDate = new Date(results.date);
      let day = formatDate.getDate();
      let month = formatDate.toLocaleString('default', { month: 'long' });

      dailyData[j] = {
        date: `${day} ${month}`,
        condition: `<img src="${iconPath}" class="image" alt="${results.day.condition.text}" />`,
        maxtemp_c: `Max:   ${Math.round(results.day.maxtemp_c)} \u00B0C`,
        mintemp_c: `Min:   ${Math.round(results.day.mintemp_c)} \u00B0C`,
        maxtemp_f: `Max:   ${Math.round(results.day.maxtemp_f)} \u2109`,
        mintemp_f: `Min:   ${Math.round(results.day.mintemp_f)} \u2109`,
        daily_chance_of_rain: `Rain:      ${results.day.daily_chance_of_rain}% `,
        maxwind_kph: `Wind:  ${Math.round(results.day.maxwind_kph)} kph`,
        maxwind_mph: `Wind:  ${Math.round(results.day.maxwind_mph)} mph`,
      };
    }
  }

  createDailyDivs(dailyData);

  console.log(dailyData);
  return dailyData;
}
