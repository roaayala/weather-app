import createErrorMessage from "./components/ErrorMessage";
import "./style.css";
import { getWeathers } from "./utils/api";
import { capitalizedFirstCharacter, trimString } from "./utils/helper";

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

  try {
    const weathersResult = await getWeathers(filteredSearchTerm);
    console.log(weathersResult);
    clearAppContainer();
  } catch (err) {
    if (err.message === "400") {
      const errorMessage = createErrorMessage(
        `Location not found, are you sure ${filteredSearchTerm} is valid location?`,
      );

      clearAppContainer();

      appContainer.append(errorMessage);
    }
  }
});
