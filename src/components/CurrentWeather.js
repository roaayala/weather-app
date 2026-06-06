import { chooseWeatherIcon, setUnitGroup } from "../utils/helper";
import createIcon from "./Icon";

export default function createCurrentWeather(isMetric, weatherInfo = {}) {
  const { city, icon, conditions, temperature } = weatherInfo;

  const temperatureSymbol = setUnitGroup(isMetric);

  const currentWeather = document.createElement("div");
  currentWeather.className = "current-weather";

  const currentCity = document.createElement("h1");
  currentCity.className = "current-weather__city";
  currentCity.textContent = city;

  const currentAverageTemperature = document.createElement("span");
  currentAverageTemperature.className = "current-weather__average-temperature";
  currentAverageTemperature.textContent = `${temperature.average} ${temperatureSymbol}`;

  const currentConditions = document.createElement("div");
  currentConditions.className = "current-weather__conditions";

  const currentConditionsIcon = createIcon(chooseWeatherIcon(icon));

  const currentConditionsText = document.createElement("p");
  currentConditionsText.className = "current-weather__conditions-text";
  currentConditionsText.textContent = conditions;

  currentConditions.append(currentConditionsIcon, currentConditionsText);

  const currentMinMaxTemperature = document.createElement("div");
  currentMinMaxTemperature.className = "current-weather__min-max-temperature";

  const currentMinTemperature = document.createElement("span");
  currentMinTemperature.className = "current-weather__min-temperature";
  currentMinTemperature.textContent = `L: ${temperature.min} ${temperatureSymbol}`;

  const currentMaxTemperature = document.createElement("span");
  currentMaxTemperature.className = "current-weather__max-temperature";
  currentMaxTemperature.textContent = `H: ${temperature.max} ${temperatureSymbol}`;

  currentMinMaxTemperature.append(currentMinTemperature, currentMaxTemperature);

  currentWeather.append(
    currentCity,
    currentAverageTemperature,
    currentMinMaxTemperature,
    currentConditions,
  );
  return currentWeather;
}
