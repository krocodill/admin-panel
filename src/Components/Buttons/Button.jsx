import React from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { Icon } from 'Components/Icons/Icon'
import styles from 'Components/Buttons/Button.module.css'

export function Button ({ size, textColor, icon, color, onClick, children }) {
  const ButtonStyleName = styles[`${color}Button`]
  const buttonSizeStyleName = styles[`${size}Size`]
  const buttonTextColorName = styles[`textButton${textColor}`]

  const typeButtonStyleName = classNames({
    [styles.Button]: true,
    [ButtonStyleName]: true,
    [buttonSizeStyleName]: true
  })

  const textButtonStyleName = classNames({
    [buttonTextColorName]: true
  })

  return (
    <div className={typeButtonStyleName} onClick={onClick}>
      <button className={textButtonStyleName}>
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
