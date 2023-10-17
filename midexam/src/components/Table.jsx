import React from 'react'

const Table = (props) => {
  let data = props.data

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
          </tr>
        </thead>

        <tbody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
                <td>{obj.city}</td>
                <td>{obj.occupation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
