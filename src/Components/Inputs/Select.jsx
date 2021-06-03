import styles from 'Components/Inputs/Select.module.css'
import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'

export function Select ({ items, currentValue, onChange }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(currentValue)
  }, [currentValue])

  function handleChange (event) {
    const { target: { value: currentValue } } = event
    setValue(currentValue)
    onChange(event)
  }

  return (
    <div className={styles.inputPanel}>
      <select
        value={value}
        className={styles.inputStyle}
        onChange={handleChange}
      >
        {
          items.map((item) => {
            return (
              <option className={styles.options} key={item.key} value={item.key}>{item.value}</option>
            )
          })
        }
      </select>
    </div>
  )
}

Select.propTypes = {
  currentValue: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
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

Select.defaultProps = {
  currentValue: '',
  items: [],
  onChange: () => {}
}
