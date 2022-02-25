const API_KEY = process.env.REACT_APP_API_KEY
export const API_URL = (searchValue) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}`
