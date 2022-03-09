import React from 'react'
import styled from 'styled-components'
import { MainPage } from 'components/MainPage'

const OuterContainer = styled.div`
  background-color: #0b0c1e;
  width: 100%;
  height: auto;
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
