import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { CheckBox } from 'Components/CheckBox/CheckBox'
import { Icon } from 'Components/Icons/Icon'
import styles from './CheckBoxMultiSelect.module.css'

export function CheckBoxMultiSelect ({ items, onChange, defaultValue }) {
  const [isOpenPopup, setisOpenPopup] = useState(false)
  const [selectedValues, setselectedValues] = useState([])
  const [caption, setcaption] = useState(defaultValue)

  function handleClick () {
    setisOpenPopup(!isOpenPopup)
  }

  const dropDownStyles = classNames({
    [styles.dropdownchecklist]: true,
    [styles.visible]: isOpenPopup
  })

  function handleChangeCheckBox (e, key) {
    if (e.target.checked) {
      setselectedValues([...selectedValues, key])
      onChange([...selectedValues, key])
    } else {
      const index = selectedValues.findIndex((elem) => elem === key)
      const selectedValuesNew = [...selectedValues]
      selectedValuesNew.splice(index, 1)
      setselectedValues(selectedValuesNew)
      onChange(selectedValuesNew)
    }
  }

  useEffect(() => {
    if (selectedValues.length > 0) {
      setcaption('Значение выбрано')
    } else {
      setcaption(defaultValue)
    }
  }, [selectedValues])

  const options = items.map((item) => {
    return (
      <li key={item.key}><CheckBox identifier={item.key} onChange={handleChangeCheckBox}>{item.value}</CheckBox></li>
    )
  })

  return (
    <div className={dropDownStyles} onClick={handleClick} tabIndex='100'>
      <div className={styles.text}>
        <span className={styles.anchor}>{caption}</span>
      </div>
      <div className={styles.button}>
        <Icon icon='Arrow' color='lightBlue' />
      </div>
      <ul className={styles.items}>
        {options}
      </ul>
    </div>
  )
}

CheckBoxMultiSelect.propTypes = {
  defaultValue: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.oneOfType([
        propTypes.string,
        propTypes.number
      ]),
      value: propTypes.string
    })
  ),
  onChange: propTypes.func
}

CheckBoxMultiSelect.defaultProps = {
  defaultValue: '',
  items: [],
  onChange: () => {}
}
