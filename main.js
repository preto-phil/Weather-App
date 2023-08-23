// Set initial / default search input value
let searchInputValue = 'Thabazimbi';

// Set initial slider index
let sliderIndex = 1;

// Load initial data
window.onload = () => {
  getWeather();
}

// Get the input field
const input = document.querySelector('#search');

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("search-btn").click();
  }
});

// Get search button element
const searchBtn = document.querySelector('#search-btn');

// Add event listener to search button
searchBtn.addEventListener('click', getInput);


function getInput() {
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
async function getWeather() {
  try {
    // Fetch weather data from API
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e0d3c7ebf93b4fb48c1121421233105&days=8&q=${searchInputValue}`, { mode: 'cors' });
    const result = await response.json();
    // Call parseCurrentData function to extract and process some weatherData
    parseCurrentData(result);
    parseHourlyData(result);
    parseDailyData(result);
    console.log(result);
  } catch (err) {
    throw new Error(`Error fetching weather data: ${err}`)
  }
}

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

  return {
    weatherData,
    locationData,
  }
}

// Function that adds text to location from API data
function assignLocationValues(locationData) {
  // Get the reference to the HTML div elements
  const locationDiv = document.getElementById('location');
  const timezoneDiv = document.getElementById('timezone');
  let timezone = `${locationData.timezone}`;

  const currentDate = new Date().toLocaleDateString(undefined, { timezone });
  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(locationData.localTime).getDay()];
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date(locationData.localTime).getMonth()];
  let numDay = currentDate.slice(0, 2);
  let numYear = currentDate.slice(6);
  let time = locationData.localTime;
  time = time.slice(-5);

  locationDiv.textContent = `${locationData.city}, ${locationData.region}, ${locationData.country}`;
  timezoneDiv.textContent = `${dayOfWeek} ${numDay} ${month} ${numYear} | ${time}`;
}


// Function that adds text to weather from API data
function assignWeatherValues(weatherData) {
  // Get the reference to the HTML div elements
  const temperatureDivC = document.getElementById('temperature-c');
  const temperatureDivF = document.getElementById('temperature-f');
  const realFeelDivC = document.getElementById('realfeel-c');
  const realFeelDivF = document.getElementById('realfeel-f');
  const humidityDiv = document.getElementById('humidity-num');
  const windDivK = document.getElementById('wind-k');
  const windDivM = document.getElementById('wind-m');
  const conditionDiv = document.getElementById('condition');
  const precipitationDiv = document.getElementById('precip-num');
  const cloudDiv = document.getElementById('cloud-num');

  temperatureDivC.textContent = `${Math.round(weatherData.temp_c)} \u00B0C`;
  temperatureDivF.textContent = `${Math.round(weatherData.temp_f)} \u00B0F`;
  realFeelDivC.textContent = `${Math.round(weatherData.realFeel_c)} \u00B0C`;
  realFeelDivF.textContent = `${Math.round(weatherData.realFeel_f)} \u00B0F`;
  humidityDiv.textContent = `${weatherData.humidity}%`;
  cloudDiv.textContent = `${weatherData.cloud}%`;
  windDivK.textContent = `${Math.round(weatherData.wind_k)} kph`;
  windDivM.textContent = `${Math.round(weatherData.wind_m)} mph`;
  precipitationDiv.textContent = `${weatherData.precip_mm} mm`;

  let icon = weatherData.condition;
  icon = `./Icons${icon.substring(20)}`;

  conditionDiv.innerHTML = `<img src="${icon}" class="image" alt="${weatherData.condition.text}" />`;
  
}

function parseHourlyData(result) {

  let hourlyData = [];
  let currentDateTime = result.current.last_updated;
  // trim everything before and after hour
  let currentTime = currentDateTime.slice(11, 13);
  let todayTime = currentTime;
  if (todayTime < 10) { todayTime = Number(todayTime.slice(-1)) };
  let tomorrowTime = 0;

  for (let i = 0; i < 24; i++) {
    
    if (todayTime < 24) {
      // day 0
      let results = result.forecast.forecastday[0].hour[todayTime];
      let icon = results.condition.icon;
      icon = `./Icons${icon.substring(20)}`

      hourlyData[i] = {
        hour: `${todayTime}:00`,
        condition: `<img src="${icon}" class="image" alt="${results.condition.text}" />`,
        temp_c: `${Math.round(results.temp_c)} \u00B0C`,
        temp_f: `${Math.round(results.temp_f)} \u00B0F`,
      }
      todayTime++;
    } else {
      // day 1
      let results = result.forecast.forecastday[1].hour[tomorrowTime];

      let icon = results.condition.icon;
      icon = `./Icons${icon.substring(20)}`

      let hour;
      if (tomorrowTime < 10) {
        hour = `0${tomorrowTime}`;
      } else {
        hour = tomorrowTime;
      }

      hourlyData[i] = {
        hour: `${hour}:00`,
        condition: `<img src="${icon}" class="image" alt="${results.condition.text}" />`,
        temp_c: `${Math.round(results.temp_c)} \u00B0C`,
        temp_f: `${Math.round(results.temp_f)} \u00B0F`,
      }
      tomorrowTime++;
    }
  }

  createHourlyDivs(hourlyData);

  console.log(hourlyData);
  return hourlyData;
}

function parseDailyData(result) {

  let dailyData = [];

  for (let i = 1; i < 3; i++) {
    let results = result.forecast.forecastday[i];

    let icon = results.day.condition.icon;
    icon = `./Icons${icon.substring(20)}`

    let j = i - 1;

    let formatDate = new Date(results.date);
    let day = formatDate.getDate();
    let month = formatDate.toLocaleString('default', { month: 'long' });

    dailyData[j] = {
      date: `${day} ${month}`,
      condition: `<img src="${icon}" class="image" alt="${results.day.condition.text}" />`,
      maxtemp_c: `Max:   ${Math.round(results.day.maxtemp_c)} \u00B0C`,
      mintemp_c: `Min:   ${Math.round(results.day.mintemp_c)} \u00B0C`,
      maxtemp_f: `Max:   ${Math.round(results.day.maxtemp_f)} \u00B0F`,
      mintemp_f: `Min:   ${Math.round(results.day.mintemp_f)} \u00B0F`,
      daily_chance_of_rain: `Rain:      ${results.day.daily_chance_of_rain}% `,
      maxwind_kph: `Wind:  ${Math.round(results.day.maxwind_kph)} kph`,
      maxwind_mph: `Wind:  ${Math.round(results.day.maxwind_mph)} mph`,
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
      childDiv.innerHTML = `${value}`;
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
      childDiv.innerHTML = `${value}`;
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

  // Change the styling of the active dot
  const dots = document.getElementsByClassName("dot");
  for (let x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  dots[sliderIndex - 1].className += " active";

}

function toggleDegree() {
  const temp_c = document.querySelectorAll('.temp_c');
  const temp_f = document.querySelectorAll('.temp_f');
  const maxtemp_c = document.querySelectorAll('.maxtemp_c');
  const mintemp_c = document.querySelectorAll('.mintemp_c');
  const maxtemp_f = document.querySelectorAll('.maxtemp_f');
  const mintemp_f = document.querySelectorAll('.mintemp_f');

  const elements = [temp_c, temp_f, maxtemp_c, mintemp_c, maxtemp_f, mintemp_f];

  elements.forEach((list) => {
    list.forEach((element) => {
      element.classList.toggle('hidden');
    });
  });

  const temperatureDivC = document.getElementById('temperature-c');
  const temperatureDivF = document.getElementById('temperature-f');
  const realFeelDivC = document.getElementById('realfeel-c');
  const realFeelDivF = document.getElementById('realfeel-f');

  temperatureDivC.classList.toggle('hidden');
  temperatureDivF.classList.toggle('hidden');
  realFeelDivC.classList.toggle('hidden');
  realFeelDivF.classList.toggle('hidden');
}


function toggleDegreeDiv() {
  const degree_c = document.getElementsByClassName('degree-c')[0];
  const degree_f = document.getElementsByClassName('degree-f')[0];

  if (degree_c.classList.contains('active')) {
    degree_c.classList.remove('active');
    degree_f.classList.add('active');
  } else {
    degree_f.classList.remove('active');
    degree_c.classList.add('active');}
}

const tempButton = document.querySelector('.degree');
tempButton.addEventListener('click', () => {
  toggleDegree();
  toggleDegreeDiv();
});

function toggleWind() {
  const maxwind_kph = document.querySelectorAll('.maxwind_kph');
  const maxwind_mph = document.querySelectorAll('.maxwind_mph');

  const elements = [maxwind_kph, maxwind_mph];

  elements.forEach((list) => {
    list.forEach((element) => {
      element.classList.toggle('hidden');
    });
  });

  const windDivK = document.getElementById('wind-k');
  const windDivM = document.getElementById('wind-m');

  windDivK.classList.toggle('hidden');
  windDivM.classList.toggle('hidden');
}


function toggleWindDiv() {
  const wind_k = document.getElementsByClassName('wind-k')[0];
  const wind_m = document.getElementsByClassName('wind-m')[0];

  if (wind_k.classList.contains('active')) {
    wind_k.classList.remove('active');
    wind_m.classList.add('active');
  } else {
    wind_m.classList.remove('active');
    wind_k.classList.add('active');}
}

const windButton = document.querySelector('.wind');
windButton.addEventListener('click', () => {
  toggleWind();
  toggleWindDiv();
});


function openGithub() {
  const githubIcon = document.getElementById('github-icon');
  githubIcon.addEventListener('click', () => {
    window.open('https://github.com/preto-phil');
  });
}

openGithub();