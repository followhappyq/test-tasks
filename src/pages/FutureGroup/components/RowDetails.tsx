import React from "react"

interface Props {
  selectedRow: {
    id: number
    firstName: string
    lastName: string
    "      email": string
    phone: string
    description?: string
    address?: {
      city: string
      state: string
      streetAddress: string
      zip: string
    }
  }
}

const RowDetails: React.FC<Props> = ({ selectedRow }) => {
  return (
    <div>
      <p>
        Current user <b>{selectedRow.firstName + " " + selectedRow.lastName}</b>
      </p>
      <p>
        Description:
        <textarea defaultValue={selectedRow.description} />
      </p>
      <p>
        Address: <b>{selectedRow.address?.streetAddress}</b>
      </p>
      <p>
        City: <b>{selectedRow.address?.city}</b>
      </p>
      <p>
        Province/State: <b>{selectedRow.address?.state}</b>
      </p>
      <p>
        ZIP: <b>{selectedRow.address?.zip}</b>
      </p>
    </div>
  )
}

export default RowDetails
