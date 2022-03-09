import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.form`
  margin-top: 20px;
  background-color: white;
  height: 30px;
  width: 220px;
  padding: 7px;
  border-radius: 20px;
  display: flex;
  input {
    border: none;
    text-transform: uppercase;
    outline: none;
  }
  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      height: 18px;
      width: 18px;
    }
  }
`

export const SearchBar = ({
  onLocationSubmit,
  searchValue,
  setSearchValue,
}) => {
  return (
    <SearchContainer onSubmit={onLocationSubmit}>
      <input
        id='searchbar'
        type='text'
        placeholder='Search by city'
        required
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type='submit'>
        <img src='https://img.icons8.com/ios-filled/50/000000/search--v1.png' />
      </button>
    </SearchContainer>
  )
}
