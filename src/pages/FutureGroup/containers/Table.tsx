import React, { useEffect, useState } from "react"
import lodash, { isEmpty } from "lodash"

import { Table as BaseTable, RowDetails } from "../components"
import { Loader } from "../../../components"

interface Type {
  id: number
  firstName: string
  lastName: string
  "      email": string
  phone: string
  description?: string
  adress?: {}
}

interface SortFieldType {
  field: string
  type: string
}

const onFetchData = async (setShortData: any, setIsLoading: any, setOrderedData: any) => {
  await fetch(
    `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&
      email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  )
    .then((res) => res.json())
    .then((data) => {
      setShortData(data)
      setIsLoading(false)
      setOrderedData(data)
    })
    .catch(() => {
      console.log("Error")
    })
}

const Table = () => {
  const [shortData, setShortData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [type, setType] = useState("asc")
  const [orderedData, setOrderedData] = useState<Array<Type>>([])
  const [sortField, setSortField] = useState({ field: "", type: "" })
  const [selectedRow, setSelectedRow] = useState()

  const sortByField = (sortField: string) => {
    const unsortedData = shortData.concat()
    const orderedData = orderData(unsortedData, sortField)
    onOrderData(orderedData)
    setSortField({ field: sortField, type: type })
  }

  const onOrderData = (orderedData: Array<Type>) => {
    setOrderedData(orderedData)
  }

  const orderData = (unsortedData: Array<Type>, sortField: string) => {
    if (type === "asc") {
      setType("desc")
      return lodash.orderBy(unsortedData, sortField, "asc")
    } else {
      setType("asc")
      return lodash.orderBy(unsortedData, sortField, "desc")
    }
  }

  const onSelectRow = (item: any) => {
    setSelectedRow(item)
  }

  useEffect(() => {
    onFetchData(setShortData, setIsLoading, setOrderedData)
  }, [])

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <BaseTable data={orderedData} sortByField={sortByField} sortField={sortField} onSelectRow={onSelectRow} />
      )}

      {isEmpty(selectedRow) ? "" : <RowDetails selectedRow={selectedRow} />}
    </React.Fragment>
  )
}

export default Table
