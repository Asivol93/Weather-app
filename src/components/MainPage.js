import React, { useState } from 'react'
import { WeatherList } from './WeatherList'
import { ForcastedList } from './ForcastedList'
import { SearchBar } from './SearchBar'
import { CURRENT_WEATHER_URL, FORCASTED_WEATHER_URL } from 'utils/url'

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

  const isNewForcast = (forcastId) => {
    const duplicate = forcast.filter((item) => item.city.id === forcastId)
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
          setLocation([data, ...location])
          // } else if (data.cod === '404') {
          //   setError(data.message)
        } else {
          console.log(data)
          setError(data.message)
        }
      })
    setSearchValue('')

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
    <div>
      <SearchBar
        onLocationSubmit={onLocationSubmit}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <WeatherList error={error} location={location} />
      <ForcastedList errorForcast={errorForcast} forcast={forcast} />
    </div>
  )
}
