import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'
import { WeatherConditions } from './Reusable/WeatherConditions'
// const now = new Date()

const WeatherSection = styled.section`
  /* width: 90%; */
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    filter: drop-shadow(0 0 2.5rem white);
  }
`
const WeatherOverview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
  }
`

export const WeatherList = ({ location, error, errorForcast }) => {
  return (
    <WeatherSection>
      {error && <p>No location found...</p>}
      {location.map((location) => (
        <WeatherOverview
          key={location.id}
          // className={WeatherConditions(
          //   location.main.temp,
          //   location.weather[0].main
          // )}
        >
          <h1>{location.name}</h1>
          <img src={WeatherConditions(location.weather[0].main)} />

          <h2>{location.weather[0].main}</h2>
          <p>Temperature now {Math.floor(location.main.temp - 273.15)} C</p>
          <p>Min {Math.floor(location.main.temp_min - 273.15)} C</p>
          <p>Max {Math.floor(location.main.temp_max - 273.15)} C</p>
          <p>Wind {location.wind.speed} m/s</p>
          <p>Humidity {location.main.humidity}%</p>
          <p>Sunrise {dateFormat(location.sys.sunrise, 'UTC:h:MM:ss TT Z')}</p>
          <p>Sunset {dateFormat(location.sys.sunset, 'UTC:h:MM:ss TT Z')}</p>
        </WeatherOverview>
      ))}
    </WeatherSection>
  )
}
