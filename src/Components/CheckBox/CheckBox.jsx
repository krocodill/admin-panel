import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import styles from 'Components/CheckBox/CheckBox.module.css'

export function CheckBox ({ name, checked, onChange, children }) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    setValue(checked)
  }, [checked])

  function handleChange ({ target: { checked } }) {
    setValue(checked)
    onChange(event)
  }
  return (
    <label className={styles.container}>
      <input
        name={name}
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
  name: propTypes.string,
  checked: propTypes.bool,
  onChange: propTypes.func,
  children: propTypes.string
}

CheckBox.defaultProps = {
  name: '',
  checked: false,
  onChange: () => {},
  children: ''
}
