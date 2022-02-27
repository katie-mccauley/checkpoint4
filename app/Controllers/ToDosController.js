import { ProxyState } from "../AppState.js";
import { toDosService } from "../Services/ToDosService.js";
import { Pop } from "../Utils/Pop.js";


async function _getToDo() {
  try {
    toDosService._getToDo()
  } catch (error) {
    console.error(error)
  }
}


function _drawCompleted() {
  let completeCount = 0
  let totalComplete = ProxyState.toDo.length
  let template = ""
  ProxyState.toDo.forEach(t => {
    template += t.Template
    if (t.completed) {
      completeCount++
    }

  })
  document.getElementById("todos").innerHTML = template
  document.getElementById("completed").innerHTML = `<h4>To-Do's completed ${completeCount}/${totalComplete} </h4>`
}
export class ToDosController {
  constructor() {

    ProxyState.on('toDo', _drawCompleted)
    _getToDo()
  }

  async addToDo() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const rawData = {
        // @ts-ignore
        description: form.description.value
      }
      // @ts-ignore
      form.reset()
      await toDosService.addToDo(rawData)
    } catch (error) {
      console.error(error)
    }

  }

  async deleteToDo(id) {
    try {
      if (await Pop.confirm()) {
        await toDosService.deleteToDo(id)
      }
    } catch (error) {
      console.error(error)

    }
  }

  async completeToDo(id) {
    try {
      await toDosService.completeToDo(id)
    } catch (error) {
      console.error(error)
    }
  }


}