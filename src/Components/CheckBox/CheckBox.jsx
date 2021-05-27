import styles from 'Components/CheckBox/CheckBox.module.css'
import React from 'react'
import propTypes from 'prop-types'

export function CheckBox (props) {
  const { identifier } = props
  const { checked } = props

  function handleChange (event) {
    if (event.target.checked) {
      props.OnChecked(identifier)
    } else {
      props.OnUnChecked(identifier)
    }
  }

  return (
    <input
      className={styles.checkBox}
      type='checkbox'
      checked={checked}
      onChange={handleChange}
    />
  )
}

CheckBox.propTypes = {
  identifier: propTypes.string,
  checked: propTypes.bool,
  OnChecked: propTypes.func,
  OnUnChecked: propTypes.func
}

CheckBox.defaultProps = {
  identifier: '',
  checked: undefined,
  OnChecked: () => {},
  OnUnChecked: () => {}
}
