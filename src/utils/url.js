const API_KEY = 'da4ce88f43bcb670fa90bad02541759e'
export const API_URL = (slug) =>
  `api.openweathermap.org/data/2.5/weather?q=${slug}&appid=${API_KEY}`
