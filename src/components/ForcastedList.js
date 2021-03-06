import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'
import { WeatherConditions } from './Reusable/WeatherConditions'

const ForcastSection = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  /* justify-content: center; */
  /* align-items: center; */

  h1 {
    align-self: center;
  }
`

const ForcastCard = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px;

  img {
    width: 40px;
    height: 40px;
    /* filter: drop-shadow(0 0 2.5rem white); */
  }
  p {
    font-size: 12px;
    width: 25%;
  }
`

export const ForcastedList = ({ errorForcast, forcast }) => {
  // const filteredForcast = forcast.list.filter((item) =>
  //   item.dt_txt.includes('12:00')
  // )
  // console.log(filteredForcast)
  return (
    <ForcastSection>
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
    </ForcastSection>
  )
}
