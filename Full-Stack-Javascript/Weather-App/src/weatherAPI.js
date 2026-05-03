const API_KEY = "LSWMAT2UUAVF8NE64Q5RNBMED";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const fetchWeather = async (location) => {
  const url = `${BASE_URL}/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json&include=current,days`;
  console.log("Fetching:", url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Location not found: ${location}`);
  }

  const data = await response.json();
  console.log("Raw API data:", data);

  return data;
};

export default fetchWeather;
