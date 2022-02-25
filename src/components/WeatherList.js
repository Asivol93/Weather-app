import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { API_URL } from '../utils/url'

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

    fetch(API_URL(searchValue), options)
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
          <p>{location.name}</p>
          <p>{location.weather[0].main}</p>
          <p>{location.main.temp}</p>
        </div>
      ))}
    </WeatherSection>
  )
}
