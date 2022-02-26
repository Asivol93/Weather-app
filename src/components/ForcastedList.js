import React from 'react'
import dateFormat from 'dateformat'

export const ForcastedList = ({ errorForcast, forcast }) => {
  return (
    <div>
      <h1>Forcast</h1>

      {errorForcast && <p>No location found...</p>}
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
