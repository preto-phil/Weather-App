import { getInput, getWeather } from './weather.js';
import { toggleDegree, toggleWind, toggleDegreeDiv, toggleWindDiv } from './ui.js';
import openGithub from './github.js';
import './style.css';

window.onload = () => {
  getWeather();
}

const input = document.querySelector('#search');
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', getInput);

const windButton = document.querySelector('.wind');
windButton.addEventListener('click', () => {
  toggleWind();
  toggleWindDiv();
});

const tempButton = document.querySelector('.degree');
tempButton.addEventListener('click', () => {
  toggleDegree();
  toggleDegreeDiv();
});

openGithub();