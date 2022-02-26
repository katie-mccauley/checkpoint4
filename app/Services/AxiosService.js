// @ts-ignore
export const imageApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timout: 5000
})

// @ts-ignore
export const quoteApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 5000
})

// @ts-ignore
export const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 5000
})

// @ts-ignore
export const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/katie/todos',
  timeout: 5000
})