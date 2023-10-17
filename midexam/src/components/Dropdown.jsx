import React from 'react'

const Dropdown = ({ data }, { handleChange }) => {
  return (
    <select name='city' onChange={handleChange}>
      {data.map((obj) => {
        ;<option value={obj.city}>{obj}</option>
      })}
    </select>
  )
}

export default Dropdown
