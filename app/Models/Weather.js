import { WeathersController } from "../Controllers/WeathersController.js"
export class Weather {

  constructor(data) {
    this.temp = data.main.temp
    this.city = data.name
    this.isFarenheit = false


  }

  get Template() {
    return `
    <h2>Temperature ${this.isFarenheit ? this.TempF + "&deg;F" : this.TempC + "&deg;C"} | ${this.city}</h2>
    `
  }

  get TempF() {
    return (((this.temp - 273) * (9 / 5)) + 32).toFixed(0)
  }

  get TempC() {
    return (this.temp - 273.15).toFixed(0)
  }
}