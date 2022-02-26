import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/ToDosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";


class App {

  imagesController = new ImagesController()
  quotesController = new QuotesController()
  weathersController = new WeathersController()

  todosController = new ToDosController()
}

window["app"] = new App();
