import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from 'Components/Tables/TableHeaderRow.module.css'

export function TableHeaderRow ({ children, size }) {
  const rowSizeName = styles[size + 'Size']
  const tableHeaderRowStyleName = classNames({
    [styles.headerRow]: true,
    [rowSizeName]: true
  })

  return (
    <div className={tableHeaderRowStyleName}>
      {children}
    </div>
  )
}

TableHeaderRow.propTypes = {
  children: propTypes.arrayOf(
    propTypes.element
  ),
  size: propTypes.string
}

TableHeaderRow.defaultProps = {
  children: '',
  size: 'small'
}
