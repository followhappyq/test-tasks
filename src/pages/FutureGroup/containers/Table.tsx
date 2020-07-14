import React, { useEffect, useState } from "react"
import lodash, { isEmpty } from "lodash"
import ReactPaginate from "react-paginate"

import { Table as BaseTable, RowDetails } from "../components"
import { Loader } from "../../../components"

interface Type {
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

interface SortFieldType {
  field: string
  type: string
}

const pageSize = 20

const onFetchData = async (setShortData: any, setIsLoading: any, setOrderedData: any, setDisplayData: any) => {
  await fetch(
    `http://www.filltext.com/?rows=50&id={number|1000}&firstName={firstName}&lastName={lastName}&
      email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  )
    .then((res) => res.json())
    .then((data) => {
      setShortData(data)
      setOrderedData(data)
      setDisplayData(lodash.chunk(data, pageSize)[0])
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
}

const Table = () => {
  const [shortData, setShortData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [type, setType] = useState("asc")
  const [orderedData, setOrderedData] = useState<Array<Type>>([])
  const [sortField, setSortField] = useState({ field: "", type: "" })
  const [selectedRow, setSelectedRow] = useState<Type>({
    firstName: "",
    lastName: "",
    "      email": "",
    phone: "",
    id: 0,
  })
  const [currentPage, setCurrentPage] = useState(0)
  const [displayData, setDisplayData] = useState<Array<Type>>([])

  const pageCount = orderedData.length / pageSize

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
  const pageChangeHandler = (data: any) => {
    const selected = data.selected
    setCurrentPage(selected)
  }

  useEffect(() => {
    onFetchData(setShortData, setIsLoading, setOrderedData, setDisplayData)
  }, [])

  useEffect(() => {
    setDisplayData(lodash.chunk(orderedData, pageSize)[currentPage])
  }, [currentPage])

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <BaseTable data={displayData} sortByField={sortByField} sortField={sortField} onSelectRow={onSelectRow} />
      )}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        onPageChange={pageChangeHandler}
      />
      {isEmpty(selectedRow) ? "" : <RowDetails selectedRow={selectedRow} />}
    </React.Fragment>
  )
}

export default Table
