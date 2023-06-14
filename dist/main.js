/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/light_sky_stars_background_85555_1920x1080.jpg */ "./src/Images/light_sky_stars_background_85555_1920x1080.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

html {
  --dark-grey: #52525b;
  --middle-grey: #bbb;
  --light-grey: rgb(204, 203, 203);
}

body {
/*   background-color: rgb(61, 59, 59);
 */  color: whitesmoke;
  font-family: monospace;

  min-height: 100vh;
  height: 100%;

  min-width: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 0.12fr 1.03fr 0.05fr;

  margin: 0;
  padding: 0;

  
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;

}

main,
footer,
#current,
#daily,
#left-slider,
#right-slider {
  /* display: none; */
  display: flex;
  justify-content: center;
  align-items: center;
}


/* 
Header Section
 */

header {
  grid-area: 1 / 1 / 2 / 2;

  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

}

#header {
/* 
  background-color: rgb(61, 59, 59); */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  height: 100%;
}

#title-div {
  grid-area: 1 / 1 / 2 / 2;

  display: flex;
  justify-content: start;
  align-items: center;
}

.logo {
  margin: 0.8rem;
  width: 11%;
  height: 50%;

  padding-left: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(246deg) brightness(102%) contrast(143%);
}

.title-text {
  padding-left: 2rem;

  font-size: 2rem;
  font-weight: 700;

  color: var(--middle-grey);
}

#search-div {
  grid-area: 1 / 2 / 2 / 3;

  display: flex;
  justify-content: center;
  align-items: center;
}

#search {
  font-size: 1.3rem;

  padding: 0.5rem 1rem;

  border: none;
  border-radius: 10px 0px 0px 10px;
}

#search-btn {
  font-size: 1.3rem;

  padding: 0.5rem 1rem;

  border: none;
  border-radius: 0px 10px 10px 0px;

  cursor: pointer;
}

#toggle-div {
  grid-area: 1 / 3 / 2 / 4;

  display: flex;
  justify-content: end;
  align-items: center;
}

.degree,
.wind {
  margin-right: 1.6rem;

  display: flex;
  flex-direction: row;
}

.degree-c,
.wind-k {
  background-color: rgb(204, 203, 203);
  border-radius: 10px 0px 0px 10px;

  font-size: 0.8rem;
  padding: 0.5rem 1rem;

  cursor: pointer;
}

.degree-f,
.wind-m {
  background-color: rgb(204, 203, 203);
  border-radius: 0px 10px 10px 0px;

  font-size: 0.8rem;
  padding: 0.5rem 1rem;
 
  cursor: pointer;
}

.active {
  color: black;
  font-weight: 600;
  background-color: #bbb;
}


/* Current Section */

main {
  grid-area: 2 / 1 / 3 / 2;

  display: grid;
  grid-template-columns: 1fr 9fr 1fr;
  grid-template-rows: repeat(3, 1fr);

  background-color: rgba(0, 0, 0, 0.2);

  row-gap: 1.5rem;
}

#current-parent {
  grid-area: 1 / 1 / 2 / 4;

/*   background-color: rgb(68, 65, 112); */

/* background-color: rgb(61, 59, 59); */

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

#current {
  display: grid;
  grid-template-rows: 2fr 1fr 4fr;
  grid-template-columns: repeat(7, 1fr);

  width: 80%;
}

#current div:not(#temperature-f, #realfeel-f, #wind-m, #temperature-c.hidden, #realfeel-c.hidden, #wind-k.hidden ),
#temperature-f.hidden,
#realfeel-f.hidden,
#wind-m.hidden {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#location,
#timezone {
  display: flex;
  justify-content: center;
  align-items: center;
}

#location {
  grid-area: 1 / 1 / 2 / 8;

  font-size: 1.6rem;
  font-weight: 600;
}

#timezone {
  grid-area: 2 / 1 / 3 / 8;

  font-size: 1.2rem;
  color: var(--light-grey);
}



#temperature {
  grid-area: 3 / 1 / 4 / 2;
}

#realfeel {
  grid-area: 3 / 2 / 4 / 3;
}

#wind {
  grid-area: 3 / 3 / 4 / 4;
}

#condition {
  grid-area: 3 / 4 / 4 / 5;

}

#cloud {
  grid-area: 3 / 5 / 4 / 6;

}

#precipitation {
  grid-area: 3 / 6 / 4 / 7;

}

#humidity {
  grid-area: 3 / 7 / 4 / 8;

}
.current-styling {
  font-size: 1.6rem;
  font-weight: 500;
}


.current-text {
  font-size: 1rem;
  font-weight: 500;

  display: flex;
  align-items: start;

  padding-bottom: 1.6rem;

  color: var(--dark-grey);
}


/* Toggling Dump */

.maxwind_kph, 
.maxwind_mph.hidden,
.temp_c,
.maxtemp_c,
.mintemp_c,
.temp_f.hidden,
.maxtemp_f.hidden,
.mintemp_f.hidden {
  display: block;
}

.maxwind_kph.hidden, 
.maxwind_mph,
#wind-m,
#wind-k.hidden,
#realfeel-c.hidden,
#temperature-c.hidden,
#realfeel-f,
#temperature-f,
.temp_f,
.maxtemp_f,
.mintemp_f,
.temp_c.hidden,
.maxtemp_c.hidden,
.mintemp_c.hidden {
  display: none;
}



/* Hourly Section */

#hourly-parent {
  grid-area: 2 / 2 / 3 / 3;

  display: grid;
  grid-template-rows: 2fr 9fr 1fr;

  height: 100%;
}

#h-forecast {
  grid-area: 1 / 1 / 2 / 2;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 600;
}

#hourly {
  grid-area: 2 / 1 / 3 / 2;

  
/*   background-color: rgb(65, 95, 112); */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  column-gap: 2rem;
}

.hours {
  width: 12%;
  height: 80%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  row-gap: 0.8rem;

  font-size: 1.2rem;
  font-weight: 500;

}

.hour {
  color: var(--light-grey);
}

/* Dot Section */

.dot-nav {
  grid-area: 3 / 1 / 4 / 2;

  display: flex;
  justify-content: center;
  align-items: center;

}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

/* Slider and Dot Pseudo Section */

#left-slider {
  grid-area: 2 / 1 / 3 / 2;
}

#right-slider {
  grid-area: 2 / 3 / 3 / 4;
}

.slider-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: auto;
  height: 20%;
  padding: 8px 16px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

.previous:hover,
.next:hover {
  color: rgb(255, 253, 253);
  background-color: rgba(61, 59, 59, 0.8);
}


.active, .dot:hover {
  background-color: #717171;
}


/* Daily Section */

#daily-parent {
  grid-area: 3 / 1 / 4 / 4;

  display: grid;
  grid-template-rows: 1fr 4fr;
  
  width: 100%;
  height: 100%;
}

#d-forecast {
  grid-area: 1 / 1 / 2 / 2;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 600;

  padding-bottom: 0.8rem;
}

#daily {

  grid-area: 2 / 1 / 3 / 2;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  
  width: 80%;
  height: 100%;
  margin: auto;
}

.day {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  width: 12%;
  height: 80%;
}

.date {
  font-size: 1rem;
}

.day-item {
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
}


/* Footer Section */

footer {
  grid-area: 3 / 1 / 4 / 2;

  background-color: rgb(0, 0, 0, 0.2);

  padding-top: 1.5rem;
}

#footer {
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: end;

  width: 100%;
  height: 100%;
}

#footer-text {  
  font-size: 1rem;
  font-weight: 600;
  color: whitesmoke;
  text-shadow: 2px 2px 12px violet;
  
  width: 50%;
  padding-right: 1rem;
}

#github-icon {
  font-size: 1rem;
  


  align-items: center;
  justify-content: center;

  height: 100%;

  
  cursor: pointer;
}

#github-icon img {
  height: 80%;
  margin-left: 1rem;
}

