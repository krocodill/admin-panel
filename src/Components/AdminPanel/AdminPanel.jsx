import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import { Header } from 'Components/Header/Header'
import { Filters } from 'Components/Filters/Filters'
import { Tables } from 'Components/Tables/Tables'
import styles from 'Components/AdminPanel/AdminPanel.module.css'

export function AdminPanel () {
  const theme = useSelector((state) => state.ui.theme)
  const themeStyle = styles[`${theme}Theme`]
  const styleAdminPanel = classNames(
    {
      [styles.adminPanel]: true,
      [themeStyle]: true
    }
  )

  useEffect(() => {
    document.body.classList = []
    document.body.classList.add(themeStyle)
    document.body.classList.add(styles.bodyMain)
  }, [themeStyle])

  return (
    <div className={styleAdminPanel}>
      <Header />
      <Filters />
      <Tables />
    </div>
  )
}
