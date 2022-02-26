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

function _drawToDo() {
  let template = ""
  ProxyState.toDo.forEach(t => template += t.Template)
  document.getElementById("todos").innerHTML = template
  // document.getElementById("tasks").innerHTML = ProxyState.toDo.Template
}
export class ToDosController {
  constructor() {
    _getToDo()
    ProxyState.on("toDo", _drawToDo)

  }

  async addToDo() {
    try {
      window.event.preventDefault()
      const form = window.event.target

      const rawData = {
        // @ts-ignore
        description: form.description.value
      }

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


}