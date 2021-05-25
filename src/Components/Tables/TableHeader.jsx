import styles from 'Components/Tables/TableHeader.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  orderCheckBoxCheckedAll,
  orderCheckBoxUnCheckedAll
} from 'features/data/dataSlice'
import { CheckBox } from 'Components/CheckBox/CheckBox'

export function TableHeader () {
  const dispatch = useDispatch()

  return (
    <div className={styles.header}>
      <div className={styles.tableRowItemCheckBox}>
        <div className={styles.checkBox}>
          <CheckBox
            OnChecked={() => dispatch(orderCheckBoxCheckedAll())}
            OnUnChecked={() => dispatch(orderCheckBoxUnCheckedAll())}
          />
        </div>
      </div>

      <div className={styles.tableRowItemNumber}>
        <p className={styles.text}>#</p>
      </div>
      <div className={styles.tableRowItemDate}>
        <p className={styles.text}>Дата</p>
      </div>
      <div className={styles.tableRowItemStatus}>
        <p className={styles.text}>Статус</p>
      </div>
      <div className={styles.tableRowItemPositions}>
        <p className={styles.text}>Позиций</p>
      </div>
      <div className={styles.tableRowItemSumma}>
        <p className={styles.text}>Cумма</p>
      </div>
      <div className={styles.tableRowItemFIO}>
        <p className={styles.text}>ФИО покупателя</p>
      </div>
    </div>
  )
}
