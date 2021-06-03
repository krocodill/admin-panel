import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  orderCheckBoxChecked,
  orderCheckBoxUnChecked,
  setCountPage,
  setCurrentPage
} from 'features/data/dataSlice'

import { TableGridColumn } from 'Components/Tables/TableGridColumn'
import { TableGridRowText } from 'Components/Tables/TableGridRowText'
import { TableGridRowCheckBox } from 'Components/Tables/TableGridRowCheckBox'
import { TableGridRowState } from 'Components/Tables/TableGridRowState'
import { TableGridRowCurrency } from 'Components/Tables/TableGridRowCurrency'
import { TableGridRowItem } from 'Components/Tables/TableGridRowItem'
import { EditOrder } from 'Components/window/EditOrder'

import styles from 'Components/Tables/TableGrid.module.css'

export function TableGrid ({ orders }) {
  const dispatch = useDispatch()
  const selectedOrders = useSelector((state) => state.data.selectedOrders)
  const [clientHeight, setclientHeight] = useState(0)
  const [scrollableGrid, setscrollableGrid] = useState(null)
  const currentPage = useSelector((state) => state.data.currentPage)
  const [pageNumber, setpageNumber] = useState(1)
  const [showEditOrder, setshowEditOrder] = useState(false)
  const [orderForEdit, setorderForEdit] = useState({})

  function handleChangeCheckBox (e, key) {
    if (e.target.checked) {
      dispatch(orderCheckBoxChecked(key))
    } else {
      dispatch(orderCheckBoxUnChecked(key))
    }
  }

  function handleDblClickEditOrder (event, key) {
    const orderFind = orders.find(order => order.id === key)
    setorderForEdit(orderFind)
    setshowEditOrder(true)
  }

  const Orders = orders.map((order) => (
    <TableGridRowItem key={order.id} onDoubleClick={(event, data) => handleDblClickEditOrder(event, order.id)}>
      <TableGridColumn size='small'>
        <TableGridRowCheckBox
          checked={selectedOrders.indexOf(order.id) !== -1}
          identifier={order.id}
          onChange={handleChangeCheckBox}
        />
      </TableGridColumn>
      <TableGridColumn size='medium'>
        <TableGridRowText>{order.number}</TableGridRowText>
      </TableGridColumn>
      <TableGridColumn size='large'>
        <TableGridRowText>{order.date}</TableGridRowText>
      </TableGridColumn>
      <TableGridColumn size='large'>
        <TableGridRowState value={order.status} />
      </TableGridColumn>
      <TableGridColumn size='medium'>
        <TableGridRowText>{order.positions}</TableGridRowText>
      </TableGridColumn>
      <TableGridColumn size='large'>
        <TableGridRowCurrency>{order.summa}</TableGridRowCurrency>
      </TableGridColumn>
      <TableGridColumn size='auto'>
        <TableGridRowText>{order.fio}</TableGridRowText>
      </TableGridColumn>
    </TableGridRowItem>
  ))

  function handleCloseEditOrder () {
    setshowEditOrder(false)
  }

  function callbackRef (input) {
    if (input) {
      const countPage = input.clientHeight === 0 ? 1 : Math.floor(input.scrollHeight / input.clientHeight)
      dispatch(
        setCountPage(countPage)
      )
      setclientHeight(input.clientHeight)
      setscrollableGrid(input)
    }
  }

  useEffect(() => {
    if (scrollableGrid) {
      scrollableGrid.scrollTop = (currentPage - 1) * clientHeight
      setpageNumber(currentPage)
    }
  }, [scrollableGrid, pageNumber, currentPage, clientHeight])

  function handleScroll (e) {
    const element = e.target
    if ((currentPage - 1) * clientHeight > element.scrollTop) {
      setpageNumber(currentPage - 1)
      dispatch(setCurrentPage(currentPage - 1))
    }
    if ((currentPage - 1) * clientHeight + clientHeight < element.scrollTop) {
      setpageNumber(currentPage + 1)
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  return (
    <div ref={callbackRef} className={styles.tableGrid} onScroll={handleScroll}>
      <EditOrder show={showEditOrder} onClose={handleCloseEditOrder} orderForEdit={orderForEdit} />
      {Orders}
    </div>

  )
}

TableGrid.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
}

TableGrid.defaultProps = {
  orders: []
}
