import { chooseWeatherIcon } from "../utils/helper";
import createIcon from "./Icon";

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

  const currentConditions = document.createElement("div");
  currentConditions.className = "current-weather__conditions";

  const currentConditionsIcon = createIcon(chooseWeatherIcon(icon));

  const currentConditionsText = document.createElement("p");
  currentConditionsText.className = "current-weather__conditions";
  currentConditionsText.textContent = conditions;

  currentConditions.append(currentConditionsIcon, currentConditionsText);

  currentWeather.append(currentCity, currentTemperature, currentConditions);
  return currentWeather;
}
