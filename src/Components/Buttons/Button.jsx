import styles from 'Components/Buttons/Button.module.css'
import React from 'react'
import { Icon } from 'Components/Icons/Icon'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'

export function Button ({ size, textColor, icon, color, onClick, children }) {
  const ButtonName = styles[color + 'Button']
  const buttonSizeName = styles[size + 'Size']
  const buttonTextColorName = styles['textButton' + textColor]

  const typeButtonStyleName = classNames({
    [styles.Button]: true,
    [ButtonName]: true,
    [buttonSizeName]: true
  })

  const textButtonStyleName = classNames({
    [buttonTextColorName]: true
  })

  return (
    <div className={typeButtonStyleName}>
      <button className={textButtonStyleName} onClick={onClick}>
        <Icon icon={icon} color={textColor} />
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  children: propTypes.string,
  size: propTypes.string,
  textColor: propTypes.string,
  icon: propTypes.string,
  onClick: propTypes.func,
  color: propTypes.string
}

Button.defaultProps = {
  children: '',
  size: 'big',
  textColor: 'White',
  icon: 'None',
  onClick: () => {},
  color: 'transporent'
}
