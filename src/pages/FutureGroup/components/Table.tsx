import React from "react"

interface Table {
  data: Array<Type>
  sortByField: (sortField: string) => void
}

interface Type {
  id: number
  firstName: string
  lastName: string
  "      email": string
  phone: string
}

const Table: React.FC<Table> = ({ data, sortByField }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={() => {
              sortByField("id")
            }}
          >
            ID
          </th>
          <th
            onClick={() => {
              sortByField("firstName")
            }}
          >
            First name
          </th>
          <th
            onClick={() => {
              sortByField("lastName")
            }}
          >
            Last name
          </th>
          <th
            onClick={() => {
              sortByField("      email")
            }}
          >
            E-mail
          </th>
          <th
            onClick={() => {
              sortByField("phone")
            }}
          >
            Phone
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id + item.phone}>
            <th>{item.id}</th>
            <th>{item.firstName}</th>
            <th>{item.lastName}</th>
            <th>{item["      email"]}</th>
            <th>{item.phone}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
