import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { imageApi } from "./AxiosService.js"


class ImagesService {
  async _getImage() {
    const res = await imageApi.get()
    ProxyState.images = new Image(res.data)
  }


}

export const imagesService = new ImagesService()