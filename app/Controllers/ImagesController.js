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
  const [hour, minutes] = [date.getHours(), date.getMinutes()]

  // @ts-ignore
  document.getElementById("time").innerText = [hour > 12 ? hour - 12 : hour, minutes].toString()

}


function _drawImage() {
  let image = ProxyState.images
  document.body.style.backgroundImage = `url(${image.largeImgUrl})`
}
export class ImagesController {
  constructor() {
    console.log("this is images controller");
    _getImage()
    let timeInterval = setInterval(_getTime, 1000)
    ProxyState.on("images", _drawImage)


  }
}