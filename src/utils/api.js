const URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_KEY = "ASPW622R3TTXRNM9H95M2TSNF";

export const getWeathers = async (city) => {
  const url = `${URL}${city}/next6days?unitGroup=metric&iconSet=icons1&key=${API_KEY}`;
  const req = await fetch(url);

  try {
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};
