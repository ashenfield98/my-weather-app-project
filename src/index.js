function changeWeatherDetails(response) {
  let temperatureElement = document.querySelector("#weather-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "7b8fb87030c4beo42b4207t4f1d8b27a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeWeatherDetails);
}

function changeCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);
searchCity("Amsterdam");
