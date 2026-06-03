import "./style.css";
import { getWeathersByCity } from "./utils/api";

const weather = getWeathersByCity("Kutai Kartanegara").then((data) =>
  console.log(data),
);
