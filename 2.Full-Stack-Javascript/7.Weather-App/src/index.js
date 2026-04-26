import "./style.css";
import fetchWeather from "./weatherAPI.js";

fetchWeather("Jakarta")
  .then((data) => console.log("Success:", data))
  .catch((err) => console.error("Error:", err));
