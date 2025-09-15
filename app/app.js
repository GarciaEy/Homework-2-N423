// import * as MODEL from "/model/model.js";

// function initListeners() {
//   $("#random-meal-btn").on("click", function () {
//     MODEL.getRandomRecipe();
//     // console.log("Random meal button clicked!");
//   });
//   $("#search").on("click", () => {
//     // console.log("Search button clicked!");
//     let category = $("#cat").val();
//     MODEL.getMealsByCategory(category);
//     if (category != "") {
//       console.log("Selected category:", category);
//     } else {
//       alert("Please select a category");
//     }
//   });
// }

// function initCats() {
//   MODEL.getCategories();
// }

// $(document).ready(function () {
//   initCats();
//   initListeners();
// });
// app.js
// app.js
// app.js
// app.js
// app.js

// app/app.js
import * as MODEL from "../model/model.js"; // adjust path if needed

let lastSearchedCity = "";

// Initialize event listeners
function initListeners() {
  $("#searchBtn").on("click", () => {
    const city = $("#cityInput").val().trim();
    if (city !== "") {
      lastSearchedCity = city;
      loadWeather(lastSearchedCity, $("#daySelector").val());
    }
  });

  $("#daySelector, #unitSelector").on("change", () => {
    if (lastSearchedCity) {
      loadWeather(lastSearchedCity, $("#daySelector").val());
    }
  });
}

function loadWeather(city, days) {
  MODEL.fetchWeatherData(city, days)
    .done((data) => displayWeather(data))
    .fail((err) => alert("Error fetching weather data"));
}

function displayWeather(data) {
  const unit = $("#unitSelector").val();

  const temp = unit === "c" ? data.current.temp_c : data.current.temp_f;
  const feelsLike =
    unit === "c" ? data.current.feelslike_c : data.current.feelslike_f;
  const heatIndex =
    unit === "c" ? data.current.heatindex_c : data.current.heatindex_f;
  const precip =
    unit === "c"
      ? `${data.current.precip_mm} mm`
      : `${data.current.precip_in} in`;

  $("#cityName").text(`${data.location.name}, ${data.location.country}`);
  $("#date").text(data.location.localtime);
  $("#temperature").text(`${temp}°${unit.toUpperCase()}`);
  $("#condition").text(data.current.condition.text);
  $("#feelsLike").text(`${feelsLike}°${unit.toUpperCase()}`);
  $("#humidity").text(`${data.current.humidity}%`);
  $("#wind").text(`${data.current.wind_kph} km/h`);
  $("#uv").text(data.current.uv);
  $("#pressure").text(`${data.current.pressure_mb} hPa`);
  $("#dewPoint").text(
    data.current.dewpoint_c !== undefined
      ? `${data.current.dewpoint_c}°C`
      : "N/A"
  );
  $("#heatIndex").text(`${heatIndex}°${unit.toUpperCase()}`);
  $("#precipitation").text(precip);

  const forecastContainer = $("#forecast");
  forecastContainer.empty();
  data.forecast.forecastday.forEach((day) => {
    const avgTemp = unit === "c" ? day.day.avgtemp_c : day.day.avgtemp_f;
    forecastContainer.append(`
      <div class="day">
        <h4>${day.date}</h4>
        <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
        <p>${avgTemp}°${unit.toUpperCase()}</p>
        <p>${day.day.condition.text}</p>
      </div>
    `);
  });
}

$(document).ready(() => {
  initListeners();
});
