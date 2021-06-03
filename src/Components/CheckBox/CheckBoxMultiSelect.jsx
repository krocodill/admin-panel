import React, { useState } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { CheckBox } from 'Components/CheckBox/CheckBox'
import { Icon } from 'Components/Icons/Icon'
import styles from './CheckBoxMultiSelect.module.css'

export function CheckBoxMultiSelect ({ items, onChange, defaultValue }) {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [selectedValues, setSelectedValues] = useState([])

  function handleClick () {
    setIsOpenPopup(!isOpenPopup)
  }

  const dropDownStyles = classNames({
    [styles.dropdownchecklist]: true,
    [styles.visible]: isOpenPopup
  })

  function handleChangeCheckBox ({ target: { checked, name } }) {
    console.log(name)
    if (checked) {
      setSelectedValues([...selectedValues, name])
      onChange([...selectedValues, name])
    } else {
      const index = selectedValues.findIndex((elem) => elem === name)
      const selectedValuesNew = [...selectedValues]
      selectedValuesNew.splice(index, 1)
      setSelectedValues(selectedValuesNew)
      onChange(selectedValuesNew)
    }
  }

  return (
    <div className={dropDownStyles} onClick={handleClick} tabIndex='100'>
      <div className={styles.text}>
        <span className={styles.anchor}>{selectedValues.length ? 'Значение выбрано' : defaultValue}</span>
      </div>
      <div className={styles.button}>
        <Icon icon='Arrow' color='lightBlue' />
      </div>
      <ul className={styles.items}>
        {
          items.map((item) => {
            return (
              <li key={item.key}><CheckBox name={item.key} onChange={handleChangeCheckBox}>{item.value}</CheckBox></li>
            )
          })
        }
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
