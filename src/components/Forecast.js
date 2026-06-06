import { chooseWeatherIcon, setUnitGroup } from "../utils/helper";
import createIcon from "./Icon";

export default function createForecast(isMetric, weathersResult) {
  console.log(weathersResult);
  const { description, forecasts } = weathersResult;
  const forecastsContainer = document.createElement("div");
  forecastsContainer.className = "forecasts";

  // header
  const forecastsHeader = document.createElement("header");
  forecastsHeader.className = "forecasts-header";

  const forecastsHeaderTitle = document.createElement("h2");
  forecastsHeaderTitle.className = "forecasts-header__title";
  forecastsHeaderTitle.textContent = description;

  forecastsHeader.append(forecastsHeaderTitle);

  // main
  const forecastsMain = document.createElement("main");
  forecastsMain.className = "forecasts-main";

  forecasts.forEach((forecast) => {
    const forecastsItem = document.createElement("div");
    forecastsItem.className = "forecasts-item";

    const forecatsItemDate = document.createElement("span");
    forecatsItemDate.className = "forecasts-item__date";
    forecatsItemDate.textContent = forecast.date;

    const forecastsItemIcon = createIcon(chooseWeatherIcon(forecast.icon));

    const forecastsItemTemperatures = document.createElement("div");
    forecastsItemTemperatures.className = "forecasts-item__temperatures";

    const forecastsItemMinTemperature = document.createElement("span");
    forecastsItemMinTemperature.className = "forecasts-item__temperature";
    forecastsItemMinTemperature.textContent = `L: ${forecast.temperature.min} ${setUnitGroup(isMetric)}`;

    const forecastsItemMaxTemperature = document.createElement("span");
    forecastsItemMaxTemperature.className = "forecasts-item__temperature";
    forecastsItemMaxTemperature.textContent = `H: ${forecast.temperature.max} ${setUnitGroup(isMetric)}`;

    forecastsItemTemperatures.append(
      forecastsItemMinTemperature,
      forecastsItemMaxTemperature,
    );

    forecastsItem.append(
      forecatsItemDate,
      forecastsItemIcon,
      forecastsItemTemperatures,
    );

    forecastsMain.append(forecastsItem);
  });

  forecastsContainer.append(forecastsHeader, forecastsMain);

  return forecastsContainer;
}
