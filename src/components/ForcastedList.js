import React from 'react'
import dateFormat from 'dateformat'

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
        <div key={location.dt}>
          {/* {location.list.map((date) => (
            <>
              <p>{date.dt}</p>
            </>
          ))} */}
          <p>{location.dt}</p>
        </div>
      ))}
    </div>
  )
}
