import { ProxyState } from "../AppState.js"

export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
  }

  get Template() {
    return `
    <div class="mb-3 form-check" >
      <input type="checkbox" class="form-check-input" id="exampleCheck1" onclick="app.todosController.completeToDo('${this.id}')" 
      ${this.completed ? 'checked' : ''}>
      <label class="form-check-label" for="exampleCheck1">${this.description}</label>
      <i class="mdi mdi-delete selectable" title="delete todo" onclick="app.todosController.deleteToDo('${this.id}')"></i>
    </div>
    `
  }

  // get completedTemplate() {
  //   return `<h3>${this.finished}</h3>`
  // }
  // get finished() {

  //   const finishedTotal = ProxyState.toDo.length
  //   const completed = ProxyState.toDo.filter(td => td.completed)
  //   const completedToDo = completed.length

  // return `${completedToDo}/${finishedTotal}`
  // }
}