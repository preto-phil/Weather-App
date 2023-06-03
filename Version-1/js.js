/*  Weather App

Weather API: 'https://api.weatherapi.com/v1/current.json?key=e0d3c7ebf93b4fb48c1121421233105&q=thabazimbi'

*/

// Set initial / default search input value
let searchInputValue = 'Thabazimbi';

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
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e0d3c7ebf93b4fb48c1121421233105&q=${searchInputValue}`, { mode: 'cors' });
    let result = await response.json();
    // Call parseData function to extract and process some weatherData
    parseData(result);
    console.log(result);
    return result;
  } catch (err) {
    throw new Error(`Oops! ${err}`)
  }
}


// Function to parse weather data
function parseData(result) {
  // Extract necessary weather data
  const weatherData = {
  condition: result.current.condition.text,
  temperature_c: result.current.temp_c,    
  }
  console.log(weatherData)
  return weatherData;
}


/* Data I want to process

Under current
- condition -> text and maybe icon   *** Self explanatory - background will depend on condition
- cloud *** Cloud coverage i think
- is_day *** Basically whether it's day or night
- temp_c and temp_f *** toggle btw the 2
- wind_kph and wind_mph + maybe wind_dir
- precip_mm *** rain chance ???

Under location
- localtime
- name ?

*/