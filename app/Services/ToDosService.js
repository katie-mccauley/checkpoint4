import { ProxyState } from "../AppState.js";
import { ToDo } from "../Models/ToDo.js";
import { todoApi } from "./AxiosService.js";

class ToDosService {
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
    console.log("thi si the to dos service");
  }
}

export const toDosService = new ToDosService()