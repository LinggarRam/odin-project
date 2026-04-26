import { celsiusToFahrenheit } from "./processData.js";

let currentData = null;
let isCelsius = true;

const showSection = (section) => {
  document.getElementById("loading").classList.remove("show");
  document.getElementById("error-state").classList.remove("show");
  document.getElementById("welcome-state").classList.remove("show");
  document.getElementById("weather-content").classList.remove("show");

  if (section === "loading") {
    document.getElementById("loading").classList.add("show");
  } else if (section === "error") {
    document.getElementById("error-state").classList.add("show");
  } else if (section === "welcome") {
    document.getElementById("welcome-state").classList.add("show");
  } else if (section === "weather") {
    document.getElementById("weather-content").classList.add("show");
  }
};

const renderWeather = (data, celsius = true) => {
  const temp = celsius ? data.temp : celsiusToFahrenheit(data.temp);
  const feelsLike = celsius ? data.feelsLike : celsiusToFahrenheit(data.feelsLike);
  const unit = celsius ? "C" : "F";

  document.getElementById("city-name").textContent = data.city;
  document.getElementById("country-name").textContent = data.resolvedAddress;
  document.getElementById("weather-date").textContent = data.date;

  document.getElementById("temp-value").textContent = temp;
  document.getElementById("temp-unit").textContent = unit;
  document.getElementById("weather-icon").textContent = data.icon;
  document.getElementById("weather-condition").textContent = data.condition;

  document.getElementById("humidity").textContent = data.humodity;
  document.getElementById("wind-speed").textContent = data.windSpeed;
  document.getElementById("feels-like").textContent = `${feelsLike}${unit}`;
  document.getElementById("visibility").textContent = data.visibility;
  document.getElementById("sunrise").textContent = data.sunrise;
  document.getElementById("sunset").textContent = data.sunset;

  const forecastGrid = document.getElementById("forecast-grid");
  forecastGrid.innerHTML = "";

  data.forecast.forEach((day, index) => {
    const maxTemp = celsius ? day.tempMax : celsiusToFahrenheit(day.tempMax);
    const minTemp = celsius ? day.tempMin : celsiusToFahrenheit(day.tempMin);

    const card = document.createElement("div");
    card.classList.add("forecast-card");
    if (index === 0) card.classList.add("today");

    card.innerHTML = `
        <div class="forecast-day">${index === 0 ? "Today" : day.day}</div>
        <div class="forecast-icon">${day.icon}</div>
        <div class="forecast-temp-max">${maxTemp}${unit}</div>
        <div class="forecast-temp-min">${minTemp}${unit}</div>
        <div class="forecast-cond">${day.condition}</div>
      `;

    forecastGrid.appendChild(card);
  });

  showSection("weather");
};

const initUI = () => {
  showSection("welcome");

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const location = searchInput.value.trim();
    if (!location) return;

    showSection("loading");

    try {
      const { default: fetchWeather } = await import("./weatherAPI.js");
      const { processData } = await import("./processData.js");

      const rawData = await fetchWeather(location);
      currentData = processData(rawData);

      renderWeather(currentData, isCelsius);
    } catch (error) {
      console.log("Weather fetch error:", error);
      showSection("error");
    }
  });

  const unitToggle = document.getElementById("unit-toggle");
  unitToggle.addEventListener("change", () => {
    isCelsius = !unitToggle.checked;

    if (currentData) {
      renderWeather(currentData, isCelsius);
    }
  });
};

export default initUI;
