import React from 'react'

export const SearchBar = ({
  onLocationSubmit,
  searchValue,
  setSearchValue,
}) => {
  return (
    <form onSubmit={onLocationSubmit}>
      <label htmlFor='searchbar'>Location:</label>
      <input
        id='searchbar'
        type='text'
        placeholder='City'
        required
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}
