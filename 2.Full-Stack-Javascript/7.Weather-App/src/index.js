import "./style.css";
import fetchWeather from "./weatherAPI.js";
import { processData } from "./processData.js";

fetchWeather("Ponorogo")
  .then((data) => {
    const processed = processData(data);
    console.log("Processed data:", processed);
  })
  .catch((err) => console.error("Error:", err));
