import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

async function _getImage() {
  try {
    await imagesService._getImage()
  } catch (error) {
    console.error(error)
  }
}

function _drawImageInfo() {
  document.getElementById("weather-creds").innerHTML = ProxyState.images.Template
}

function twelveHour(x) {
  if (x > 12) {
    return x = x - 12
  } else if (x == 0) {
    return x = 12
  } else {
    return x
  }
}


function _getTime() {

  const date = new Date()
  const hour = twelveHour(date.getHours())
  const min = ("0" + date.getMinutes()).slice(-2)



  document.getElementById("time").innerHTML = `${hour}:${min}`

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
    ProxyState.on("images", _drawImageInfo)

  }
}