#github-icon img:hover {
  height: 85%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  --dark-grey: #52525b;\n  --middle-grey: #bbb;\n  --light-grey: rgb(204, 203, 203);\n}\n\nbody {\n/*   background-color: rgb(61, 59, 59);\n */  color: whitesmoke;\n  font-family: monospace;\n\n  min-height: 100vh;\n  height: 100%;\n\n  min-width: 100vh;\n  width: 100%;\n\n  display: grid;\n  grid-template-rows: 0.12fr 1.03fr 0.05fr;\n\n  margin: 0;\n  padding: 0;\n\n  \n  background: url(./Images/light_sky_stars_background_85555_1920x1080.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n\n}\n\nmain,\nfooter,\n#current,\n#daily,\n#left-slider,\n#right-slider {\n  /* display: none; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n/* \nHeader Section\n */\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.5);\n\n}\n\n#header {\n/* \n  background-color: rgb(61, 59, 59); */\n\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  height: 100%;\n}\n\n#title-div {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.logo {\n  margin: 0.8rem;\n  width: 11%;\n  height: 50%;\n\n  padding-left: 2rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo img {\n  filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(246deg) brightness(102%) contrast(143%);\n}\n\n.title-text {\n  padding-left: 2rem;\n\n  font-size: 2rem;\n  font-weight: 700;\n\n  color: var(--middle-grey);\n}\n\n#search-div {\n  grid-area: 1 / 2 / 2 / 3;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#search {\n  font-size: 1.3rem;\n\n  padding: 0.5rem 1rem;\n\n  border: none;\n  border-radius: 10px 0px 0px 10px;\n}\n\n#search-btn {\n  font-size: 1.3rem;\n\n  padding: 0.5rem 1rem;\n\n  border: none;\n  border-radius: 0px 10px 10px 0px;\n\n  cursor: pointer;\n}\n\n#toggle-div {\n  grid-area: 1 / 3 / 2 / 4;\n\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n.degree,\n.wind {\n  margin-right: 1.6rem;\n\n  display: flex;\n  flex-direction: row;\n}\n\n.degree-c,\n.wind-k {\n  background-color: rgb(204, 203, 203);\n  border-radius: 10px 0px 0px 10px;\n\n  font-size: 0.8rem;\n  padding: 0.5rem 1rem;\n\n  cursor: pointer;\n}\n\n.degree-f,\n.wind-m {\n  background-color: rgb(204, 203, 203);\n  border-radius: 0px 10px 10px 0px;\n\n  font-size: 0.8rem;\n  padding: 0.5rem 1rem;\n \n  cursor: pointer;\n}\n\n.active {\n  color: black;\n  font-weight: 600;\n  background-color: #bbb;\n}\n\n\n/* Current Section */\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: grid;\n  grid-template-columns: 1fr 9fr 1fr;\n  grid-template-rows: repeat(3, 1fr);\n\n  background-color: rgba(0, 0, 0, 0.2);\n\n  row-gap: 1.5rem;\n}\n\n#current-parent {\n  grid-area: 1 / 1 / 2 / 4;\n\n/*   background-color: rgb(68, 65, 112); */\n\n/* background-color: rgb(61, 59, 59); */\n\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#current {\n  display: grid;\n  grid-template-rows: 2fr 1fr 4fr;\n  grid-template-columns: repeat(7, 1fr);\n\n  width: 80%;\n}\n\n#current div:not(#temperature-f, #realfeel-f, #wind-m, #temperature-c.hidden, #realfeel-c.hidden, #wind-k.hidden ),\n#temperature-f.hidden,\n#realfeel-f.hidden,\n#wind-m.hidden {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n#location,\n#timezone {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#location {\n  grid-area: 1 / 1 / 2 / 8;\n\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n\n#timezone {\n  grid-area: 2 / 1 / 3 / 8;\n\n  font-size: 1.2rem;\n  color: var(--light-grey);\n}\n\n\n\n#temperature {\n  grid-area: 3 / 1 / 4 / 2;\n}\n\n#realfeel {\n  grid-area: 3 / 2 / 4 / 3;\n}\n\n#wind {\n  grid-area: 3 / 3 / 4 / 4;\n}\n\n#condition {\n  grid-area: 3 / 4 / 4 / 5;\n\n}\n\n#cloud {\n  grid-area: 3 / 5 / 4 / 6;\n\n}\n\n#precipitation {\n  grid-area: 3 / 6 / 4 / 7;\n\n}\n\n#humidity {\n  grid-area: 3 / 7 / 4 / 8;\n\n}\n.current-styling {\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n\n\n.current-text {\n  font-size: 1rem;\n  font-weight: 500;\n\n  display: flex;\n  align-items: start;\n\n  padding-bottom: 1.6rem;\n\n  color: var(--dark-grey);\n}\n\n\n/* Toggling Dump */\n\n.maxwind_kph, \n.maxwind_mph.hidden,\n.temp_c,\n.maxtemp_c,\n.mintemp_c,\n.temp_f.hidden,\n.maxtemp_f.hidden,\n.mintemp_f.hidden {\n  display: block;\n}\n\n.maxwind_kph.hidden, \n.maxwind_mph,\n#wind-m,\n#wind-k.hidden,\n#realfeel-c.hidden,\n#temperature-c.hidden,\n#realfeel-f,\n#temperature-f,\n.temp_f,\n.maxtemp_f,\n.mintemp_f,\n.temp_c.hidden,\n.maxtemp_c.hidden,\n.mintemp_c.hidden {\n  display: none;\n}\n\n\n\n/* Hourly Section */\n\n#hourly-parent {\n  grid-area: 2 / 2 / 3 / 3;\n\n  display: grid;\n  grid-template-rows: 2fr 9fr 1fr;\n\n  height: 100%;\n}\n\n#h-forecast {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n\n#hourly {\n  grid-area: 2 / 1 / 3 / 2;\n\n  \n/*   background-color: rgb(65, 95, 112); */\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n\n  column-gap: 2rem;\n}\n\n.hours {\n  width: 12%;\n  height: 80%;\n  \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 0.8rem;\n\n  font-size: 1.2rem;\n  font-weight: 500;\n\n}\n\n.hour {\n  color: var(--light-grey);\n}\n\n/* Dot Section */\n\n.dot-nav {\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n}\n\n.dot {\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n/* Slider and Dot Pseudo Section */\n\n#left-slider {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n#right-slider {\n  grid-area: 2 / 3 / 3 / 4;\n}\n\n.slider-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n  width: auto;\n  height: 20%;\n  padding: 8px 16px;\n  color: rgb(0, 0, 0);\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n}\n\n.previous:hover,\n.next:hover {\n  color: rgb(255, 253, 253);\n  background-color: rgba(61, 59, 59, 0.8);\n}\n\n\n.active, .dot:hover {\n  background-color: #717171;\n}\n\n\n/* Daily Section */\n\n#daily-parent {\n  grid-area: 3 / 1 / 4 / 4;\n\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  \n  width: 100%;\n  height: 100%;\n}\n\n#d-forecast {\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 1.6rem;\n  font-weight: 600;\n\n  padding-bottom: 0.8rem;\n}\n\n#daily {\n\n  grid-area: 2 / 1 / 3 / 2;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  column-gap: 2rem;\n  \n  width: 80%;\n  height: 100%;\n  margin: auto;\n}\n\n.day {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  \n  width: 12%;\n  height: 80%;\n}\n\n.date {\n  font-size: 1rem;\n}\n\n.day-item {\n  font-size: 0.8rem;\n  padding-bottom: 0.4rem;\n}\n\n\n/* Footer Section */\n\nfooter {\n  grid-area: 3 / 1 / 4 / 2;\n\n  background-color: rgb(0, 0, 0, 0.2);\n\n  padding-top: 1.5rem;\n}\n\n#footer {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  text-align: end;\n\n  width: 100%;\n  height: 100%;\n}\n\n#footer-text {  \n  font-size: 1rem;\n  font-weight: 600;\n  color: whitesmoke;\n  text-shadow: 2px 2px 12px violet;\n  \n  width: 50%;\n  padding-right: 1rem;\n}\n\n#github-icon {\n  font-size: 1rem;\n  \n\n\n  align-items: center;\n  justify-content: center;\n\n  height: 100%;\n\n  \n  cursor: pointer;\n}\n\n#github-icon img {\n  height: 80%;\n  margin-left: 1rem;\n}\n\n#github-icon img:hover {\n  height: 85%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignLocationValues: () => (/* binding */ assignLocationValues),
