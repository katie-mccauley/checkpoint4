import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

async function _getQuote() {
  try {
    await quotesService.getQuote()
  } catch (error) {
    console.error(error)
  }
}

function _drawQuote() {
  document.getElementById("quote").innerHTML = ProxyState.quotes.Template
}
export class QuotesController {
  constructor() {
    _getQuote()
    ProxyState.on("quotes", _drawQuote)


  }
}