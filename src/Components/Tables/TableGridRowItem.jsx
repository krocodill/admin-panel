import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from 'Components/Tables/TableGridRowItem.module.css'

export function TableGridRowItem ({ children, size, onDoubleClick }) {
  const ColumnItemSizeName = styles[size + 'Size']
  const tableColumnItemStyleName = classNames({
    [styles.rowItem]: true,
    [ColumnItemSizeName]: true
  })

  return (
    <div className={tableColumnItemStyleName} onDoubleClick={onDoubleClick}>
      {children}
    </div>
  )
}

TableGridRowItem.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
  size: propTypes.string,
  onDoubleClick: propTypes.func
}

TableGridRowItem.defaultProps = {
  children: '',
  size: 'big',
  onDoubleClick: () => {}
}
