import React from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { Button } from 'Components/Buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from 'features/data/dataSlice'
import styles from 'Components/window/ChangeState.module.css'

export function ChangeState ({ show, onClose, items }) {
  const dispatch = useDispatch()
  const selectedOrders = useSelector((state) => state.data.selectedOrders)
  const orders = useSelector((state) => state.data.filtredOrders)

  const showChangeTheme = classNames({
    [styles.modal]: true,
    [styles.modalVisible]: show,
    [styles.modalInVisible]: !show
  })

  function handleClick (value) {
    selectedOrders.forEach((orderItem) => {
      const order = orders.find((item) => item.id === orderItem)
      const newOrder = { ...order, status: value }
      dispatch(updateOrder(newOrder))
    })
    onClose()
  }

  return (
    <div className={showChangeTheme}>
      <div className={styles.content}>
        {
          items.map((item) => {
            return (
              <Button key={item.key} size='big' textColor='Secondary' onClick={() => handleClick(item.key)}>{item.value}</Button>
            )
          })
        }
      </div>
    </div>
  )
}

ChangeState.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func,
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
      ]),
      value: propTypes.string
    })
  )
}

ChangeState.defaultProps = {
  onClose: () => {},
  items: []
}
