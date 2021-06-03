import React from 'react'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Icon } from 'Components/Icons/Icon'
import styles from 'Components/Tables/TableGridRowState.module.css'

export function TableGridRowState ({ value }) {
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)
  const state = stateOfOrders.filter(order => order.key === value.toString())
  const { icon, colorIcon, value: text } = state[0]
  return (
    <div className={styles.state}>
      <div className={styles.icon}>
        <Icon icon={icon} color={colorIcon} />
      </div>

      <p className={styles.text}>{text}</p>
    </div>
  )
}

TableGridRowState.propTypes = {
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
}

TableGridRowState.defaultProps = {
  value: ''
}
