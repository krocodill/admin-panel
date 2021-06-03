import styles from 'Components/Filters/ExtendedFilter.module.css'
import { InputsWithLabel } from 'Components/Inputs/InputsWithLabel'
import { Input } from 'Components/Inputs/Input'
import React, { useState } from 'react'
import { Button } from 'Components/Buttons/Button'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'
import { filterExtended } from 'features/data/dataSlice'
import propTypes from 'prop-types'
// import { Select } from 'Components/Inputs/Select'
import { CheckBoxMultiSelect } from 'Components/CheckBox/CheckBoxMultiSelect'

export function ExtendedFilter ({ visible }) {
  const dispatch = useDispatch()
  const [dateFrom, setdateFrom] = useState('')
  const [dateTo, setdateTo] = useState('')
  const [status, setstatus] = useState([])
  const [priceFrom, setpriceFrom] = useState('')
  const [priceTo, setpriceTo] = useState('')
  const stateOfOrders = useSelector((state) => state.ui.stateOfOrders)

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

  function handleChangeDateFrom ({ target: { value } }) {
    setdateFrom(value)
  }

  function handleChangeDateTo ({ target: { value } }) {
    setdateTo(value)
  }

  function handleChangeStatus (value) {
    setstatus([...value])
  }

  function handleChangePriceFrom ({ target: { value } }) {
    setpriceFrom(value)
  }

  function handleChangePriceTo ({ target: { value } }) {
    setpriceTo(value)
  }

  function handleResetDateFrom () {
    setdateFrom('')
  }

  function handleResetDateTo () {
    setdateTo('')
  }

  function handleResetPriceFrom () {
    setpriceFrom('')
  }

  function handleResetPriceTo () {
    setpriceTo('')
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
            onReset={handleResetDateFrom}
          />
        </div>
        <div className={styles.inputDateTo}>
          <Input type='date' placeholder='dd.mm.dddd' labeltext='по' onChange={handleChangeDateTo} onReset={handleResetDateTo} />
        </div>
        <div className={styles.inputStatus}>
          <CheckBoxMultiSelect
            items={stateOfOrders}
            defaultValue='Любой'
            placeholder='dd.mm.dddd'
            caption='Статус заказа'
            onChange={handleChangeStatus}
          />
        </div>
        <div className={styles.inputSummaFrom}>
          <InputsWithLabel
            type='number'
            placeholder='Р'
            labeltext='от'
            caption='Сумма заказа'
            onChange={handleChangePriceFrom}
            onReset={handleResetPriceFrom}
          />
        </div>
        <div className={styles.inputSummaTo}>
          <Input type='number' placeholder='Р' labeltext='до' onChange={handleChangePriceTo} onReset={handleResetPriceTo} />
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
