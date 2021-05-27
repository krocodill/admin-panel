import styles from 'Components/Icons/IconRotate.module.css'
import React from 'react'
import { ReactComponent as Refresh } from 'icons/refresh.svg'

export function IconRotate () {
  return (
    <div className={styles.loading}>
      <Refresh stroke='#459DF5' />
    </div>
  )
}
