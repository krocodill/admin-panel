import styles from 'Components/window/EditOrderTableHeader.module.css'
import React from 'react'

export function EditOrderTableHeader () {
  return (
    <div className={styles.header}>
      <div className={styles.tableRowItemArticle}>
        <p className={styles.text}>Артикул</p>
      </div>
      <div className={styles.tableRowItemName}>
        <p className={styles.text}>Наименование</p>
      </div>
      <div className={styles.tableRowItemPrice}>
        <p className={styles.text}>Цена</p>
      </div>
    </div>
  )
}
