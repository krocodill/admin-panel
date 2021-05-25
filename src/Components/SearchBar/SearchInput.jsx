import styles from 'Components/SearchBar/SearchInput.module.css'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

export function SearchInput (props) {
  const [Value, setValue] = useState('')
  const [isCloseButtonVisisble, setisCloseButtonVisisble] = useState(false)
  const { placeholder } = props

  function handleReset () {
    setValue('')
    setisCloseButtonVisisble(false)
    if (props.onChange) {
      props.onChange('')
    }
  }

  function handleChange (event) {
    setValue(event.target.value)
    setisCloseButtonVisisble(Value !== '')
    if (props.onChange) {
      props.onChange(event.target.value)
    }
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
        value={Value}
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
  onChange: PropTypes.func
}

SearchInput.defaultProps = {
  placeholder: '',
  onChange: () => {}
}
