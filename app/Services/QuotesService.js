import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteApi } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    const res = await quoteApi.get()
    console.log("this is quote data", res.data)
    ProxyState.quotes = new Quote(res.data)
  }
  constructor() {
    console.log("this is quotes service");
  }
}

export const quotesService = new QuotesService()