/* harmony export */   assignWeatherValues: () => (/* binding */ assignWeatherValues)
/* harmony export */ });
// Function that adds text to location from API data
function assignLocationValues(lData) {
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
function assignWeatherValues(wData) {
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

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDailyDivs: () => (/* binding */ createDailyDivs),
/* harmony export */   createHourlyDivs: () => (/* binding */ createHourlyDivs),
/* harmony export */   hourlySlider: () => (/* binding */ hourlySlider),
/* harmony export */   openGithub: () => (/* binding */ openGithub),
/* harmony export */   toggleDegree: () => (/* binding */ toggleDegree),
/* harmony export */   toggleDegreeDiv: () => (/* binding */ toggleDegreeDiv),
/* harmony export */   toggleWind: () => (/* binding */ toggleWind),
/* harmony export */   toggleWindDiv: () => (/* binding */ toggleWindDiv)
/* harmony export */ });

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

  const dots = document.getElementsByClassName("dot");
  for (x = 0; x < dots.length; x++) {
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


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather),
/* harmony export */   parseCurrentData: () => (/* binding */ parseCurrentData),
/* harmony export */   parseDailyData: () => (/* binding */ parseDailyData),
/* harmony export */   parseHourlyData: () => (/* binding */ parseHourlyData)
/* harmony export */ });
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

  for (let i = 1; i < 8; i++) {
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
      maxtemp_f: `Max:   ${Math.round(results.day.maxtemp_f)} \u2109`,
      mintemp_f: `Min:   ${Math.round(results.day.mintemp_f)} \u2109`,
      daily_chance_of_rain: `Rain:      ${results.day.daily_chance_of_rain}% `,
      maxwind_kph: `Wind:  ${Math.round(results.day.maxwind_kph)} kph`,
      maxwind_mph: `Wind:  ${Math.round(results.day.maxwind_mph)} mph`,
    }
  }
  
  createDailyDivs(dailyData);

  console.log(dailyData);
  return dailyData;
}

/***/ }),

