import styles from 'Components/window/EditOrder.module.css'
import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { Button } from 'Components/Buttons/Button'
import { InputsWithLabel } from 'Components/Inputs/InputsWithLabel'
import { EditOrderTableHeader } from 'Components/window/EditOrderTableHeader'
import { IconRotate } from 'Components/Icons/IconRotate'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrder } from 'features/data/dataSlice'
import { Select } from 'Components/Inputs/Select'
import { EditOrderTableGrid } from 'Components/window/EditOrderTableGrid'

export function EditOrder ({ show, onClose, orderForEdit }) {
  const dispatch = useDispatch()
  const [fio, setfio] = useState('')
  const [status, setstatus] = useState('')
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)

  const [StyleLoading, setStyleLoading] = useState('')

  const isLoading = useSelector((state) => state.data.isLoadingUpdate)
  // const isSuccess = useSelector((state) => state.data.isSuccessUpdate)

  const showChangeTheme = classNames({
    [styles.modal]: true,
    [styles.modalVisible]: show,
    [styles.modalInVisible]: !show
  })

  const trueValue = true

  useEffect(() => {
    if (isLoading) {
      setStyleLoading(styles.progress)
    } else {
      setStyleLoading(styles.progressInvisible)
    }
  }, [isLoading])

  useEffect(() => {
    if (orderForEdit.fio) {
      setfio(orderForEdit.fio)
    }
    if (orderForEdit.status) {
      setstatus(orderForEdit.status.toString())
    }
  }, [orderForEdit])

  function handleClose () {
    onClose()
  }

  function handleClickEditOrder () {
    const order = { ...orderForEdit }
    order.fio = fio
    order.status = status
    dispatch(updateOrder(order))
  }

  function handleFioChange (value) {
    setfio(value)
  }

  function handleStatusChange (value) {
    setstatus(value)
  }

  return (
    <div className={showChangeTheme}>
      <div className={styles.header}>
        <div className={styles.caption}>
          <p className={styles.cationText}>Заявка #</p>
          <p className={styles.cationText}>{orderForEdit.number}</p>
        </div>
        <div className={styles.close}>
          <Button icon='XLarge' onClick={handleClose} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.dateTime}>
          <InputsWithLabel
            type='disabled'
            placeholder='Дата и время заказа'
            caption='Дата и время заказа'
            valueInput={orderForEdit.date}
            disabled={trueValue}
          />
        </div>
        <div className={styles.fio}>
          <InputsWithLabel
            type='disabled'
            placeholder='ФИО покупателя'
            caption='ФИО покупателя'
            valueInput={fio}
            onChange={handleFioChange}
          />
        </div>
        <div className={styles.table}>
          <EditOrderTableHeader />
          <EditOrderTableGrid items={orderForEdit.orderItems} />
        </div>
        <div className={styles.privilage}>
          <InputsWithLabel
            placeholder='Уровень лояльности'
            caption='Уровень лояльности'
            valueInput={orderForEdit.privilage}
            disabled={trueValue}
          />
        </div>
        <div className={styles.status}>
          <Select
            items={stateOfOrders}
            onChange={handleStatusChange}
            currentValue={orderForEdit.status}
          />
        </div>
        <div className={styles.code}>
          <InputsWithLabel
            placeholder='Код подтверждения'
            caption='Код подтверждения'
          />
        </div>

      </div>
      <div className={styles.footer}>
        <div className={StyleLoading}>
          <IconRotate />
        </div>
        <div className={styles.buttonUpdate}>
          <Button icon='Checkmark' color='Blue' textColor='White' size='medium' onClick={handleClickEditOrder}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  )
}

EditOrder.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func,
  orderForEdit: propTypes.shape({
    number: propTypes.number,
    date: propTypes.string,
    fio: propTypes.string,
    status: propTypes.number,
    privilage: propTypes.string,
    orderItems: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string
      })
    )
  })
}

EditOrder.defaultProps = {
  onClose: () => {
  },
  orderForEdit: {}
}
