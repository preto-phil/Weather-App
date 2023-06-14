// Function that adds text to location from API data
export function assignLocationValues(lData) {
  // Get the reference to the HTML div elements
  const locationDiv = document.getElementById('location');
  const timezoneDiv = document.getElementById('timezone');
  let locationData = lData;
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
export function assignWeatherValues(wData) {
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
  let weatherData = wData;

  temperatureDivC.textContent = `${Math.round(weatherData.temp_c)} \u00B0C`;
  temperatureDivF.textContent = `${Math.round(weatherData.temp_f)} \u2109`;
  realFeelDivC.textContent = `${Math.round(weatherData.realFeel_c)} \u00B0C`;
  realFeelDivF.textContent = `${Math.round(weatherData.realFeel_f)} \u2109`;
  humidityDiv.textContent = `${weatherData.humidity}%`;
  cloudDiv.textContent = `${weatherData.cloud}%`;
  windDivK.textContent = `${Math.round(weatherData.wind_k)} kph`;
  windDivM.textContent = `${Math.round(weatherData.wind_m)} mph`;
  precipitationDiv.textContent = `${weatherData.precip_mm}mm`;

  let icon = weatherData.condition;
  console.log(icon);
  icon = `./Icons${icon.substring(20)}`;
  console.log(icon);

  conditionDiv.innerHTML = `<img src="${icon}" class="image" alt="${weatherData.condition.text}" />`;
  
}