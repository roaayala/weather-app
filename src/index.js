import "./style.css";
import { getWeathersByCity } from "./utils/api";

const weather = getWeathersByCity("samarinda").then((data) =>
  console.log(data),
);
