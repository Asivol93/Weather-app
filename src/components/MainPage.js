import React, { useState } from 'react'
import styled from 'styled-components'
import { WeatherList } from './WeatherList'
import { ForcastedList } from './ForcastedList'
import { SearchBar } from './SearchBar'
import { CURRENT_WEATHER_URL, FORCASTED_WEATHER_URL } from 'utils/url'

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p,
  h1,
  h2 {
    color: #fff;
  }
`

export const MainPage = () => {
  const [location, setLocation] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')
  const [forcast, setForcast] = useState([])
  const [errorForcast, setErrorForcast] = useState('')

  const isNewLocation = (locationId) => {
    const duplicate = location.filter((item) => item.id === locationId)
    return duplicate.length === 0
  }

  const onLocationSubmit = (event) => {
    event.preventDefault()
    setError('')
    setErrorForcast('')

    const options = {
      method: 'GET',
    }

    fetch(CURRENT_WEATHER_URL(searchValue), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200 && isNewLocation(data.id)) {
          setLocation([data])
          // } else if (data.cod === '404') {
          //   setError(data.message)
        } else {
          console.log(data)
          setError(data.message)
        }
      })

    fetch(FORCASTED_WEATHER_URL(searchValue), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '200') {
          const filteredForcast = data.list.filter((item) =>
            item.dt_txt.includes('12:00')
          )
          setForcast(filteredForcast)
          console.log(data)
          console.log(filteredForcast)
          // } else if (data.cod === '404') {
          //   setErrorForcast(data.message)
        } else {
          setErrorForcast(data.message)
          console.log(data)
        }
      })
    setSearchValue('')
  }
  return (
    <MainWrapper>
      <SearchBar
        onLocationSubmit={onLocationSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <WeatherList error={error} location={location} />
      <ForcastedList errorForcast={errorForcast} forcast={forcast} />
    </MainWrapper>
  )
}
