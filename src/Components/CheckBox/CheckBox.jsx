import styles from 'Components/CheckBox/CheckBox.module.css'
import React from 'react'
import propTypes from 'prop-types'

export function CheckBox ({ identifier, checked, onChange }) {
  return (
    <input
      className={styles.checkBox}
      type='checkbox'
      checked={checked}
      onChange={onChange}
    />
  )
}

CheckBox.propTypes = {
  identifier: propTypes.string,
  checked: propTypes.bool,
  onChange: propTypes.func
}

CheckBox.defaultProps = {
  identifier: '',
  checked: undefined,
  onChange: () => {}
}
