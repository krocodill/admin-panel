import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from 'Components/Tables/TableFooterRow.module.css'

export function TableFooterRow ({ children, size }) {
  const rowSizeName = styles[size + 'Size']
  const tableFooterRowStyleName = classNames({
    [styles.footerRow]: true,
    [rowSizeName]: true
  })

  return (
    <div className={tableFooterRowStyleName}>
      {children}
    </div>
  )
}

TableFooterRow.propTypes = {
  children: propTypes.oneOfType(
    [
      propTypes.arrayOf(
        propTypes.element
      ),
      propTypes.element
    ]
  ),
  size: propTypes.string
}

TableFooterRow.defaultProps = {
  children: '',
  size: 'small'
}
