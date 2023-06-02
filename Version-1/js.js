/* 
Weather App

Weather API: 'https://api.weatherapi.com/v1/current.json?key=e0d3c7ebf93b4fb48c1121421233105&q=thabazimbi'

*/

// Variables



let searchInputValue = 'Thabazimbi';
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', () => {
  if (document.querySelector('#search').value === '') {
    getWeather();
  } else {
    const rawSearchValue = document.querySelector('#search').value;
    searchInputValue = encodeURIComponent(rawSearchValue.trim());
    getWeather();
  }
});


document.querySelector('input').value;


// Function that fetches weather api

async function getWeather() {

  try {

    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e0d3c7ebf93b4fb48c1121421233105&q=${searchInputValue}`, { mode: 'cors' });
    let result = await response.json();
    console.log(result);
    return result;

  } catch (err) {

    throw new Error(`Oops! ${err}`)

  }

}

/*  Create JSON object with the result from getWeather() 

// Stringify?
// Parse?

// condition = result.data.current.condition.text
// cloud = result.data.current.loud
// etc..

*/

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