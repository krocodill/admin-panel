import React, { useState } from 'react'
import { Heading } from 'Components/Header/Heading'
import styles from 'Components/Header/Header.module.css'
import { Button } from 'Components/Buttons/Button'
import { ChangeTheme } from 'Components/window/ChangeTheme'
import { useSelector } from 'react-redux'

export function Header () {
  const [showChangeTheme, setshowChangeTheme] = useState(false)

  const theme = useSelector((state) => state.ui.theme)
  const iconName = theme === 'light' ? 'Sun' : 'Moon'
  const themeName = theme === 'light' ? 'Светлая тема' : 'Темная тема'
  function handleClick () {
    setshowChangeTheme(true)
  }

  function handleClose () {
    setshowChangeTheme(false)
  }

  return (
    <div className={styles.header}>
      <Heading />
      <div className={styles.popup}>
        <Button type='transparent' icon={iconName} onClick={handleClick}>
          {themeName}
        </Button>
        <ChangeTheme show={showChangeTheme} onClose={handleClose} />
      </div>
    </div>
  )
}
