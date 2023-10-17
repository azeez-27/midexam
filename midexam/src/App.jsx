import React, { useState } from 'react'
import Table from './components/Table'
import sampleData from './Data'

const data = sampleData
// const [tableData, setTableData] = useState([])

const App = () => {
  return (
    <div>
      <Table data={data} />
    </div>
  )
}

export default App
