import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'
import { WeatherConditions } from './Reusable/WeatherConditions'

const ForcastCard = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    width: 40px;
    height: 40px;
    /* filter: drop-shadow(0 0 2.5rem white); */
  }
  p {
    font-size: 12px;
  }
`

export const ForcastedList = ({ errorForcast, forcast }) => {
  // const filteredForcast = forcast.list.filter((item) =>
  //   item.dt_txt.includes('12:00')
  // )
  // console.log(filteredForcast)
  return (
    <div>
      <h1>Forcast</h1>

      {errorForcast && <p>No location found...</p>}
      {forcast.map((location) => (
        <ForcastCard key={location.dt}>
          <p>{dateFormat(location.dt * 1000, 'ddd')}</p>

          <p>{location.weather[0].main}</p>
          {/* <img src={WeatherConditions(location.weather[0].main)} /> */}
          <p>{Math.floor(location.main.temp - 273.15)} C</p>
          <p>{location.wind.speed} m/s</p>
          <p>Humidity {location.main.humidity}%</p>
        </ForcastCard>
      ))}
    </div>
  )
}
