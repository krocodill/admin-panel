import styles from 'Components/Filters/ExtendedFilter.module.css'
import { InputsWithLabel } from 'Components/Inputs/InputsWithLabel'
import { Input } from 'Components/Inputs/Input'
import React, { useState } from 'react'
import { Button } from 'Components/Buttons/Button'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'
import { filterExtended } from 'features/data/dataSlice'
import propTypes from 'prop-types'
import { Select } from 'Components/Inputs/Select'

export function ExtendedFilter ({ visible }) {
  const dispatch = useDispatch()
  const [dateFrom, setdateFrom] = useState('')
  const [dateTo, setdateTo] = useState('')
  const [status, setstatus] = useState('')
  const [priceFrom, setpriceFrom] = useState('')
  const [priceTo, setpriceTo] = useState('')
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)
  const inputValues = [
    {
      key: '0',
      value: 'Любой'
    }
  ].concat(stateOfOrders)

  const visiblePanelStyleName = classNames({
    [styles.panel]: visible,
    [styles.panelInVisible]: !visible
  })

  function handleClickApplyFilter () {
    const filterObject = {
      dateOrderFrom: dateFrom,
      dateOrderTo: dateTo,
      statusFilter: status,
      priceFrom: priceFrom,
      priceTo: priceTo
    }
    dispatch(filterExtended(filterObject))
  }

  function handleChangeDateFrom (value) {
    setdateFrom(value)
  }

  function handleChangeDateTo (value) {
    setdateTo(value)
  }

  function handleChangeStatus (value) {
    setstatus(value)
  }

  function handleChangePriceFrom (value) {
    setpriceFrom(value)
  }

  function handleChangePriceTo (value) {
    setpriceTo(value)
  }

  return (
    <div className={visiblePanelStyleName}>
      <div className={styles.content}>
        <div className={styles.inputDateFrom}>
          <InputsWithLabel
            type='date'
            placeholder='dd.mm.dddd'
            labeltext='с'
            caption='Дата оформления'
            onChange={handleChangeDateFrom}
          />
        </div>
        <div className={styles.inputDateTo}>
          <Input type='date' placeholder='dd.mm.dddd' labeltext='по' onChange={handleChangeDateTo} />
        </div>
        <div className={styles.inputStatus}>
          <Select
            items={inputValues}
            placeholder='dd.mm.dddd'
            caption='Статус заказа'
            onChange={handleChangeStatus}
          />
        </div>
        <div className={styles.inputSummaFrom}>
          <InputsWithLabel
            type='decimal'
            placeholder='Р'
            labeltext='от'
            caption='Сумма заказа'
            onChange={handleChangePriceFrom}

          />
        </div>
        <div className={styles.inputSummaTo}>
          <Input type='decimal' placeholder='Р' labeltext='до' onChange={handleChangePriceTo} />
        </div>
        <div className={styles.buttonApplay}>
          <Button textColor='Primary' onClick={handleClickApplyFilter}>
            Применить
          </Button>
        </div>
      </div>
    </div>
  )
}

ExtendedFilter.propTypes = {
  visible: propTypes.bool
}

ExtendedFilter.defaultProps = {
  visible: false
}
