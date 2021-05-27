import styles from 'Components/Inputs/InputsWithLabel.module.css'
import { Input } from 'Components/Inputs/Input'
import React from 'react'
import propTypes from 'prop-types'

export function InputsWithLabel (props) {
  const { caption } = props
  const { placeholder } = props
  const { type } = props
  const { labeltext } = props
  const { onChange } = props
  const { valueInput } = props
  const { disabled } = props

  return (
    <div className={styles.container}>
      <label className={styles.caption}>{caption}</label>
      <Input
        type={type}
        placeholder={placeholder}
        labeltext={labeltext}
        onChange={onChange}
        valueInput={valueInput}
        disabled={disabled}
      />
    </div>
  )
}

InputsWithLabel.propTypes = {
  onChange: propTypes.func,
  caption: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  labeltext: propTypes.string,
  valueInput: propTypes.string,
  disabled: propTypes.bool
}

InputsWithLabel.defaultProps = {
  onChange: () => {},
  caption: '',
  placeholder: '',
  type: '',
  labeltext: '',
  valueInput: '',
  disabled: false
}
