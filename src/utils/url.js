const API_KEY = process.env.REACT_APP_API_KEY
export const CURRENT_WEATHER_URL = (searchValue) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}`

export const FORCASTED_WEATHER_URL = (searchValue) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=${API_KEY}`
