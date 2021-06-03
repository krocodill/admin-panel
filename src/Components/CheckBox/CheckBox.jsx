import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import styles from 'Components/CheckBox/CheckBox.module.css'

export function CheckBox ({ identifier, checked, onChange, children }) {
  const [value, setvalue] = useState(false)

  useEffect(() => {
    setvalue(checked)
  }, [checked])

  function handleChange (event) {
    const { target: { checked: currentValue } } = event
    setvalue(currentValue)
    onChange(event, identifier)
  }
  return (
    <label className={styles.container}>
      <input
        type='checkbox'
        checked={value}
        onChange={handleChange}
      />
      <span className={styles.checkmark} />
      {children}
    </label>
  )
}

CheckBox.propTypes = {
  identifier: propTypes.string,
  checked: propTypes.bool,
  onChange: propTypes.func,
  children: propTypes.string
}

CheckBox.defaultProps = {
  identifier: '',
  checked: false,
  onChange: () => {},
  children: ''
}
