import React from 'react'
import styled from 'styled-components'
import dateFormat from 'dateformat'
import { WeatherConditions } from './Reusable/WeatherConditions'
import { WiSunrise, WiSunset, WiStrongWind, WiHumidity } from 'react-icons/wi'

const WeatherSection = styled.section`
  margin-top: 40px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    filter: drop-shadow(0 0 2.5rem white);
  }
`
const WeatherOverview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WeatherList = ({ location, error, errorForcast }) => {
  return (
    <WeatherSection>
      {error && <p>No location found...</p>}
      {location.map((location) => (
        <WeatherOverview
          key={location.id}
          // className={WeatherConditions(
          //   location.main.temp,
          //   location.weather[0].main
          // )}
        >
          <h1>{location.name}</h1>
          <img src={WeatherConditions(location.weather[0].main)} />
          <h2>{location.weather[0].main}</h2>
          <DetailsContainer>
            <TempWrapper>
              <p>Temperature now {Math.floor(location.main.temp - 273.15)} C</p>
              <p>Min {Math.floor(location.main.temp_min - 273.15)} C</p>
              <p>Max {Math.floor(location.main.temp_max - 273.15)} C</p>
            </TempWrapper>
            <div>
              <WiStrongWind color='#fff' size={40} />
              <p>{location.wind.speed} m/s</p>
            </div>
            <div>
              <WiHumidity color='#fff' size={40} />
              <p> {location.main.humidity}%</p>
            </div>
            <div>
              <WiSunrise color='#fff' size={40} />
              <p>
                Sunrise {dateFormat(location.sys.sunrise, 'UTC:h:MM:ss TT Z')}
              </p>

              <WiSunset color='#fff' size={40} />
              <p>
                Sunset {dateFormat(location.sys.sunset, 'UTC:h:MM:ss TT Z')}
              </p>
            </div>
          </DetailsContainer>
        </WeatherOverview>
      ))}
    </WeatherSection>
  )
}
