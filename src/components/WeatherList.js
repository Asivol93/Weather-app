import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'
// const now = new Date()

const WeatherSection = styled.section`
  width: 90%;
  height: 500px;
  border: 1px solid black;
`

export const WeatherList = ({ location, error, errorForcast }) => {
  return (
    <WeatherSection>
      <h1>Weather app</h1>
      {error && <p>No location found...</p>}
      {location.map((location) => (
        <div key={location.id}>
          <h1>{location.name}</h1>
          <h2>{location.weather[0].main}</h2>
          <p>Temperature now {Math.floor(location.main.temp - 273.15)} C</p>
          <p>Min temperature {Math.floor(location.main.temp_min - 273.15)} C</p>
          <p>Max temperature {Math.floor(location.main.temp_max - 273.15)} C</p>
          <p>Wind {location.wind.speed} m/s</p>
          <p>Humidity {location.main.humidity}%</p>
          <p>Sunrise {dateFormat(location.sys.sunrise, 'UTC:h:MM:ss TT Z')}</p>
          <p>Sunset {dateFormat(location.sys.sunset, 'UTC:h:MM:ss TT Z')}</p>
        </div>
      ))}
    </WeatherSection>
  )
}
