import styles from 'Components/window/EditOrderTableGrid.module.css'
import React from 'react'
import PropTypes from 'prop-types'
import { TableGridRowItem } from 'Components/Tables/TableGridRowItem'
import { TableGridColumn } from 'Components/Tables/TableGridColumn'
import { TableGridRowText } from 'Components/Tables/TableGridRowText'
import { TableGridRowCurrency } from 'Components/Tables/TableGridRowCurrency'

export function EditOrderTableGrid ({ items }) {
  return (
    <div className={styles.tableGrid}>
      {
        items.map((item) => (
          <TableGridRowItem key={item.id} size='small'>
            <TableGridColumn size='medium'>
              <TableGridRowText>{item.article}</TableGridRowText>
            </TableGridColumn>
            <TableGridColumn size='xl'>
              <TableGridRowText>{item.name}</TableGridRowText>
            </TableGridColumn>
            <TableGridColumn size='auto'>
              <TableGridRowCurrency>{item.price}</TableGridRowCurrency>
            </TableGridColumn>
          </TableGridRowItem>
        ))

      }
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
