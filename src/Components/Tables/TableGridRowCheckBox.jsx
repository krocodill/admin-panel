import React from 'react'
import propTypes from 'prop-types'
import { CheckBox } from 'Components/CheckBox/CheckBox'
import styles from 'Components/Tables/TableGridRowCheckBox.module.css'

export function TableGridRowCheckBox ({ children, onChange, checked, name }) {
  return (
    <div className={styles.checkBox}>
      <CheckBox
        checked={checked}
        name={name}
        onChange={onChange}
      >
        {children}
      </CheckBox>
    </div>
  )
}

TableGridRowCheckBox.propTypes = {
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  onChange: propTypes.func,
  checked: propTypes.bool,
  name: propTypes.string
}

TableGridRowCheckBox.defaultProps = {
  children: '',
  onChange: () => {},
  checked: false,
  name: ''
}
