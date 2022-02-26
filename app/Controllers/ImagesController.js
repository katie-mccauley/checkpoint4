import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

async function _getImage() {
  try {
    await imagesService._getImage()
  } catch (error) {
    console.error(error)
  }
}

function _getTime() {

  const date = new Date()
  const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]

  document.getElementById("time").innerText = [hour, minutes, seconds].toString()

}


function _drawImage() {
  let image = ProxyState.images
  document.body.style.backgroundImage = `url(${image.imgUrl})`
}
export class ImagesController {
  constructor() {
    console.log("this is images controller");
    _getImage()
    let timeInterval = setInterval(_getTime, 1000)
    ProxyState.on("images", _drawImage)


  }
}