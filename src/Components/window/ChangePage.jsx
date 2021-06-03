import styles from 'Components/window/ChangePage.module.css'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import propTypes from 'prop-types'
import { Input } from 'Components/Inputs/Input'
import { setCurrentPage } from 'features/data/dataSlice'
import { useDispatch } from 'react-redux'

export function ChangePage ({ show, onClose, positionX, positionY }) {
  const dispatch = useDispatch()

  const [Value, setValue] = useState(1)
  const [currentDiv, setСurrentDiv] = useState(null)

  const showChangeTheme = classNames({
    [styles.modal]: true,
    [styles.modalVisible]: show,
    [styles.modalInVisible]: !show
  })

  function handleKeyDown (e) {
    if (e.key === 'Enter') {
      dispatch(setCurrentPage(Value))
      onClose()
    }
  }

  function handleChangePage (value) {
    if (!isNaN(value) || !isNaN(parseInt(value))) {
      setValue(+value)
    } else {
      setValue(Value)
    }
  }

  function callbackref (input) {
    if (input) {
      setСurrentDiv(input)
    }
  }

  useEffect(() => {
    if (currentDiv) {
      currentDiv.style.left = (positionX - 130) + 'px'
      currentDiv.style.top = (positionY - 150) + 'px'
    }
  }, [currentDiv])

  return (
    <div ref={callbackref} className={showChangeTheme}>
      <div className={styles.content}>
        <div className={styles.caption}>
          <p className={styles.captionText}>Номер страницы</p>
        </div>
        <div className={styles.buttonLight}>
          <Input onChange={handleChangePage} onKeyDown={handleKeyDown} placeholder='Введите номер' />
        </div>
      </div>
    </div>
  )
}

ChangePage.propTypes = {
  show: propTypes.bool.isRequired,
  onClose: propTypes.func,
  positionX: propTypes.number.isRequired,
  positionY: propTypes.number.isRequired
}

ChangePage.defaultProps = {
  onClose: () => {
  }
}
