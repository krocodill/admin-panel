import styles from 'Components/Buttons/Button.module.css'
import React from 'react'
import { Icon } from 'Components/Icons/Icon'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'

export function Button (props) {
  const { type } = props
  const isSolid = type === 'solid'
  const { size } = props
  const isBigSize = size === 'big'
  const { textColor } = props
  const isPrimaryTextCollor = textColor === 'primary'
  const { icon } = props

  const typeButtonStyleName = classNames({
    [styles.solidButton]: isSolid,
    [styles.transparentButton]: !isSolid,
    [styles.sizeBig]: isBigSize,
    [styles.sizeMedium]: !isBigSize
  })
  const textButtonStyleNmae = classNames({
    [styles.buttonWhite]: isSolid,
    [styles.buttonPrimary]: !isSolid && isPrimaryTextCollor,
    [styles.buttonSecondary]: !isSolid && !isPrimaryTextCollor
  })
  const colorButtonIfNotSolid = isPrimaryTextCollor
    ? props.textColor
    : 'secondary'
  const textButtonIconColor = isSolid ? 'white' : colorButtonIfNotSolid

  return (
    <div className={typeButtonStyleName}>
      <button className={textButtonStyleNmae} onClick={props.onClick}>
        <Icon icon={icon} color={textButtonIconColor} />
        {props.children}
      </button>
    </div>
  )
}

Button.propTypes = {
  type: propTypes.string,
  children: propTypes.string,
  size: propTypes.string,
  textColor: propTypes.string,
  icon: propTypes.string,
  onClick: propTypes.func
}

Button.defaultProps = {
  type: 'solid',
  children: '',
  size: 'big',
  textColor: 'primary',
  icon: 'None',
  onClick: () => {}
}
