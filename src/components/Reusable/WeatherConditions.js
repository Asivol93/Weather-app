export const WeatherConditions = (weather) => {
  if (weather === 'Clouds') {
    return 'https://cdn-icons-png.flaticon.com/512/1146/1146881.png'
  } else if (weather === 'Rain' || weather === 'Drizzle') {
    return 'https://cdn-icons-png.flaticon.com/512/1146/1146858.png'
  } else if (weather === 'Snow') {
    return 'https://cdn-icons-png.flaticon.com/512/1146/1146899.png'
  } else if (weather === 'Clear') {
    return 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
  } else if (weather === 'Thunderstorm') {
    return 'https://cdn-icons-png.flaticon.com/512/1146/1146865.png'
  } else {
    return 'https://cdn-icons-png.flaticon.com/512/1146/1146881.png'
  }
}
