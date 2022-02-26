import { Image } from "./Models/Image.js"
import { Quote } from "./Models/Quote.js"
import { ToDo } from "./Models/ToDo.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {


  /** @type {import('./Models/Image').Image} */
  images = null

  /** @type {import('./Models/Quote').Quote} */
  quotes = null

  /** @type {import('./Models/ToDo').ToDo[]} */
  toDo = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
