import React, { useState } from 'react'
import { FORCASTED_WEATHER_URL } from '../utils/url'
import dateFormat from 'dateformat'

export const ForcastedList = ({ searchValue, setSearchValue }) => {
  const [forcast, setForcast] = useState([])
  const [error, setError] = useState('')

  const isNewForcast = (forcastId) => {
    const duplicate = forcast.filter((item) => item.id === forcastId)
    return duplicate.length === 0
  }

  const onForcastSubmit = (event) => {
    event.preventDefault()
    setError('')

    const options = {
      method: 'GET',
    }

    fetch(FORCASTED_WEATHER_URL(searchValue), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200 && isNewForcast(data.id)) {
          setForcast([data, ...forcast])
        } else if (data.cod === '404') {
          setError(data.message)
        } else {
          console.log(data)
        }
      })
    setSearchValue('')
  }

  return (
    <div>
      <h1>Forcast</h1>

      {error && <p>No location found...</p>}
      {forcast.map((location) => (
        <div key={location.id}>
          <h1>{location.list[0].dt}</h1>
          <h2>{location.list[0].weather.main}</h2>
          <p>Temperature {Math.floor(location.list[0].main.temp - 273.15)} C</p>
          <p>
            Min temperature
            {Math.floor(location.list[0].main.temp_min - 273.15)} C
          </p>
          <p>
            Max temperature
            {Math.floor(location.list[0].main.temp_max - 273.15)} C
          </p>
          <p>Wind {location.list[0].main.humidity} m/s</p>
          <p>Humidity {location.list[0].wind.speed}%</p>
          <p>Sunrise {dateFormat(location.sys.sunrise, 'UTC:h:MM:ss TT Z')}</p>
          <p>Sunset {dateFormat(location.sys.sunset, 'UTC:h:MM:ss TT Z')}</p>
        </div>
      ))}
    </div>
  )
}
