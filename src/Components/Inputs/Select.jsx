import styles from 'Components/Inputs/Select.module.css'
import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { nanoid } from 'nanoid'

export function Select ({ items, currentValue, onChange }) {
  const [value, setvalue] = useState('')

  const options = items.map((item) => {
    if (value.toString() === item.key) {
      return (
        <option key={nanoid()} selected value={item.key}>{item.value}</option>
      )
    } else {
      return (
        <option key={nanoid()} value={item.key}>{item.value}</option>
      )
    }
  })

  useEffect(() => {
    setvalue(currentValue)
  }, [currentValue])

  function handleChange (event) {
    const { target: { value: currentValue } } = event
    setvalue(currentValue)
    onChange(event)
  }

  return (
    <div className={styles.inputPanel}>
      <select
        className={styles.inputStyle}
        onChange={handleChange}
      >
        {options}
      </select>
    </div>
  )
}

Select.propTypes = {
  currentValue: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.number,
      value: propTypes.string
    })
  ),
  onChange: propTypes.func
}

Select.defaultProps = {
  currentValue: '',
  items: [],
  onChange: () => {}
}
