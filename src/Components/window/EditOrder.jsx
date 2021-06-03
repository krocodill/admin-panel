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
import { EditOrderTableFooter } from 'Components/window/EditOrderTableFooter'

export function EditOrder ({ show, onClose, orderForEdit }) {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState('')
  const [status, setStatus] = useState('')
  const [code, setCode] = useState('')
  const [isCodeError, setIsCodeError] = useState(false)
  const [textCodeError, setTextCodeError] = useState('')
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)

  const [styleLoading, setStyleLoading] = useState('')

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
      setFullName(orderForEdit.fio)
    }
    if (orderForEdit.status) {
      setStatus(orderForEdit.status.toString())
    }
    setCode('')
  }, [orderForEdit])

  function handleClose () {
    onClose()
  }

  function handleClickEditOrder () {
    if (code === '11111') {
      setIsCodeError(false)
      setTextCodeError('')
      const order = { ...orderForEdit }
      order.fio = fullName
      order.status = status
      console.log(order)
      dispatch(updateOrder(order))
    } else {
      setIsCodeError(true)
      setTextCodeError(code === '' ? 'Код подтверждения не заполнен' : 'Код подтверждения не верен')
    }
  }

  function handleFioChange ({ target: { value: currentValue } }) {
    setFullName(currentValue)
  }

  function handleStatusChange ({ target: { value: currentValue } }) {
    setStatus(currentValue)
  }

  function handleCodeChange ({ target: { value: currentValue } }) {
    setCode(currentValue)
  }

  function handleCodeReset () {
    setCode('')
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
            valueInput={fullName}
            onChange={handleFioChange}
          />
        </div>
        <div className={styles.table}>
          <EditOrderTableHeader />
          <EditOrderTableGrid items={orderForEdit.orderItems} />
          <EditOrderTableFooter price={orderForEdit.summa} />
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
            isError={isCodeError}
            onChange={handleCodeChange}
            onReset={handleCodeReset}
            valueInput={code}
          />
        </div>

      </div>
      <div className={styles.footer}>
        <p className={styles.textError}>{textCodeError}</p>
        <div className={styleLoading}>
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
    summa: propTypes.oneOfType([
      propTypes.string,
      propTypes.number
    ]),
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
