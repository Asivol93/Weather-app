import React from 'react'
import styled from 'styled-components'
import { MainPage } from 'components/MainPage'

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
      <MainPage />
    </OuterContainer>
  )
}
