export function createWeather(city, data = {}) {
  const { conditions, icon, datetime: date, precipprob: chance } = data;

  const temperature = {
    average: data.temp,
    min: data.tempmin,
    max: data.tempmax,
  };

  return { city, conditions, icon, date, chance, temperature };
}

export function createForecast(data = {}) {
  const { address: city, description, days } = data;

  const forecasts = days.map((day) => createWeather(city, day));

  return { city, description, forecasts };
}
