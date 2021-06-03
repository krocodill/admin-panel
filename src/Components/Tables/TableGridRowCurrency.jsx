import React from 'react'
import propTypes from 'prop-types'
import styles from 'Components/Tables/TableGridRowText.module.css'

export function TableGridRowCurrency ({ children }) {
  return (
    <p className={styles.text}>{parseFloat(children).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
  )
}

TableGridRowCurrency.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
}

TableGridRowCurrency.defaultProps = {
  children: ''
}
