import React, { FC } from "react"
import { Type } from "../containers/Table"

interface Props {
  selectedRow: Type
}

const RowDetails: FC<Props> = ({ selectedRow }) => {
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
