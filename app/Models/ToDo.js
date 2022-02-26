export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed.default
    this.description = data.description
    this.user = data.user
  }

  get Template() {
    return `
    <div class="mb-3 form-check" >
      <input type="checkbox" class="form-check-input" id="exampleCheck1" onchange="app.todosController.completeToDo('${this.id}')" ${this.completed ? 'completed' : ''}>
      <label class="form-check-label" for="exampleCheck1">${this.description}</label>
      <i class="mdi mdi-delete selectable" title="delete todo" onclick="app.todosController.deleteToDo('${this.id}')"></i>
    </div>
    `
  }
}