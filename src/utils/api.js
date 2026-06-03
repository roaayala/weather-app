const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "ASPW622R3TTXRNM9H95M2TSNF";

export const getWeathersByCity = async (city) => {
  const req = await fetch(`${URL}${city}?key=${API_KEY}`);
  try {
    const weathers = await req.json();
    return weathers;
  } catch (err) {
    throw new Error(err);
  }
};
