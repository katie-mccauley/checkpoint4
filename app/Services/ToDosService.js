import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { todoApi } from "./AxiosService.js";

class ToDosService {
  async completeToDo(id) {

    let complete = ProxyState.toDo.find(td => td.id === id)
    complete.completed = !complete.completed
    const res = await todoApi.put(id, complete)
    console.log("complete to do", res.data);
    this._getToDo()
    // ProxyState.toDo = ProxyState.toDo.map(td => {
    //   if (td.id === id) {
    //     td.completed = !td.completed
    //   }
    //   return td
    // })
  }
  async deleteToDo(id) {
    const res = await todoApi.delete(id)
    ProxyState.toDo = ProxyState.toDo.filter(d => d.id !== id)
  }
  async addToDo(rawData) {
    const res = await todoApi.post('', rawData)
    console.log("raw data", res.data);
    ProxyState.toDo = [...ProxyState.toDo, new ToDo(res.data)]
  }
  async _getToDo() {
    const res = await todoApi.get()
    console.log("this is get to do res", res)
    ProxyState.toDo = res.data.map(d => new ToDo(d))
  }
  constructor() {

  }
}

export const toDosService = new ToDosService()