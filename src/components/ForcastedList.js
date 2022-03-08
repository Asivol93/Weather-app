import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'

const ForcastCard = styled.div`
  border: 2px solid black;
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
          <p>{dateFormat(location.dt * 1000, 'dddd')}</p>
          <p>{location.weather[0].main}</p>
          <p>{Math.floor(location.main.temp - 273.15)} C</p>
          <p>Wind {location.wind.speed} m/s</p>
          <p>Humidity {location.main.humidity}%</p>
        </ForcastCard>
      ))}
    </div>
  )
}
