import React, { useState } from 'react'

const Text = ({ handleChange }) => {
  return <input type='text' onChange={handleChange} />
}

export default Text
