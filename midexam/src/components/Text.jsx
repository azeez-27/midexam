import React, { useState } from 'react'

const Text = ({ handleChange }) => {
  return (
    <>
      <label>Search By Name or Age </label>
      <input type='text' onChange={handleChange} />
    </>
  )
}

export default Text
