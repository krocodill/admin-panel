import React, { useEffect } from 'react'
import { Header } from 'Components/Header/Header'
import styles from 'Components/AdminPanel/AdminPanel.module.css'
import { Filters } from 'Components/Filters/Filters'
import { Tables } from 'Components/Tables/Tables'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'

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
