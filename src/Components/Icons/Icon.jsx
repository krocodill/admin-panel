import styles from 'Components/Icons/Icon.module.css'
import React from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

export function Icon (props) {
  const { icon } = props
  const { color } = props
  const IconName = styles[`icon${icon}`]

  const styleTypeIcon = classNames({
    [IconName]: true,
    [styles.white]: color === 'white',
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary'
  })
  return <i className={styleTypeIcon} />
}

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string
}

Icon.defaultProps = {
  icon: 'None',
  color: 'primary'
}
