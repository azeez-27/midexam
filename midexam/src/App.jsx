import React, { useState } from 'react'
import Table from './components/Table'
import sampleData from './Data'
import Text from './components/Text'
import Dropdown from './components/Dropdown'

const App = () => {
  const data = sampleData
  const [tableData, setTableData] = useState(sampleData)

  function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
  }

  function filterByNameandAge(e) {
    const val = e.target.value

    setTableData(
      data.filter((user) => {
        console.log(user.name.toLowerCase())
        return (
          user.name.toLowerCase().includes(val.toLowerCase()) ||
          user.age.toString().includes(val)
        )
      })
    )
  }

  function filterByCityandOcc() {}

  return (
    <div>
      <Text handleChange={filterByNameandAge} />
      <Dropdown data={data} handleChange={filterByCityandOcc} />
      <Table data={tableData} />
    </div>
  )
}

export default App
