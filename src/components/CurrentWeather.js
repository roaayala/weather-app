export default function createCurrentWeather(weatherInfo = {}) {
  const { city, date, icon, conditions, chance, temperature } = weatherInfo;

  const currentWeather = document.createElement("div");
  currentWeather.className = "current-weather";

  const currentCity = document.createElement("h1");
  currentCity.className = "current-weather__city";
  currentCity.textContent = city;

  const currentTemperature = document.createElement("span");
  currentTemperature.className = "current-weather__temperature";
  currentTemperature.textContent = `${temperature.average} \u00B0C`;

  currentWeather.append(currentCity, currentTemperature);
  return currentWeather;
}

// celcius symbol \u00B0C
// fahrenheit symbol \u2109
