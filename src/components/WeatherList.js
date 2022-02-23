import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'

const WeatherSection = styled.section`
  width: 90%;
  height: 500px;
  border: 1px solid black;
`

export const WeatherList = () => {
  return (
    <WeatherSection>
      <h1>Weather app</h1>
      <SearchBar />
    </WeatherSection>
  )
}
