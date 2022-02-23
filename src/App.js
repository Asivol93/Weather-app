import React from 'react'
import styled from 'styled-components'
import { WeatherList } from 'components/WeatherList'

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const App = () => {
  return (
    <OuterContainer>
      <WeatherList />
    </OuterContainer>
  )
}
