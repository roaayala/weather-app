export default function createCurrentWeather(weatherInfo = {}) {
  const { city, date, icon, conditions, chance, temperature } = weatherInfo;

  const currentWeather = document.createElement("div");
  currentWeather.className = "current-weather";

  const currentCity = document.createElement("h1");
  currentCity.className = "current-weather__city";
  currentCity.textContent = city;

  currentWeather.append(currentCity);
  return currentWeather;
}
