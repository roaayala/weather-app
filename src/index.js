import "./style.css";
import { getWeathers } from "./utils/api";

const weather = await getWeathers("Kutai Kartanegara");

console.log(weather);
