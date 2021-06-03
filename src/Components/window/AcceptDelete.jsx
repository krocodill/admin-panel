import styles from 'Components/window/AcceptDelete.module.css'
import React from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { Button } from 'Components/Buttons/Button'
import { orderDelete, fetchOrders } from 'features/data/dataSlice'
import { useDispatch } from 'react-redux'

export function AcceptDelete ({ show, onClose, countToDelete }) {
  const dispatch = useDispatch()

  const showChangeTheme = classNames({
    [styles.modal]: true,
    [styles.modalVisible]: show,
    [styles.modalInVisible]: !show
  })

  function handleCancel () {
    onClose()
  }

  function handleDelete () {
    dispatch(orderDelete())
    dispatch(fetchOrders())
    onClose()
  }

  return (
    <div className={showChangeTheme}>
      <div className={styles.content}>
        <div className={styles.caption}>
          <p className={styles.captionText}>{`Удалить ${countToDelete} записей?`}</p>
        </div>
        <div className={styles.buttonLight}>
          <Button textColor='Primary' size='medium' onClick={handleDelete}>Удалить</Button>
        </div>
        <div className={styles.buttonDark}>
          <Button color='Blue' textColor='White' size='medium' onClick={handleCancel}>Отмена</Button>
        </div>
      </div>
    </div>
  )
}

AcceptDelete.propTypes = {
  show: propTypes.bool.isRequired,
  countToDelete: propTypes.number.isRequired,
  onClose: propTypes.func
}

AcceptDelete.defaultProps = {
  onClose: () => {
  }
}
