import styles from 'Components/Inputs/InputsWithLabel.module.css'
import { Input } from 'Components/Inputs/Input'
import React from 'react'
import propTypes from 'prop-types'

export function InputsWithLabel ({ caption, placeholder, type, labeltext, onReset, onChange, valueInput, disabled, isError }) {
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
        isError={isError}
        onReset={onReset}
      />
    </div>
  )
}

InputsWithLabel.propTypes = {
  onChange: propTypes.func,
  onReset: propTypes.func,
  caption: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  labeltext: propTypes.string,
  valueInput: propTypes.string,
  disabled: propTypes.bool,
  isError: propTypes.bool
}

InputsWithLabel.defaultProps = {
  onChange: () => {},
  onReset: () => {},
  caption: '',
  placeholder: '',
  type: '',
  labeltext: '',
  valueInput: '',
  disabled: false,
  isError: false
}
