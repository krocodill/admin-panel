import React from 'react'
import { TableHeaderRow } from 'Components/Tables/TableHeaderRow'
import { TableHeaderColumn } from 'Components/Tables/TableHeaderColumn'

export function EditOrderTableHeader () {
  return (
    <TableHeaderRow size='small'>
      <TableHeaderColumn size='medium'>Артикул</TableHeaderColumn>
      <TableHeaderColumn size='xl'>Наименование</TableHeaderColumn>
      <TableHeaderColumn size='auto'>Цена</TableHeaderColumn>
    </TableHeaderRow>
  )
}
