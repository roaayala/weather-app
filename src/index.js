import "./style.css";
import { getWeathers } from "./utils/api";
import { capitalizedFirstCharacter, trimString } from "./utils/helper";
import createCurrentWeather from "./components/CurrentWeather";
import createErrorMessage from "./components/ErrorMessage";
import createLoading from "./components/Loading";

const form = document.getElementById("form");
const locationInput = document.getElementById("location");
const appContainer = document.getElementById("app");

const resetLocationInput = () => {
  locationInput.value = "";
};

const clearAppContainer = () => {
  appContainer.innerHTML = "";
  resetLocationInput();
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const trimmedSearchTerm = trimString(locationInput.value);

  const filteredSearchTerm = capitalizedFirstCharacter(trimmedSearchTerm);

  if (!filteredSearchTerm) {
    return;
  }

  // loading
  //
  const loading = createLoading();
  clearAppContainer();
  appContainer.append(loading);

  try {
    const weathersResult = await getWeathers(filteredSearchTerm);

    const currentWeatherInfo = weathersResult.forecasts[0];
    const currentWeather = createCurrentWeather(currentWeatherInfo);

    clearAppContainer();

    appContainer.append(currentWeather);
  } catch (err) {
    if (err.message === "400") {
      const errorMessage = createErrorMessage({
        icon: "not_listed_location",
        message: `Location not found, are you sure ${filteredSearchTerm} is valid location?`,
      });

      clearAppContainer();

      appContainer.append(errorMessage);
    }
  }
});
