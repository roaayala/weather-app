export function WeatherInfo(address, data = {}) {
  const city = address;

  const conditions = data.conditions;

  const icon = data.icon;

  const date = data.datetime;

  const chance = data.precipprob;

  const temperaturs = {
    average: data.temp,
    min: data.tempmin,
    max: data.tempmax,
  };

  return {};
}
