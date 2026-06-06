export default function createCurrentWeather(isMetric, weatherInfo = {}) {
  const { city, date, icon, conditions, chance, temperature } = weatherInfo;

  const temperatureSymbol = isMetric ? "\u00B0C" : "\u2109";

  const currentWeather = document.createElement("div");
  currentWeather.className = "current-weather";

  const currentCity = document.createElement("h1");
  currentCity.className = "current-weather__city";
  currentCity.textContent = city;

  const currentTemperature = document.createElement("span");
  currentTemperature.className = "current-weather__temperature";
  currentTemperature.textContent = `${temperature.average} ${temperatureSymbol}`;

  currentWeather.append(currentCity, currentTemperature);
  return currentWeather;
}
