import React from 'react'
import propTypes from 'prop-types'
import { CheckBox } from 'Components/CheckBox/CheckBox'
import styles from 'Components/Tables/TableGridRowCheckBox.module.css'

export function TableGridRowCheckBox ({ children, onChange, checked, identifier }) {
  return (
    <div className={styles.checkBox}>
      <CheckBox
        checked={checked}
        identifier={identifier}
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
  identifier: propTypes.string
}

TableGridRowCheckBox.defaultProps = {
  children: '',
  onChange: () => {},
  checked: false,
  identifier: ''
}
