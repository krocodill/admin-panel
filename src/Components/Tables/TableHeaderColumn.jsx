import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames/bind'
import { sortingASC, sortingDESC, sortingNONE } from 'features/data/dataSlice'
import { Icon } from 'Components/Icons/Icon'
import styles from 'Components/Tables/TableHeaderColumn.module.css'

export function TableHeaderColumn ({ children, size, sorting, onClick }) {
  const ColumnItemSizeName = styles[size + 'Size']
  const [rotate, setRotate] = useState(0)
  const [visibleIcon, setVisibleIcon] = useState(false)
  const tableColumnItemStyleName = classNames({
    [styles.tableColumnItem]: true,
    [ColumnItemSizeName]: true
  })

  const iconStyleName = classNames({
    [styles.icon]: visibleIcon,
    [styles.iconInvisible]: !visibleIcon
  })

  useEffect(() => {
    if (sorting === sortingASC) {
      setRotate(0)
    }
    if (sorting === sortingDESC) {
      setRotate(180)
    }
    setVisibleIcon(sorting !== sortingNONE)
  }, [sorting])

  return (
    <div className={tableColumnItemStyleName} onClick={onClick}>
      <p className={styles.text}>{children}</p>
      <div className={iconStyleName}>
        <Icon icon='Arrow' color='theme' rotate={rotate} />
      </div>
    </div>
  )
}

TableHeaderColumn.propTypes = {
  children: propTypes.string,
  size: propTypes.string,
  sorting: propTypes.string,
  onClick: propTypes.func
}

TableHeaderColumn.defaultProps = {
  children: '',
  size: 'small',
  sorting: sortingNONE,
  onClick: () => {}
}
