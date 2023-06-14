# Weather App

This is a weather application that allows users to search for the weather forecast of a specific location. It provides current weather conditions, hourly forecasts, and a 7-day forecast.

## Deployment

The Weather App is deployed and can be accessed [here](https://preto-phil.github.io/Weather-App/).


## Skills and Technologies Used

- JavaScript
- HTML
- CSS
- Fetch API for data retrieval
- Asynchronous programming with Promises
- DOM manipulation
- Responsive design using CSS media queries

## Features

- Search for weather forecasts by location
- Display current weather conditions including temperature, real feel, humidity, wind speed, precipitation, and cloud coverage
- Toggle between Celsius and Fahrenheit temperature units
- Toggle between kilometers per hour (kph) and miles per hour (mph) for wind speed
- Hourly forecast for the upcoming hours with slider navigation
- 7-day forecast with daily temperature, weather condition, chance of rain, and wind speed
- Responsive design for optimal viewing on different devices

## Challenges and Solutions

- **Fetching Weather Data**: Retrieving weather data from the API asynchronously and parsing the response. Solution: Used the Fetch API with Promises and asynchronous functions to handle the API request and response.

- **Unit Conversion**: Implementing the toggling functionality between Celsius and Fahrenheit temperature units, and between kph and mph for wind speed. Solution: Created functions to convert temperature and wind speed values based on the selected unit.

- **DOM Manipulation**: Dynamically updating the HTML elements to display weather data and handle user interactions. Solution: Used JavaScript and DOM manipulation techniques to update the content of HTML elements and respond to user actions.

## What I've Learned

Through building this weather app, I have gained hands-on experience in working with JavaScript, HTML, and CSS to create a responsive web application. I have learned how to fetch data from an API, handle asynchronous operations, and manipulate the DOM to dynamically update the user interface.

I have also improved my problem-solving skills by tackling challenges such as unit conversion and data formatting. Additionally, I have gained a deeper understanding of working with third-party APIs and integrating their data into a real-world application.

## Future Improvements

While the current version of the weather app provides basic functionality, there are several areas that can be improved in the future:

- Adding more advanced weather data such as sunrise/sunset times, UV index, and air quality.
- Implementing geolocation to automatically fetch weather data based on the user's current location.
- Enhancing the user interface with additional visual elements, animations, or interactive features.
- Optimizing performance and loading times through caching and data compression techniques.
- Conducting further testing and error handling to ensure a robust and reliable application.

## Getting Started

To run the Weather App locally, follow these steps:

1. Open the page deployed on [Github](https://preto-phil.github.io/Weather-App/).
2. Start searching for weather forecasts by entering a location in the search input.
