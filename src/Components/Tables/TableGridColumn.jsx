import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from 'Components/Tables/TableGridColumn.module.css'

export function TableGridColumn ({ children, size }) {
  const ColumnItemSizeName = styles[size + 'Size']
  const tableColumnItemStyleName = classNames({
    [styles.tableColumnItem]: true,
    [ColumnItemSizeName]: true
  })

  return (
    <div className={tableColumnItemStyleName}>
      {children}
    </div>
  )
}

TableGridColumn.propTypes = {
  children: propTypes.element,
  size: propTypes.string
}

TableGridColumn.defaultProps = {
  children: '',
  size: 'small'
}
