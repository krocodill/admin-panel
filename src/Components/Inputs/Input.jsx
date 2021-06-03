import styles from 'Components/Inputs/Input.module.css'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'

export function Input ({ valueInput, labeltext, placeholder, disabled, onChange, onReset, onKeyDown, isError, type, name }) {
  const [value, setValue] = useState(valueInput)
  const [isCloseButtonVisisble, setIsCloseButtonVisisble] = useState(false)
  const [hasError, setHasError] = useState(false)

  function handleReset () {
    console.log(event)
    setValue('')
    setIsCloseButtonVisisble(false)
    onReset(name)
  }

  function handleChange (event) {
    const { target: { value: currentValue } } = event
    setValue(currentValue)
    onChange(event)
    setIsCloseButtonVisisble(currentValue !== '')
  }

  const styleInputBorder = classNames({
    [styles.inputPanel]: true,
    [styles.inputPanelError]: hasError,
    [styles.inputPanelDisabled]: disabled
  })

  const styleCloseButton = classNames({
    [styles.closeButton]: true,
    [styles.closeButtonInvisible]: !isCloseButtonVisisble
  })

  const styleTypeIcon = classNames({
    [styles.disabledIcon]: true,
    [styles.disabledIconInvisible]: !disabled
  })

  useEffect(() => {
    setValue(valueInput)
  }, [valueInput])

  useEffect(() => {
    setHasError(isError)
  }, [isError])

  return (
    <div className={styleInputBorder}>
      <label className={styles.innerLabel}>{labeltext}</label>
      <input
        type={type}
        name={name}
        value={value}
        className={styles.inputWithIcon}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        min='0'
      />
      <button
        onClick={handleReset}
        className={styleCloseButton}
        type='button'
      />
      <i className={styleTypeIcon} />
    </div>
  )
}

Input.propTypes = {
  type: propTypes.string,
  labeltext: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  onKeyDown: propTypes.func,
  onReset: propTypes.func,
  valueInput: propTypes.string,
  disabled: propTypes.bool,
  isError: propTypes.bool,
  name: propTypes.string
}

Input.defaultProps = {
  labeltext: '',
  placeholder: '',
  onChange: () => {},
  onKeyDown: () => {},
  onReset: () => {},
  type: 'text',
  valueInput: '',
  disabled: false,
  isError: false,
  name: ''
}
