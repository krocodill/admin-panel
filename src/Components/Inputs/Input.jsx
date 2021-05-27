import styles from 'Components/Inputs/Input.module.css'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'

export function Input (props) {
  const { valueInput } = props
  const { labeltext } = props
  const { placeholder } = props
  const { disabled } = props
  // const { type } = props
  const [Value, setValue] = useState(valueInput)
  const [isCloseButtonVisisble, setisCloseButtonVisisble] = useState(false)
  const [HasError, setHasError] = useState(false)

  function handleReset () {
    setValue('')
    setHasError(false)
    setisCloseButtonVisisble(false)
    props.onChange('')
  }

  function handleChange (event) {
    setValue(event.target.value)
    setHasError(false)
    props.onChange(event.target.value)
    setisCloseButtonVisisble(event.target.value !== '')
  }

  const styleInputBorder = classNames({
    [styles.inputPanelError]: HasError,
    [styles.inputPanel]: !HasError,
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

  return (
    <div className={styleInputBorder}>
      <label className={styles.innerLabel}>{labeltext}</label>
      <input
        type='text'
        value={Value}
        className={styles.inputWithIcon}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={props.onKeyDown}
        disabled={disabled}
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
  labeltext: propTypes.string,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  onKeyDown: propTypes.func,
  // type: propTypes.string,
  valueInput: propTypes.string,
  disabled: propTypes.bool
}

Input.defaultProps = {
  labeltext: '',
  placeholder: '',
  onChange: () => {},
  onKeyDown: () => {},
  type: '',
  valueInput: '',
  disabled: false
}
