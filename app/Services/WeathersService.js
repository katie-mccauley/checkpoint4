import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { todoApi, weatherApi } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    let weather = ProxyState.weather
    const res = await weatherApi.get()
    console.log("this is weather data", res.data);
    res.data.main.temp = (((res.data.main.temp - 273) * (9 / 5)) + 32).toFixed(0)
    ProxyState.weather = new Weather(res.data)
  }
  constructor() {
    console.log("this is weathers service");
  }
}

export const weatherService = new WeathersService()