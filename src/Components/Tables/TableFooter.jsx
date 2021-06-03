import styles from 'Components/Tables/TableFooter.module.css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'Components/Buttons/Button'
import { Pagination } from 'Components/Tables/Pagination'
import { AcceptDelete } from 'Components/window/AcceptDelete'
import { ChangeState } from 'Components/window/ChangeState'
import { TableFooterRow } from 'Components/Tables/TableFooterRow'

export function TableFooter () {
  const [showAcceptDelete, setshowAcceptDelete] = useState(false)
  const [showEditOrder, setshowEditOrder] = useState(false)

  const currentPage = useSelector((state) => state.data.currentPage)
  const allPages = useSelector((state) => state.data.allPages)
  const selectedRow = useSelector((state) => state.data.selectedOrdersCount)
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)
  function handleClick () {
    setshowAcceptDelete(true)
  }

  function handleClose () {
    setshowAcceptDelete(false)
  }

  function handleClickEditOrder () {
    setshowEditOrder(true)
  }

  function handleCloseEditOrder () {
    setshowEditOrder(false)
  }

  return (
    <TableFooterRow size='large'>
      <div className={styles.tableFooter}>
        <div className={styles.buttonPanel}>
          <p className={styles.textSelect}>{`Выбрано записей: ${selectedRow}`}</p>
          <div className={styles.buttonUpdate}>
            <ChangeState show={showEditOrder} onClose={handleCloseEditOrder} items={stateOfOrders} />
            <Button icon='Pencil' color='Blue' size='medium' onClick={handleClickEditOrder}>
              Изменить статус
            </Button>
          </div>
          <div className={styles.buttonDelete}>
            <AcceptDelete show={showAcceptDelete} onClose={handleClose} countToDelete={selectedRow} />
            <Button
              icon='Delete'
              type='solid'
              size='medium'
              onClick={handleClick}
              color='Red'
            >
              Удалить
            </Button>
          </div>
        </div>
        <div className={styles.pagesPanel}>
          <div className={styles.pages}>
            <Pagination currentPage={currentPage} allPages={allPages} />
          </div>
        </div>
      </div>
    </TableFooterRow>
  )
}
