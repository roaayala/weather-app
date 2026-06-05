import "./style.css";
import { getWeathers } from "./utils/api";
import { capitalizedFirstCharacter, trimString } from "./utils/helper";

const form = document.getElementById("form");
const locationInput = document.getElementById("location");

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
  } catch (err) {
    if (err.message === "400") {
      console.log(
        `Location not found, are you sure ${filteredSearchTerm} is right location?`,
      );

      locationInput.value = "";
    }
  }

  locationInput.value = "";
});
