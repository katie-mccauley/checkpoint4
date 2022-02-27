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
  let div = document.getElementById("weather")
  div.innerHTML = weather.Template
  div.onclick = _changeType
}
function _changeType() {
  ProxyState.weather.isFarenheit = !ProxyState.weather.isFarenheit
  _drawWeather()
}
export class WeathersController {
  constructor() {
    console.log("this is weathers controller");
    _getWeather()
    ProxyState.on("weather", _drawWeather)
  }


}