import styles from 'Components/Filters/Filters.module.css'
import React from 'react'
import { MainFilters } from 'Components/Filters/MainFilters'
import { ExtendedFilter } from 'Components/Filters/ExtendedFilter'
import { useSelector } from 'react-redux'

export function Filters () {
  const visibleFilter = useSelector((state) => state.ui.filterVisile)
  return (
    <div className={styles.filter}>
      <MainFilters />
      <ExtendedFilter visible={visibleFilter} />
    </div>
  )
}
