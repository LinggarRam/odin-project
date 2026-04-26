const celsiusToFahrenheit = (celsius) => {
  return Math.round((celsius * 9) / 5 + 32);
};

const formatTime = (timeStr) => {
  if (!timeStr) return "-";
  const [hour, minute] = timeStr.split(":");
  const h = parseInt(hour);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${minute} ${ampm}`;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatDay = (dateStr) => {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

const getWeatherIcon = (condition, icon) => {
  const c = (condition || "").toLowerCase();
  const i = (icon || "").toLowerCase();

  if (i.includes("snow") || c.includes("snow")) return "❄️";
  if (i.includes("rain") || c.includes("rain")) return "🌧️";
  if (i.includes("thunder") || c.includes("thunder")) return "⛈️";
  if (i.includes("fog") || c.includes("fog")) return "🌫️";
  if (i.includes("wind") || c.includes("wind")) return "💨";
  if (i.includes("cloudy") || c.includes("overcast")) return "☁️";
  if (i.includes("partly") || c.includes("partly")) return "⛅";
  if (i.includes("clear") || c.includes("clear")) return "☀️";
  if (i.includes("sunny") || c.includes("sunny")) return "🌤️";
  return "🌡️";
};

const processData = (rawData) => {
  const current = rawData.currentConditions;
  const today = rawData.days[0];

  return {
    city: rawData.address,
    resolvedAddress: rawData.resolvedAddress,

    temp: Math.round(current.temp),
    feelsLike: Math.round(current.feelsLike),
    condition: current.conditions,
    icon: getWeatherIcon(current.conditions, current.icon),
    humidity: `${current.humidity}%`,
    windSpeed: `${Math.round(current.windspeed)} km/h`,
    visibility: `${current.visibility} km`,
    sunrise: formatTime(current.sunrise),
    sunset: formatTime(current.sunset),
    date: formatDate(today.datetime),

    forecast: rawData.days.slice(0, 7).map((day) => ({
      day: formatDay(day.datetime),
      date: day.datetime,
      tempMax: Math.round(day.tempmax),
      tempMin: Math.round(day.tempmin),
      condition: day.conditions,
      icon: getWeatherIcon(day.conditions, day.icon),
      humidity: `${day.humidity}%`,
    })),

    celsiusToFahrenheit,
  };
};

export { processData, celsiusToFahrenheit };
