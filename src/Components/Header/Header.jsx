import React, { useState } from 'react'
import { Heading } from 'Components/Header/Heading'
import styles from 'Components/Header/Header.module.css'
import { Button } from 'Components/Buttons/Button'
import { ChangeTheme } from 'Components/window/ChangeTheme'
import { useSelector } from 'react-redux'

export function Header () {
  const [showChangeTheme, setShowChangeTheme] = useState(false)

  const theme = useSelector((state) => state.ui.theme)
  const iconName = theme === 'light' ? 'Sun' : 'Moon'
  const themeName = theme === 'light' ? 'Светлая тема' : 'Темная тема'
  function handleClick () {
    setShowChangeTheme(true)
  }

  function handleClose () {
    setShowChangeTheme(false)
  }

  return (
    <div className={styles.header}>
      <Heading />
      <div className={styles.popup}>
        <Button size='Big' icon={iconName} onClick={handleClick} textColor='Primary'>
          {themeName}
        </Button>
        <ChangeTheme show={showChangeTheme} onClose={handleClose} />
      </div>
    </div>
  )
}
