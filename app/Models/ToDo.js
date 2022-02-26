export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
  }

  get Template() {
    return `
    <input type="checkbox" class="btn-check" id="btncheck1">
    `
  }
}