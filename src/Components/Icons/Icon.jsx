import styles from 'Components/Icons/Icon.module.css'
import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

export function Icon ({ icon, color, rotate }) {
  const IconName = styles[`icon${icon}`]

  const styleTypeIcon = classNames({
    [IconName]: true,
    [styles.white]: color === 'White',
    [styles.primary]: color === 'Primary',
    [styles.secondary]: color === 'Secondary',
    [styles.orange]: color === 'orange',
    [styles.green]: color === 'green',
    [styles.grey]: color === 'grey',
    [styles.blue]: color === 'blue',
    [styles.lightBlue]: color === 'lightBlue',
    [styles.rotate_180]: rotate === 180
  })
  return <i className={styleTypeIcon} />
}

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  rotate: PropTypes.number
}

Icon.defaultProps = {
  icon: 'None',
  color: 'primary',
  rotate: 0
}
