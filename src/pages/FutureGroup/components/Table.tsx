import React from "react"

interface Table {
  data: Array<Type>
  sortByField: (sortField: string) => void
  sortField: { field: string; type: string }
  onSelectRow: (item: any) => void
}

interface Type {
  id: number
  firstName: string
  lastName: string
  "      email": string
  phone: string
}

const Table: React.FC<Table> = ({ data, sortByField, sortField, onSelectRow }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={() => {
              sortByField("id")
            }}
          >
            ID <small>{sortField.field === "id" ? sortField.type : ""}</small>
          </th>
          <th
            onClick={() => {
              sortByField("firstName")
            }}
          >
            First name <small>{sortField.field === "firstName" ? sortField.type : ""}</small>
          </th>
          <th
            onClick={() => {
              sortByField("lastName")
            }}
          >
            Last name <small>{sortField.field === "lastName" ? sortField.type : ""}</small>
          </th>
          <th
            onClick={() => {
              sortByField("      email")
            }}
          >
            E-mail <small>{sortField.field === "      email" ? sortField.type : ""}</small>
          </th>
          <th
            onClick={() => {
              sortByField("phone")
            }}
          >
            Phone <small>{sortField.field === "phone" ? sortField.type : ""}</small>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id + item.phone}>
            <th onClick={onSelectRow.bind(null, item)}>{item.id}</th>
            <th onClick={onSelectRow.bind(null, item)}>{item.firstName}</th>
            <th onClick={onSelectRow.bind(null, item)}>{item.lastName}</th>
            <th onClick={onSelectRow.bind(null, item)}>{item["      email"]}</th>
            <th onClick={onSelectRow.bind(null, item)}>{item.phone}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