/***/ "./src/Images/light_sky_stars_background_85555_1920x1080.jpg":
/*!*******************************************************************!*\
  !*** ./src/Images/light_sky_stars_background_85555_1920x1080.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "107f558358c111e7bc2d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// Set initial / default search input value
let searchInputValue = 'Thabazimbi';

// Set initial slider index
let sliderIndex = 1;

// Load initial data
window.onload = () => {
  (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)();
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
      (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)();
    } else {
      // Use the entered search input value, whilst trimming whitespace
      const rawSearchValue = document.querySelector('#search').value;
      searchInputValue = encodeURIComponent(rawSearchValue.trim());
      (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)();
    }
}


(0,_ui_js__WEBPACK_IMPORTED_MODULE_2__.openGithub)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJMQUEwRTtBQUN0SCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekMsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssaUJBQWlCLGNBQWMsYUFBYSxZQUFZLFlBQVksWUFBWSxVQUFVLGFBQWEsV0FBVyxZQUFZLFlBQVksYUFBYSxjQUFjLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssUUFBUSxXQUFXLGFBQWEsV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssYUFBYSxjQUFjLFdBQVcsYUFBYSxXQUFXLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxjQUFjLGFBQWEsY0FBYyxXQUFXLE9BQU8sTUFBTSxZQUFZLGNBQWMsYUFBYSxjQUFjLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLGFBQWEsV0FBVyxZQUFZLGNBQWMsY0FBYyxXQUFXLE9BQU8sS0FBSyxhQUFhLGNBQWMsY0FBYyxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLE1BQU0sUUFBUSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsYUFBYSxXQUFXLGFBQWEsY0FBYyxhQUFhLFFBQVEsYUFBYSxhQUFhLFVBQVUsT0FBTyxrQkFBa0IsVUFBVSxRQUFRLGFBQWEsTUFBTSxhQUFhLFdBQVcsYUFBYSxXQUFXLE1BQU0sS0FBSyxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssY0FBYyxjQUFjLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTZGO0FBQ3hCO0FBQzJFO0FBQzNIOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsdURBQVU7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQVU7QUFDaEIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQVU7QUFDaEI7QUFDQTs7O0FBR0Esa0RBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ltYWdlcy9saWdodF9za3lfc3RhcnNfYmFja2dyb3VuZF84NTU1NV8xOTIweDEwODAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgLS1kYXJrLWdyZXk6ICM1MjUyNWI7XG4gIC0tbWlkZGxlLWdyZXk6ICNiYmI7XG4gIC0tbGlnaHQtZ3JleTogcmdiKDIwNCwgMjAzLCAyMDMpO1xufVxuXG5ib2R5IHtcbi8qICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCA1OSwgNTkpO1xuICovICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblxuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1pbi13aWR0aDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xMmZyIDEuMDNmciAwLjA1ZnI7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIFxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbn1cblxubWFpbixcbmZvb3RlcixcbiNjdXJyZW50LFxuI2RhaWx5LFxuI2xlZnQtc2xpZGVyLFxuI3JpZ2h0LXNsaWRlciB7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi8qIFxuSGVhZGVyIFNlY3Rpb25cbiAqL1xuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcblxufVxuXG4jaGVhZGVyIHtcbi8qIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDU5LCA1OSk7ICovXG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcblxuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiN0aXRsZS1kaXYge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDAuOHJlbTtcbiAgd2lkdGg6IDExJTtcbiAgaGVpZ2h0OiA1MCU7XG5cbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgxMDAlKSBodWUtcm90YXRlKDI0NmRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxNDMlKTtcbn1cblxuLnRpdGxlLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG5cbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuXG4gIGNvbG9yOiB2YXIoLS1taWRkbGUtZ3JleSk7XG59XG5cbiNzZWFyY2gtZGl2IHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2VhcmNoIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG5cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbn1cblxuI3NlYXJjaC1idG4ge1xuICBmb250LXNpemU6IDEuM3JlbTtcblxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3RvZ2dsZS1kaXYge1xuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZWdyZWUsXG4ud2luZCB7XG4gIG1hcmdpbi1yaWdodDogMS42cmVtO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5kZWdyZWUtYyxcbi53aW5kLWsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDMsIDIwMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xuXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWdyZWUtZixcbi53aW5kLW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDMsIDIwMyk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xuXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiBcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xufVxuXG5cbi8qIEN1cnJlbnQgU2VjdGlvbiAqL1xuXG5tYWluIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDlmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gIHJvdy1nYXA6IDEuNXJlbTtcbn1cblxuI2N1cnJlbnQtcGFyZW50IHtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xuXG4vKiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjUsIDExMik7ICovXG5cbi8qIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNTksIDU5KTsgKi9cblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2N1cnJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgNGZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuXG4gIHdpZHRoOiA4MCU7XG59XG5cbiNjdXJyZW50IGRpdjpub3QoI3RlbXBlcmF0dXJlLWYsICNyZWFsZmVlbC1mLCAjd2luZC1tLCAjdGVtcGVyYXR1cmUtYy5oaWRkZW4sICNyZWFsZmVlbC1jLmhpZGRlbiwgI3dpbmQtay5oaWRkZW4gKSxcbiN0ZW1wZXJhdHVyZS1mLmhpZGRlbixcbiNyZWFsZmVlbC1mLmhpZGRlbixcbiN3aW5kLW0uaGlkZGVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNsb2NhdGlvbixcbiN0aW1lem9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbG9jYXRpb24ge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDg7XG5cbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiN0aW1lem9uZSB7XG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gODtcblxuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xufVxuXG5cblxuI3RlbXBlcmF0dXJlIHtcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xufVxuXG4jcmVhbGZlZWwge1xuICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDM7XG59XG5cbiN3aW5kIHtcbiAgZ3JpZC1hcmVhOiAzIC8gMyAvIDQgLyA0O1xufVxuXG4jY29uZGl0aW9uIHtcbiAgZ3JpZC1hcmVhOiAzIC8gNCAvIDQgLyA1O1xuXG59XG5cbiNjbG91ZCB7XG4gIGdyaWQtYXJlYTogMyAvIDUgLyA0IC8gNjtcblxufVxuXG4jcHJlY2lwaXRhdGlvbiB7XG4gIGdyaWQtYXJlYTogMyAvIDYgLyA0IC8gNztcblxufVxuXG4jaHVtaWRpdHkge1xuICBncmlkLWFyZWE6IDMgLyA3IC8gNCAvIDg7XG5cbn1cbi5jdXJyZW50LXN0eWxpbmcge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4uY3VycmVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcblxuICBwYWRkaW5nLWJvdHRvbTogMS42cmVtO1xuXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xufVxuXG5cbi8qIFRvZ2dsaW5nIER1bXAgKi9cblxuLm1heHdpbmRfa3BoLCBcbi5tYXh3aW5kX21waC5oaWRkZW4sXG4udGVtcF9jLFxuLm1heHRlbXBfYyxcbi5taW50ZW1wX2MsXG4udGVtcF9mLmhpZGRlbixcbi5tYXh0ZW1wX2YuaGlkZGVuLFxuLm1pbnRlbXBfZi5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1heHdpbmRfa3BoLmhpZGRlbiwgXG4ubWF4d2luZF9tcGgsXG4jd2luZC1tLFxuI3dpbmQtay5oaWRkZW4sXG4jcmVhbGZlZWwtYy5oaWRkZW4sXG4jdGVtcGVyYXR1cmUtYy5oaWRkZW4sXG4jcmVhbGZlZWwtZixcbiN0ZW1wZXJhdHVyZS1mLFxuLnRlbXBfZixcbi5tYXh0ZW1wX2YsXG4ubWludGVtcF9mLFxuLnRlbXBfYy5oaWRkZW4sXG4ubWF4dGVtcF9jLmhpZGRlbixcbi5taW50ZW1wX2MuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cbi8qIEhvdXJseSBTZWN0aW9uICovXG5cbiNob3VybHktcGFyZW50IHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDlmciAxZnI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jaC1mb3JlY2FzdCB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI2hvdXJseSB7XG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcblxuICBcbi8qICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA5NSwgMTEyKTsgKi9cblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICBjb2x1bW4tZ2FwOiAycmVtO1xufVxuXG4uaG91cnMge1xuICB3aWR0aDogMTIlO1xuICBoZWlnaHQ6IDgwJTtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMC44cmVtO1xuXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuXG59XG5cbi5ob3VyIHtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xufVxuXG4vKiBEb3QgU2VjdGlvbiAqL1xuXG4uZG90LW5hdiB7XG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uZG90IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xufVxuXG4vKiBTbGlkZXIgYW5kIERvdCBQc2V1ZG8gU2VjdGlvbiAqL1xuXG4jbGVmdC1zbGlkZXIge1xuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG59XG5cbiNyaWdodC1zbGlkZXIge1xuICBncmlkLWFyZWE6IDIgLyAzIC8gMyAvIDQ7XG59XG5cbi5zbGlkZXItYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAyMCU7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcmV2aW91czpob3Zlcixcbi5uZXh0OmhvdmVyIHtcbiAgY29sb3I6IHJnYigyNTUsIDI1MywgMjUzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgNTksIDU5LCAwLjgpO1xufVxuXG5cbi5hY3RpdmUsIC5kb3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xufVxuXG5cbi8qIERhaWx5IFNlY3Rpb24gKi9cblxuI2RhaWx5LXBhcmVudCB7XG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gNDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jZC1mb3JlY2FzdCB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xufVxuXG4jZGFpbHkge1xuXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgXG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICB3aWR0aDogMTIlO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLmRhdGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kYXktaXRlbSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuXG5cbi8qIEZvb3RlciBTZWN0aW9uICovXG5cbmZvb3RlciB7XG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4yKTtcblxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xufVxuXG4jZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogZW5kO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNmb290ZXItdGV4dCB7ICBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTJweCB2aW9sZXQ7XG4gIFxuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuXG4jZ2l0aHViLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIFxuXG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIFxuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNnaXRodWItaWNvbiBpbWcge1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbiNnaXRodWItaWNvbiBpbWc6aG92ZXIge1xuICBoZWlnaHQ6IDg1JTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7QUFDQTtFQUNFLEdBQUcsaUJBQWlCO0VBQ3BCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBQ2pCLFlBQVk7O0VBRVosZ0JBQWdCO0VBQ2hCLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHdDQUF3Qzs7RUFFeEMsU0FBUztFQUNULFVBQVU7OztFQUdWLG1EQUF3RTtFQUN4RSxzQkFBc0I7RUFDdEIsNEJBQTRCOztBQUU5Qjs7QUFFQTs7Ozs7O0VBTUUsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFHQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3Qjs7RUFFeEIsWUFBWTs7RUFFWixvQ0FBb0M7O0FBRXRDOztBQUVBO0FBQ0E7c0NBQ3NDOztFQUVwQyxhQUFhO0VBQ2Isa0NBQWtDOztFQUVsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXOztFQUVYLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7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QUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7OztBQUdBLG1CQUFtQjs7QUFFbkI7RUFDRSx3QkFBd0I7O0VBRXhCLG1DQUFtQzs7RUFFbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTs7RUFFZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0NBQWdDOztFQUVoQyxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTs7OztFQUlmLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLFlBQVk7OztFQUdaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAtLWRhcmstZ3JleTogIzUyNTI1YjtcXG4gIC0tbWlkZGxlLWdyZXk6ICNiYmI7XFxuICAtLWxpZ2h0LWdyZXk6IHJnYigyMDQsIDIwMywgMjAzKTtcXG59XFxuXFxuYm9keSB7XFxuLyogICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDU5LCA1OSk7XFxuICovICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIG1pbi13aWR0aDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMTJmciAxLjAzZnIgMC4wNWZyO1xcblxcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIFxcbiAgYmFja2dyb3VuZDogdXJsKC4vSW1hZ2VzL2xpZ2h0X3NreV9zdGFyc19iYWNrZ3JvdW5kXzg1NTU1XzE5MjB4MTA4MC5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxufVxcblxcbm1haW4sXFxuZm9vdGVyLFxcbiNjdXJyZW50LFxcbiNkYWlseSxcXG4jbGVmdC1zbGlkZXIsXFxuI3JpZ2h0LXNsaWRlciB7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogXFxuSGVhZGVyIFNlY3Rpb25cXG4gKi9cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcblxcbn1cXG5cXG4jaGVhZGVyIHtcXG4vKiBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNTksIDU5KTsgKi9cXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdGl0bGUtZGl2IHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luOiAwLjhyZW07XFxuICB3aWR0aDogMTElO1xcbiAgaGVpZ2h0OiA1MCU7XFxuXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMTAwJSkgaHVlLXJvdGF0ZSgyNDZkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTQzJSk7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxuICBjb2xvcjogdmFyKC0tbWlkZGxlLWdyZXkpO1xcbn1cXG5cXG4jc2VhcmNoLWRpdiB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcXG59XFxuXFxuI3NlYXJjaC1idG4ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9nZ2xlLWRpdiB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVncmVlLFxcbi53aW5kIHtcXG4gIG1hcmdpbi1yaWdodDogMS42cmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kZWdyZWUtYyxcXG4ud2luZC1rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwMywgMjAzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xcblxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlZ3JlZS1mLFxcbi53aW5kLW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjAzLCAyMDMpO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XFxuXFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG59XFxuXFxuXFxuLyogQ3VycmVudCBTZWN0aW9uICovXFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuICByb3ctZ2FwOiAxLjVyZW07XFxufVxcblxcbiNjdXJyZW50LXBhcmVudCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuXFxuLyogICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDY1LCAxMTIpOyAqL1xcblxcbi8qIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNTksIDU5KTsgKi9cXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY3VycmVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDRmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuXFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4jY3VycmVudCBkaXY6bm90KCN0ZW1wZXJhdHVyZS1mLCAjcmVhbGZlZWwtZiwgI3dpbmQtbSwgI3RlbXBlcmF0dXJlLWMuaGlkZGVuLCAjcmVhbGZlZWwtYy5oaWRkZW4sICN3aW5kLWsuaGlkZGVuICksXFxuI3RlbXBlcmF0dXJlLWYuaGlkZGVuLFxcbiNyZWFsZmVlbC1mLmhpZGRlbixcXG4jd2luZC1tLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2xvY2F0aW9uLFxcbiN0aW1lem9uZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA4O1xcblxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jdGltZXpvbmUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA4O1xcblxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcblxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxufVxcblxcbiNyZWFsZmVlbCB7XFxuICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDM7XFxufVxcblxcbiN3aW5kIHtcXG4gIGdyaWQtYXJlYTogMyAvIDMgLyA0IC8gNDtcXG59XFxuXFxuI2NvbmRpdGlvbiB7XFxuICBncmlkLWFyZWE6IDMgLyA0IC8gNCAvIDU7XFxuXFxufVxcblxcbiNjbG91ZCB7XFxuICBncmlkLWFyZWE6IDMgLyA1IC8gNCAvIDY7XFxuXFxufVxcblxcbiNwcmVjaXBpdGF0aW9uIHtcXG4gIGdyaWQtYXJlYTogMyAvIDYgLyA0IC8gNztcXG5cXG59XFxuXFxuI2h1bWlkaXR5IHtcXG4gIGdyaWQtYXJlYTogMyAvIDcgLyA0IC8gODtcXG5cXG59XFxuLmN1cnJlbnQtc3R5bGluZyB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcblxcbi5jdXJyZW50LXRleHQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFxuICBwYWRkaW5nLWJvdHRvbTogMS42cmVtO1xcblxcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcblxcbi8qIFRvZ2dsaW5nIER1bXAgKi9cXG5cXG4ubWF4d2luZF9rcGgsIFxcbi5tYXh3aW5kX21waC5oaWRkZW4sXFxuLnRlbXBfYyxcXG4ubWF4dGVtcF9jLFxcbi5taW50ZW1wX2MsXFxuLnRlbXBfZi5oaWRkZW4sXFxuLm1heHRlbXBfZi5oaWRkZW4sXFxuLm1pbnRlbXBfZi5oaWRkZW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tYXh3aW5kX2twaC5oaWRkZW4sIFxcbi5tYXh3aW5kX21waCxcXG4jd2luZC1tLFxcbiN3aW5kLWsuaGlkZGVuLFxcbiNyZWFsZmVlbC1jLmhpZGRlbixcXG4jdGVtcGVyYXR1cmUtYy5oaWRkZW4sXFxuI3JlYWxmZWVsLWYsXFxuI3RlbXBlcmF0dXJlLWYsXFxuLnRlbXBfZixcXG4ubWF4dGVtcF9mLFxcbi5taW50ZW1wX2YsXFxuLnRlbXBfYy5oaWRkZW4sXFxuLm1heHRlbXBfYy5oaWRkZW4sXFxuLm1pbnRlbXBfYy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuLyogSG91cmx5IFNlY3Rpb24gKi9cXG5cXG4jaG91cmx5LXBhcmVudCB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOWZyIDFmcjtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2gtZm9yZWNhc3Qge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2hvdXJseSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuXFxuICBcXG4vKiAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgOTUsIDExMik7ICovXFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxufVxcblxcbi5ob3VycyB7XFxuICB3aWR0aDogMTIlO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHJvdy1nYXA6IDAuOHJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG59XFxuXFxuLmhvdXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4vKiBEb3QgU2VjdGlvbiAqL1xcblxcbi5kb3QtbmF2IHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5kb3Qge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBtYXJnaW46IDAgMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC42cyBlYXNlO1xcbn1cXG5cXG4vKiBTbGlkZXIgYW5kIERvdCBQc2V1ZG8gU2VjdGlvbiAqL1xcblxcbiNsZWZ0LXNsaWRlciB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxufVxcblxcbiNyaWdodC1zbGlkZXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMyAvIDMgLyA0O1xcbn1cXG5cXG4uc2xpZGVyLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByZXZpb3VzOmhvdmVyLFxcbi5uZXh0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTMsIDI1Myk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCA1OSwgNTksIDAuOCk7XFxufVxcblxcblxcbi5hY3RpdmUsIC5kb3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcXG59XFxuXFxuXFxuLyogRGFpbHkgU2VjdGlvbiAqL1xcblxcbiNkYWlseS1wYXJlbnQge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyA0O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIFxcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNkLWZvcmVjYXN0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4jZGFpbHkge1xcblxcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgXFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxuICB3aWR0aDogMTIlO1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRheS1pdGVtIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuXFxuLyogRm9vdGVyIFNlY3Rpb24gKi9cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMik7XFxuXFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jZm9vdGVyLXRleHQgeyAgXFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMnB4IHZpb2xldDtcXG4gIFxcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbiNnaXRodWItaWNvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBcXG5cXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZ2l0aHViLWljb24gaW1nIHtcXG4gIGhlaWdodDogODAlO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbiNnaXRodWItaWNvbiBpbWc6aG92ZXIge1xcbiAgaGVpZ2h0OiA4NSU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gRnVuY3Rpb24gdGhhdCBhZGRzIHRleHQgdG8gbG9jYXRpb24gZnJvbSBBUEkgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkxvY2F0aW9uVmFsdWVzKGxEYXRhKSB7XG4gIC8vIEdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBIVE1MIGRpdiBlbGVtZW50c1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuICBjb25zdCB0aW1lem9uZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lem9uZScpO1xuICBsZXQgbG9jYXRpb25EYXRhID0gbERhdGE7XG4gIGxldCB0aW1lem9uZSA9IGAke2xvY2F0aW9uRGF0YS50aW1lem9uZX1gO1xuXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCB7IHRpbWV6b25lIH0pO1xuICBjb25zdCBkYXlPZldlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11bbmV3IERhdGUobG9jYXRpb25EYXRhLmxvY2FsVGltZSkuZ2V0RGF5KCldO1xuICBjb25zdCBtb250aCA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddW25ldyBEYXRlKGxvY2F0aW9uRGF0YS5sb2NhbFRpbWUpLmdldE1vbnRoKCldO1xuICBsZXQgbnVtRGF5ID0gY3VycmVudERhdGUuc2xpY2UoMCwgMik7XG4gIGxldCBudW1ZZWFyID0gY3VycmVudERhdGUuc2xpY2UoNik7XG4gIGxldCB0aW1lID0gbG9jYXRpb25EYXRhLmxvY2FsVGltZTtcbiAgdGltZSA9IHRpbWUuc2xpY2UoLTUpO1xuXG4gIGxvY2F0aW9uRGl2LnRleHRDb250ZW50ID0gYCR7bG9jYXRpb25EYXRhLmNpdHl9LCAke2xvY2F0aW9uRGF0YS5yZWdpb259LCAke2xvY2F0aW9uRGF0YS5jb3VudHJ5fWA7XG4gIHRpbWV6b25lRGl2LnRleHRDb250ZW50ID0gYCR7ZGF5T2ZXZWVrfSAke251bURheX0gJHttb250aH0gJHtudW1ZZWFyfSB8ICR7dGltZX1gO1xufVxuXG5cbi8vIEZ1bmN0aW9uIHRoYXQgYWRkcyB0ZXh0IHRvIHdlYXRoZXIgZnJvbSBBUEkgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbldlYXRoZXJWYWx1ZXMod0RhdGEpIHtcbiAgLy8gR2V0IHRoZSByZWZlcmVuY2UgdG8gdGhlIEhUTUwgZGl2IGVsZW1lbnRzXG4gIGNvbnN0IHRlbXBlcmF0dXJlRGl2QyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wZXJhdHVyZS1jJyk7XG4gIGNvbnN0IHRlbXBlcmF0dXJlRGl2RiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wZXJhdHVyZS1mJyk7XG4gIGNvbnN0IHJlYWxGZWVsRGl2QyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsZmVlbC1jJyk7XG4gIGNvbnN0IHJlYWxGZWVsRGl2RiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsZmVlbC1mJyk7XG4gIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5LW51bScpO1xuICBjb25zdCB3aW5kRGl2SyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLWsnKTtcbiAgY29uc3Qgd2luZERpdk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZC1tJyk7XG4gIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25kaXRpb24nKTtcbiAgY29uc3QgcHJlY2lwaXRhdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVjaXAtbnVtJyk7XG4gIGNvbnN0IGNsb3VkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3VkLW51bScpO1xuICBsZXQgd2VhdGhlckRhdGEgPSB3RGF0YTtcblxuICB0ZW1wZXJhdHVyZURpdkMudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnRlbXBfYyl9IFxcdTAwQjBDYDtcbiAgdGVtcGVyYXR1cmVEaXZGLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS50ZW1wX2YpfSBcXHUyMTA5YDtcbiAgcmVhbEZlZWxEaXZDLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5yZWFsRmVlbF9jKX0gXFx1MDBCMENgO1xuICByZWFsRmVlbERpdkYudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLnJlYWxGZWVsX2YpfSBcXHUyMTA5YDtcbiAgaHVtaWRpdHlEaXYudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcbiAgY2xvdWREaXYudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5jbG91ZH0lYDtcbiAgd2luZERpdksudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLndpbmRfayl9IGtwaGA7XG4gIHdpbmREaXZNLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS53aW5kX20pfSBtcGhgO1xuICBwcmVjaXBpdGF0aW9uRGl2LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEucHJlY2lwX21tfW1tYDtcblxuICBsZXQgaWNvbiA9IHdlYXRoZXJEYXRhLmNvbmRpdGlvbjtcbiAgY29uc29sZS5sb2coaWNvbik7XG4gIGljb24gPSBgLi9JY29ucyR7aWNvbi5zdWJzdHJpbmcoMjApfWA7XG4gIGNvbnNvbGUubG9nKGljb24pO1xuXG4gIGNvbmRpdGlvbkRpdi5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2ljb259XCIgY2xhc3M9XCJpbWFnZVwiIGFsdD1cIiR7d2VhdGhlckRhdGEuY29uZGl0aW9uLnRleHR9XCIgLz5gO1xuICBcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYWlseURpdnMoZGFpbHlEYXRhKSB7XG5cbiAgY29uc3QgZ2V0RGFpbHlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHknKTtcbiAgZ2V0RGFpbHlEaXYuaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYWlseURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF5JywgYGRheS0ke2l9YCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYWlseURhdGFbaV0pKSB7XG4gICAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZCgnZGF5LWl0ZW0nLCBrZXkpO1xuICAgICAgY2hpbGREaXYuaW5uZXJIVE1MID0gYCR7dmFsdWV9YDtcbiAgICAgIGNyZWF0ZURpdi5hcHBlbmRDaGlsZChjaGlsZERpdik7XG4gICAgfVxuICAgIGdldERhaWx5RGl2LmFwcGVuZENoaWxkKGNyZWF0ZURpdik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvdXJseURpdnMoaG91cmx5RGF0YSkge1xuXG4gIGNvbnN0IGdldEhvdXJseURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHknKTtcbiAgZ2V0SG91cmx5RGl2LmlubmVySFRNTCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cmx5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZURpdi5jbGFzc0xpc3QuYWRkKCdob3VycycsIGBob3VyLSR7aX1gKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGhvdXJseURhdGFbaV0pKSB7XG4gICAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZCgnaG91ci1pdGVtJywga2V5KTtcbiAgICAgIGNoaWxkRGl2LmlubmVySFRNTCA9IGAke3ZhbHVlfWA7XG4gICAgICBjcmVhdGVEaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xuICAgIH1cbiAgICBnZXRIb3VybHlEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KTtcbiAgfVxuICBob3VybHlTbGlkZXIoKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaG91cmx5U2xpZGVyKGluZGV4ID0gMCkge1xuICBzbGlkZXJJbmRleCA9IHNsaWRlckluZGV4ICsgaW5kZXg7XG4gIGNvbnNvbGUubG9nKHNsaWRlckluZGV4KTtcbiAgaWYgKHNsaWRlckluZGV4ID09PSAwKSB7XG4gICAgc2xpZGVySW5kZXggPSA0O1xuICB9IFxuICBpZiAoc2xpZGVySW5kZXggPT09IDUpIHtcbiAgICBzbGlkZXJJbmRleCA9IDE7XG4gIH1cblxuICBsZXQgaG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ob3Vyc2ApO1xuICBob3VybHlEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kaWNlcyBmb3IgdGhlIHJhbmdlIG9mIGRpdnMgdG8gZGlzcGxheVxuICBjb25zdCBzdGFydCA9IChzbGlkZXJJbmRleCAtIDEpICogNjtcbiAgY29uc3QgZW5kID0gc3RhcnQgKyA2O1xuXG4gIC8vIERpc3BsYXkgdGhlIHNlbGVjdGVkIHJhbmdlIG9mIGhvdXJseSBkaXZzXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGhvdXJseURpdnNbaV0pIHtcbiAgICAgIGhvdXJseURpdnNbaV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9XG4gIH1cblxuICBjb25zdCBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRvdFwiKTtcbiAgZm9yICh4ID0gMDsgeCA8IGRvdHMubGVuZ3RoOyB4KyspIHtcbiAgICBkb3RzW3hdLmNsYXNzTmFtZSA9IGRvdHNbeF0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICB9XG4gIGRvdHNbc2xpZGVySW5kZXggLSAxXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZURlZ3JlZSgpIHtcbiAgY29uc3QgdGVtcF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXBfYycpO1xuICBjb25zdCB0ZW1wX2YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcF9mJyk7XG4gIGNvbnN0IG1heHRlbXBfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXh0ZW1wX2MnKTtcbiAgY29uc3QgbWludGVtcF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbnRlbXBfYycpO1xuICBjb25zdCBtYXh0ZW1wX2YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF4dGVtcF9mJyk7XG4gIGNvbnN0IG1pbnRlbXBfZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5taW50ZW1wX2YnKTtcblxuICBjb25zdCBlbGVtZW50cyA9IFt0ZW1wX2MsIHRlbXBfZiwgbWF4dGVtcF9jLCBtaW50ZW1wX2MsIG1heHRlbXBfZiwgbWludGVtcF9mXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCB0ZW1wZXJhdHVyZURpdkMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUtYycpO1xuICBjb25zdCB0ZW1wZXJhdHVyZURpdkYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUtZicpO1xuICBjb25zdCByZWFsRmVlbERpdkMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbGZlZWwtYycpO1xuICBjb25zdCByZWFsRmVlbERpdkYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhbGZlZWwtZicpO1xuXG4gIHRlbXBlcmF0dXJlRGl2Qy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgdGVtcGVyYXR1cmVEaXZGLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICByZWFsRmVlbERpdkMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIHJlYWxGZWVsRGl2Ri5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRGVncmVlRGl2KCkge1xuICBjb25zdCBkZWdyZWVfYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlZ3JlZS1jJylbMF07XG4gIGNvbnN0IGRlZ3JlZV9mID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVncmVlLWYnKVswXTtcblxuICBpZiAoZGVncmVlX2MuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgIGRlZ3JlZV9jLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRlZ3JlZV9mLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGRlZ3JlZV9mLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRlZ3JlZV9jLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO31cbn1cblxuY29uc3QgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWdyZWUnKTtcbnRlbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRvZ2dsZURlZ3JlZSgpO1xuICB0b2dnbGVEZWdyZWVEaXYoKTtcbn0pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVXaW5kKCkge1xuXG4gIGNvbnN0IG1heHdpbmRfa3BoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1heHdpbmRfa3BoJyk7XG4gIGNvbnN0IG1heHdpbmRfbXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1heHdpbmRfbXBoJyk7XG5cbiAgY29uc3QgZWxlbWVudHMgPSBbbWF4d2luZF9rcGgsIG1heHdpbmRfbXBoXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9KTtcblxuXG4gIGNvbnN0IHdpbmREaXZLID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQtaycpO1xuICBjb25zdCB3aW5kRGl2TSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLW0nKTtcblxuICB3aW5kRGl2Sy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgd2luZERpdk0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVdpbmREaXYoKSB7XG4gIGNvbnN0IHdpbmRfayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtaycpWzBdO1xuICBjb25zdCB3aW5kX20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLW0nKVswXTtcblxuICBpZiAod2luZF9rLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICB3aW5kX2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgd2luZF9tLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRfbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB3aW5kX2suY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7fVxufVxuXG5jb25zdCB3aW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKTtcbndpbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRvZ2dsZVdpbmQoKTtcbiAgdG9nZ2xlV2luZERpdigpO1xufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5HaXRodWIoKSB7XG4gIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViLWljb24nKTtcbiAgZ2l0aHViSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL3ByZXRvLXBoaWwnKTtcbiAgfSk7XG59XG4iLCIvLyBGdW5jdGlvbiB0aGF0IGZldGNoZXMgd2VhdGhlciBkYXRhXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgdHJ5IHtcbiAgICAvLyBGZXRjaCB3ZWF0aGVyIGRhdGEgZnJvbSBBUElcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1lMGQzYzdlYmY5M2I0ZmI0OGMxMTIxNDIxMjMzMTA1JmRheXM9OCZxPSR7c2VhcmNoSW5wdXRWYWx1ZX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gQ2FsbCBwYXJzZUN1cnJlbnREYXRhIGZ1bmN0aW9uIHRvIGV4dHJhY3QgYW5kIHByb2Nlc3Mgc29tZSB3ZWF0aGVyRGF0YVxuICAgIHBhcnNlQ3VycmVudERhdGEocmVzdWx0KTtcbiAgICBwYXJzZUhvdXJseURhdGEocmVzdWx0KTtcbiAgICBwYXJzZURhaWx5RGF0YShyZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGE6ICR7ZXJyfWApXG4gIH1cbn1cblxuLyogU2hvdWxkIHBlcmhhcHMgbWFrZSB1c2Ugb2YgZGVzdHJ1Y3R1cmluZyBmb3Igd2VhdGhlckRhdGEgYW5kIGxvY2F0aW9uRGF0YSAqL1xuXG4vLyBGdW5jdGlvbiB0byBwYXJzZSB3ZWF0aGVyIGRhdGFcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUN1cnJlbnREYXRhKHJlc3VsdCkge1xuICAvLyBFeHRyYWN0IG5lY2Vzc2FyeSB3ZWF0aGVyIGRhdGFcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSB7XG4gIGNvbmRpdGlvbjogcmVzdWx0LmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gIHRlbXBfYzogcmVzdWx0LmN1cnJlbnQudGVtcF9jLFxuICB0ZW1wX2Y6IHJlc3VsdC5jdXJyZW50LnRlbXBfZixcbiAgd2luZF9rOiByZXN1bHQuY3VycmVudC53aW5kX2twaCxcbiAgd2luZF9tOiByZXN1bHQuY3VycmVudC53aW5kX21waCxcbiAgaHVtaWRpdHk6IHJlc3VsdC5jdXJyZW50Lmh1bWlkaXR5LFxuICByZWFsRmVlbF9jOiByZXN1bHQuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgcmVhbEZlZWxfZjogcmVzdWx0LmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gIHByZWNpcF9tbTogcmVzdWx0LmN1cnJlbnQucHJlY2lwX21tLFxuICBjbG91ZDogcmVzdWx0LmN1cnJlbnQuY2xvdWQsXG4gIH1cbiAgLy8gRXh0cmFjdCBuZWNlc3NhcnkgbG9jYXRpb24gZGF0YVxuICBjb25zdCBsb2NhdGlvbkRhdGEgPSB7XG4gICAgY2l0eTogcmVzdWx0LmxvY2F0aW9uLm5hbWUsXG4gICAgcmVnaW9uOiByZXN1bHQubG9jYXRpb24ucmVnaW9uLFxuICAgIGNvdW50cnk6IHJlc3VsdC5sb2NhdGlvbi5jb3VudHJ5LFxuICAgIGxvY2FsVGltZTogcmVzdWx0LmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICB0aW1lem9uZTogcmVzdWx0LmxvY2F0aW9uLnR6X2lkLFxuICB9XG5cbiAgLy8gQ2FsbCBmdW5jdGlvblxuICBhc3NpZ25Mb2NhdGlvblZhbHVlcyhsb2NhdGlvbkRhdGEpO1xuICBhc3NpZ25XZWF0aGVyVmFsdWVzKHdlYXRoZXJEYXRhKTtcblxuICAvLyBDb25zb2xlIGxvZyB0byB0ZXN0IHdoZXRoZXIgY29ycmVjdFxuLyogICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKGxvY2F0aW9uRGF0YSk7ICovXG4gIHJldHVybiB7XG4gICAgd2VhdGhlckRhdGEsXG4gICAgbG9jYXRpb25EYXRhLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhvdXJseURhdGEocmVzdWx0KSB7XG5cbiAgbGV0IGhvdXJseURhdGEgPSBbXTtcbiAgbGV0IGN1cnJlbnREYXRlVGltZSA9IHJlc3VsdC5jdXJyZW50Lmxhc3RfdXBkYXRlZDtcbiAgLy8gdHJpbSBldmVyeXRoaW5nIGJlZm9yZSBhbmQgYWZ0ZXIgaG91clxuICBsZXQgdGltZSA9IGN1cnJlbnREYXRlVGltZS5zbGljZSgxMSwgMTMpO1xuICBsZXQgdGltZVJlbWFpbmluZyA9IDI0IC0gKDI0IC0gdGltZSk7XG4gIGxldCB0ID0gdGltZTtcbiAgaWYgKHRpbWUgPCAxMCkgeyB0ID0gTnVtYmVyKHRpbWUuc2xpY2UoLTEpKSB9O1xuICBsZXQgdHIgPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIFxuICAgIGlmICh0IDwgMjQpIHtcbiAgICAgIC8vIGRheSAwXG4gICAgICBsZXQgcmVzdWx0cyA9IHJlc3VsdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW3RdO1xuICAgICAgbGV0IGljb24gPSByZXN1bHRzLmNvbmRpdGlvbi5pY29uO1xuICAgICAgaWNvbiA9IGAuL0ljb25zJHtpY29uLnN1YnN0cmluZygyMCl9YFxuXG4gICAgICBob3VybHlEYXRhW2ldID0ge1xuICAgICAgICBob3VyOiBgJHt0fTowMGAsXG4gICAgICAgIGNvbmRpdGlvbjogYDxpbWcgc3JjPVwiJHtpY29ufVwiIGNsYXNzPVwiaW1hZ2VcIiBhbHQ9XCIke3Jlc3VsdHMuY29uZGl0aW9uLnRleHR9XCIgLz5gLFxuICAgICAgICB0ZW1wX2M6IGAke01hdGgucm91bmQocmVzdWx0cy50ZW1wX2MpfSBcXHUwMEIwQ2AsXG4gICAgICAgIHRlbXBfZjogYCR7TWF0aC5yb3VuZChyZXN1bHRzLnRlbXBfZil9IFxcdTIxMDlgLFxuICAgICAgfVxuICAgICAgdCsrO1xuICAgIH0gZWxzZSBpZiAodHIgPCB0aW1lUmVtYWluaW5nKSB7XG4gICAgICAvLyBkYXkgMVxuICAgICAgbGV0IHJlc3VsdHMgPSByZXN1bHQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uaG91clt0cl07XG5cbiAgICAgIGxldCBpY29uID0gcmVzdWx0cy5jb25kaXRpb24uaWNvbjtcbiAgICAgIGljb24gPSBgLi9JY29ucyR7aWNvbi5zdWJzdHJpbmcoMjApfWBcblxuICAgICAgbGV0IGhvdXI7XG4gICAgICBpZiAodHIgPCAxMCkge1xuICAgICAgICBob3VyID0gYDAke3RyfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBob3VyID0gdHI7XG4gICAgICB9XG5cbiAgICAgIGhvdXJseURhdGFbaV0gPSB7XG4gICAgICAgIGhvdXI6IGAke2hvdXJ9OjAwYCxcbiAgICAgICAgY29uZGl0aW9uOiBgPGltZyBzcmM9XCIke2ljb259XCIgY2xhc3M9XCJpbWFnZVwiIGFsdD1cIiR7cmVzdWx0cy5jb25kaXRpb24udGV4dH1cIiAvPmAsXG4gICAgICAgIHRlbXBfYzogYCR7TWF0aC5yb3VuZChyZXN1bHRzLnRlbXBfYyl9IFxcdTAwQjBDYCxcbiAgICAgICAgdGVtcF9mOiBgJHtNYXRoLnJvdW5kKHJlc3VsdHMudGVtcF9mKX0gXFx1MjEwOWAsXG4gICAgICB9XG4gICAgICB0cisrO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUhvdXJseURpdnMoaG91cmx5RGF0YSk7XG5cbiAgY29uc29sZS5sb2coaG91cmx5RGF0YSk7XG4gIHJldHVybiBob3VybHlEYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYWlseURhdGEocmVzdWx0KSB7XG5cbiAgbGV0IGRhaWx5RGF0YSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgODsgaSsrKSB7XG4gICAgbGV0IHJlc3VsdHMgPSByZXN1bHQuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV07XG5cbiAgICBsZXQgaWNvbiA9IHJlc3VsdHMuZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGljb24gPSBgLi9JY29ucyR7aWNvbi5zdWJzdHJpbmcoMjApfWBcblxuICAgIGxldCBqID0gaSAtIDE7XG5cbiAgICBsZXQgZm9ybWF0RGF0ZSA9IG5ldyBEYXRlKHJlc3VsdHMuZGF0ZSk7XG4gICAgbGV0IGRheSA9IGZvcm1hdERhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aCA9IGZvcm1hdERhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSk7XG5cbiAgICBkYWlseURhdGFbal0gPSB7XG4gICAgICBkYXRlOiBgJHtkYXl9ICR7bW9udGh9YCxcbiAgICAgIGNvbmRpdGlvbjogYDxpbWcgc3JjPVwiJHtpY29ufVwiIGNsYXNzPVwiaW1hZ2VcIiBhbHQ9XCIke3Jlc3VsdHMuZGF5LmNvbmRpdGlvbi50ZXh0fVwiIC8+YCxcbiAgICAgIG1heHRlbXBfYzogYE1heDogICAke01hdGgucm91bmQocmVzdWx0cy5kYXkubWF4dGVtcF9jKX0gXFx1MDBCMENgLFxuICAgICAgbWludGVtcF9jOiBgTWluOiAgICR7TWF0aC5yb3VuZChyZXN1bHRzLmRheS5taW50ZW1wX2MpfSBcXHUwMEIwQ2AsXG4gICAgICBtYXh0ZW1wX2Y6IGBNYXg6ICAgJHtNYXRoLnJvdW5kKHJlc3VsdHMuZGF5Lm1heHRlbXBfZil9IFxcdTIxMDlgLFxuICAgICAgbWludGVtcF9mOiBgTWluOiAgICR7TWF0aC5yb3VuZChyZXN1bHRzLmRheS5taW50ZW1wX2YpfSBcXHUyMTA5YCxcbiAgICAgIGRhaWx5X2NoYW5jZV9vZl9yYWluOiBgUmFpbjogICAgICAke3Jlc3VsdHMuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSUgYCxcbiAgICAgIG1heHdpbmRfa3BoOiBgV2luZDogICR7TWF0aC5yb3VuZChyZXN1bHRzLmRheS5tYXh3aW5kX2twaCl9IGtwaGAsXG4gICAgICBtYXh3aW5kX21waDogYFdpbmQ6ICAke01hdGgucm91bmQocmVzdWx0cy5kYXkubWF4d2luZF9tcGgpfSBtcGhgLFxuICAgIH1cbiAgfVxuICBcbiAgY3JlYXRlRGFpbHlEaXZzKGRhaWx5RGF0YSk7XG5cbiAgY29uc29sZS5sb2coZGFpbHlEYXRhKTtcbiAgcmV0dXJuIGRhaWx5RGF0YTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldFdlYXRoZXIsIHBhcnNlQ3VycmVudERhdGEsIHBhcnNlSG91cmx5RGF0YSwgcGFyc2VEYWlseURhdGEgfSBmcm9tICcuL3dlYXRoZXIuanMnO1xuaW1wb3J0IHsgYXNzaWduTG9jYXRpb25WYWx1ZXMsIGFzc2lnbldlYXRoZXJWYWx1ZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVIb3VybHlEaXZzLCBjcmVhdGVEYWlseURpdnMsIGhvdXJseVNsaWRlciwgdG9nZ2xlRGVncmVlLCB0b2dnbGVXaW5kLCB0b2dnbGVEZWdyZWVEaXYsIHRvZ2dsZVdpbmREaXYsIG9wZW5HaXRodWIgfSBmcm9tICcuL3VpLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBTZXQgaW5pdGlhbCAvIGRlZmF1bHQgc2VhcmNoIGlucHV0IHZhbHVlXG5sZXQgc2VhcmNoSW5wdXRWYWx1ZSA9ICdUaGFiYXppbWJpJztcblxuLy8gU2V0IGluaXRpYWwgc2xpZGVyIGluZGV4XG5sZXQgc2xpZGVySW5kZXggPSAxO1xuXG4vLyBMb2FkIGluaXRpYWwgZGF0YVxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZ2V0V2VhdGhlcigpO1xufVxuXG4vLyBHZXQgdGhlIGlucHV0IGZpZWxkXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcblxuLy8gRXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmRcbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihldmVudCkge1xuICAvLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5IG9uIHRoZSBrZXlib2FyZFxuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uLCBpZiBuZWVkZWRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFRyaWdnZXIgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggYSBjbGlja1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ0blwiKS5jbGljaygpO1xuICB9XG59KTtcblxuLy8gR2V0IHNlYXJjaCBidXR0b24gZWxlbWVudFxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idG4nKTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNlYXJjaCBidXR0b25cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldElucHV0KTtcblxuXG5mdW5jdGlvbiBnZXRJbnB1dCgpIHtcbiAgICAvLyBjaGVjayBpZiBzZWFyY2ggaW5wdXQgaXMgZW1wdHlcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLnZhbHVlID09PSAnJykge1xuICAgICAgLy8gVXNlIGRlZmF1bHQgc2VhcmNoIGlucHV0IHZhbHVlXG4gICAgICBnZXRXZWF0aGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVzZSB0aGUgZW50ZXJlZCBzZWFyY2ggaW5wdXQgdmFsdWUsIHdoaWxzdCB0cmltbWluZyB3aGl0ZXNwYWNlXG4gICAgICBjb25zdCByYXdTZWFyY2hWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKS52YWx1ZTtcbiAgICAgIHNlYXJjaElucHV0VmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQocmF3U2VhcmNoVmFsdWUudHJpbSgpKTtcbiAgICAgIGdldFdlYXRoZXIoKTtcbiAgICB9XG59XG5cblxub3BlbkdpdGh1YigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==