const API_KEY = process.env.REACT_APP_API_KEY
export const API_URL = (slug) =>
  `api.openweathermap.org/data/2.5/weather?q=${slug}&appid=${API_KEY}`
