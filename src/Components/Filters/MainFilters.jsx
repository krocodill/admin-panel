import styles from 'Components/Filters/MainFilters.module.css'
import React from 'react'
import { SearchPanel } from 'Components/Filters/SearchPanel'
import { Button } from 'Components/Buttons/Button'
import { useDispatch } from 'react-redux'
import { fetchOrders } from 'features/data/dataSlice'

export function MainFilters () {
  const dispatch = useDispatch()
  return (
    <div className={styles.mainFilters}>
      <SearchPanel />
      <Button
        color='transporent'
        textColor='Primary'
        icon='Refresh'
        onClick={() => dispatch(fetchOrders())}
      >
        Загрузка
      </Button>
    </div>
  )
}
