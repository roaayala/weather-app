import { createForecast } from "../models/Weather";

const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "ASPW622R3TTXRNM9H95M2TSNF";

export const getWeathers = async (city) => {
  const url = `${URL}${city}/next6days?unitGroup=metric&iconSet=icons1&key=${API_KEY}`;

  try {
    const req = await fetch(url);

    if (!req.ok) {
      throw new Error(`HTTP error: ${req.status}!`);
    }

    const res = await req.json();

    const data = createForecast(res);
    return data;
  } catch (err) {
    throw err;
  }
};
