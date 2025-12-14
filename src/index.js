function changeCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
}

searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCityName);
