import styles from 'Components/Tables/TableGrid.module.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  orderCheckBoxChecked,
  orderCheckBoxUnChecked,
  setCountPage,
  setCurrentPage
} from 'features/data/dataSlice'
import { CheckBox } from 'Components/CheckBox/CheckBox'
import PropTypes from 'prop-types'

export function TableGrid (props) {
  const dispatch = useDispatch()
  const SelectedOrders = useSelector((state) => state.data.selectedOrders)
  const [clientHeight, setclientHeight] = useState(0)
  const [scrollableGrid, setscrollableGrid] = useState(null)
  const currentPage = useSelector((state) => state.data.currentPage)
  const [pageNumber, setpageNumber] = useState(1)
  const { isLoading } = props
  const { orders } = props

  const Orders = orders.map((order) => (
    <div className={styles.rowItem} key={order.id}>
      <div className={styles.rowItemCheckBox}>
        <div className={styles.checkBox}>
          <CheckBox
            checked={SelectedOrders.indexOf(order.id) !== -1}
            OnChecked={() => dispatch(orderCheckBoxChecked(order.id))}
            OnUnChecked={() => dispatch(orderCheckBoxUnChecked(order.id))}
          />
        </div>
      </div>
      <div className={styles.rowItemNumber}>
        <p className={styles.text}>{order.number}</p>
      </div>
      <div className={styles.rowItemDate}>
        <p className={styles.text}>{order.date}</p>
      </div>
      <div className={styles.rowItemStatus}>
        <p className={styles.text}>{order.status}</p>
      </div>
      <div className={styles.rowItemPositions}>
        <p className={styles.text}>{order.positions}</p>
      </div>
      <div className={styles.rowItemSumma}>
        <p className={styles.text}>{order.summa}</p>
      </div>
      <div className={styles.rowItemFIO}>
        <p className={styles.text}>{order.fio}</p>
      </div>
    </div>
  ))

  function callbackRef (input) {
    if (input) {
      dispatch(
        setCountPage(Math.floor(input.scrollHeight / input.clientHeight))
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

  if (isLoading) {
    return <div className={styles.tableGrid}>Загрузка</div>
  }
  return (
    <div ref={callbackRef} className={styles.tableGrid} onScroll={handleScroll}>
      {Orders}
    </div>
  )
}

TableGrid.propTypes = {
  isLoading: PropTypes.bool,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
}

TableGrid.defaultProps = {
  isLoading: false,
  orders: []
}
