import styles from 'Components/window/EditOrderTableGrid.module.css'
import React from 'react'
import PropTypes from 'prop-types'

export function EditOrderTableGrid ({ items }) {
  const Items = items.map((item) => (
    <div className={styles.rowItem} key={item.id}>
      <div className={styles.tableRowItemArticle}>
        <p className={styles.text}>{item.article}</p>
      </div>
      <div className={styles.tableRowItemName}>
        <p className={styles.text}>{item.name}</p>
      </div>
      <div className={styles.tableRowItemPrice}>
        <p className={styles.text}>{item.price}</p>
      </div>
    </div>
  ))

  return (
    <div className={styles.tableGrid}>
      {Items}
    </div>
  )
}

EditOrderTableGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  )
}

EditOrderTableGrid.defaultProps = {
  items: []
}
