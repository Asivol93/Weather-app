import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { ForcastedList } from './ForcastedList'
import { CURRENT_WEATHER_URL } from '../utils/url'
import dateFormat from 'dateformat'
// const now = new Date()

const WeatherSection = styled.section`
  width: 90%;
  height: 500px;
  border: 1px solid black;
`

export const WeatherList = () => {
  const [location, setLocation] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')

  const isNewLocation = (locationId) => {
    const duplicate = location.filter((item) => item.id === locationId)
    return duplicate.length === 0
  }

  const onLocationSubmit = (event) => {
    event.preventDefault()
    setError('')

    const options = {
      method: 'GET',
    }

    fetch(CURRENT_WEATHER_URL(searchValue), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200 && isNewLocation(data.id)) {
          setLocation([data, ...location])
        } else if (data.cod === '404') {
          setError(data.message)
        } else {
          console.log(data)
        }
      })
    setSearchValue('')
  }

  return (
    <WeatherSection>
      <h1>Weather app</h1>
      <SearchBar
        onLocationSubmit={onLocationSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
      <ForcastedList
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </WeatherSection>
  )
}
