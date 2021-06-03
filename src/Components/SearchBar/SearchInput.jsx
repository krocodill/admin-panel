import styles from 'Components/SearchBar/SearchInput.module.css'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

export function SearchInput ({ placeholder, onChange, onReset }) {
  const [value, setValue] = useState('')
  const [isCloseButtonVisisble, setIsCloseButtonVisisble] = useState(false)

  function handleReset () {
    setValue('')
    setIsCloseButtonVisisble(false)
    onReset()
  }

  function handleChange ({ target: { value: currentValue } }) {
    setValue(currentValue)
    setIsCloseButtonVisisble(value !== '')
    onChange(event)
  }

  const styleCloseButton = classNames({
    [styles.closeButton]: isCloseButtonVisisble,
    [styles.closeButtonInvisible]: !isCloseButtonVisisble
  })

  return (
    <div className={styles.searchBar}>
      <span className={styles.searchIcon} />
      <input
        type='text'
        value={value}
        className={styles.inputWithIcon}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button
        onClick={handleReset}
        className={styleCloseButton}
        type='button'
      />
    </div>
  )
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onReset: PropTypes.func
}

SearchInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onReset: () => {}
}
