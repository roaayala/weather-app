export function trimString(string) {
  return string.trim();
}

export function capitalizedFirstCharacter(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index === 0) {
        char = char.toUpperCase();
        return char;
      }
      return char;
    })
    .join("");
}

export function chooseWeatherIcon(icon) {
  const weatherIcon = {
    snow: "weather_snowy",
    rain: "rainy",
    fog: "foggy",
    wind: "air",
    cloudy: "cloud",
    "partly-cloudy-day": "partly_cloudy_day",
    "partly-cloudy-night": "partly_cloudy_night",
    "clear-day": "clear_day",
    "clear-night": "moon_stars",
  };

  return weatherIcon[`${icon}`];
}
