import React from 'react'
import styles from 'Components/window/EditOrderTableFooter.module.css'
import propTypes from 'prop-types'
import { TableFooterRow } from 'Components/Tables/TableFooterRow'

export function EditOrderTableFooter ({ price }) {
  return (
    <TableFooterRow size='small'>
      <div className={styles.tableFooter}>
        <p className={styles.text}>Итоговая сумма:</p>
        <p className={styles.text}>{parseFloat(price).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
      </div>
    </TableFooterRow>
  )
}

EditOrderTableFooter.propTypes = {
  price: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
}

EditOrderTableFooter.defaultProps = {
  price: ''
}
