import styles from 'Components/Filters/SearchPanel.module.css'
import React from 'react'
import { SearchInput } from 'Components/SearchBar/SearchInput'
import { Button } from 'Components/Buttons/Button'
import { useDispatch } from 'react-redux'
import { changeVisibleFilter } from 'features/ui/uiSlice'
import { filterFioOrNumber } from 'features/data/dataSlice'

export function SearchPanel () {
  const dispatch = useDispatch()
  return (
    <div className={styles.searchPanel}>
      <SearchInput
        placeholder='Номер заказа или ФИО'
        onChange={(value) => dispatch(filterFioOrNumber(value))}
      />
      <div className={styles.buttonFilter}>
        <Button
          icon='Filter'
          color='Blue'
          textColor='White'
          onClick={() => dispatch(changeVisibleFilter())}
        >
          Фильтры
        </Button>
      </div>
    </div>
  )
}
