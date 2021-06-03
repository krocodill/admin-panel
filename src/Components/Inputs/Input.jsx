import styles from 'Components/Inputs/Input.module.css'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'

export function Input ({ valueInput, labeltext, placeholder, disabled, onChange, onReset, onKeyDown, isError, type }) {
  const [value, setValue] = useState(valueInput)
  const [isCloseButtonVisisble, setIsCloseButtonVisisble] = useState(false)
  const [hasError, setHasError] = useState(false)

  function handleReset () {
    setValue('')
    setHasError(false)
    setIsCloseButtonVisisble(false)
    onReset()
  }

  function handleChange ({ target: { value: currentValue } }) {
    setValue(currentValue)
    setHasError(false)
    onChange(event)
    setIsCloseButtonVisisble(currentValue !== '')
  }

  const styleInputBorder = classNames({
    [styles.inputPanelError]: hasError,
    [styles.inputPanel]: !hasError,
    [styles.inputPanelDisabled]: disabled
  })

  const styleCloseButton = classNames({
    [styles.closeButton]: isCloseButtonVisisble,
    [styles.closeButtonInvisible]: !isCloseButtonVisisble
  })

  const styleTypeIcon = classNames({
    [styles.disabledIcon]: disabled,
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
  isError: propTypes.bool
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
  isError: false
}
