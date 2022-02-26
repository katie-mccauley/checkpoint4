import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeathersService.js";


async function _getWeather() {
  try {
    await weatherService.getWeather()
  } catch (error) {
    console.error(error)
  }
}

function _drawWeather() {
  let weather = ProxyState.weather
  document.getElementById("weather").innerHTML = weather.Template
}
export class WeathersController {
  constructor() {
    console.log("this is weathers controller");
    _getWeather()
    ProxyState.on("weather", _drawWeather)
  }
}