import hourlySlider from './slider.js'

export function createDailyDivs(dailyData) {

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

export function createHourlyDivs(hourlyData) {

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

export function toggleDegree() {
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


export function toggleDegreeDiv() {
  const degree_c = document.getElementsByClassName('degree-c')[0];
  const degree_f = document.getElementsByClassName('degree-f')[0];

  if (degree_c.classList.contains('active')) {
    degree_c.classList.remove('active');
    degree_f.classList.add('active');
  } else {
    degree_f.classList.remove('active');
    degree_c.classList.add('active');}
}

export function toggleWind() {

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


export function toggleWindDiv() {
  const wind_k = document.getElementsByClassName('wind-k')[0];
  const wind_m = document.getElementsByClassName('wind-m')[0];

  if (wind_k.classList.contains('active')) {
    wind_k.classList.remove('active');
    wind_m.classList.add('active');
  } else {
    wind_m.classList.remove('active');
    wind_k.classList.add('active');}
}
