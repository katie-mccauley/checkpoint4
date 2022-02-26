export class Weather {

  constructor(data) {
    this.temp = data.main.temp
    this.city = data.name

  }

  get Template() {
    return `<h2>${this.temp}</h2>`
  }
}