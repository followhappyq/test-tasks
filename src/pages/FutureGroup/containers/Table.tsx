import React, { useEffect, useState } from "react"
import lodash from "lodash"

import { Table as BaseTable } from "../components"
import { Loader } from "../../../components"

interface Type {
  id: number
  firstName: string
  lastName: string
  "      email": string
  phone: string
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

  const sortByField = (sortField: string) => {
    const unsortedData = shortData.concat()
    const orderedData = orderData(unsortedData, sortField)
    onOrderData(orderedData)
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

  useEffect(() => {
    onFetchData(setShortData, setIsLoading, setOrderedData)
  }, [])

  return (
    <React.Fragment>
      {isLoading ? <Loader /> : <BaseTable data={orderedData} sortByField={sortByField} />}
    </React.Fragment>
  )
}

export default Table
