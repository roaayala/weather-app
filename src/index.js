import "./style.css";
import { getWeathers } from "./utils/api";

const form = document.getElementById("form");
const locationInput = document.getElementById("location");
const searchButton = document.getElementById("search");

locationInput.addEventListener("blur", (e) => {});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const trimmedLocation = locationInput.value.trim();
  const capitalizedFirstCharacter = trimmedLocation
    .split("")
    .map((char, index) => {
      if (index === 0) {
        char = char.toUpperCase();
        return char;
      }
      return char;
    })
    .join("");

  if (!capitalizedFirstCharacter) {
    return;
  }

  const weathersResult = await getWeathers(capitalizedFirstCharacter);

  locationInput.value = "";
  console.log(weathersResult);
});
