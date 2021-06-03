import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import { Button } from 'Components/Buttons/Button'
import { ChangePage } from 'Components/window/ChangePage'
import { setCurrentPage } from 'features/data/dataSlice'
import { LEFT_PAGE, RIGHT_PAGE, BUTTON_CHANGE, fetchPageNumbers } from 'Components/Tables/PaginationConst'
import styles from 'Components/Tables/Pagination.module.css'

export function Pagination ({ currentPage: currPage, allPages }) {
  const dispatch = useDispatch()
  const pagesNeighbours = 1
  const [positionX, setpositionX] = useState(0)
  const [positionY, setpositionY] = useState(0)
  const [showChangePage, setshowChangePage] = useState(false)

  function handleClick () {
    setshowChangePage(true)
  }

  function handleClose () {
    setshowChangePage(false)
  }

  if (allPages === 1) return null

  const pages = fetchPageNumbers(allPages, currPage, pagesNeighbours)

  function callbackref (input) {
    if (input) {
      setpositionX(input.offsetLeft)
      setpositionY(input.offsetTop)
    }
  }

  const PaginationButton = pages.map((page) => {
    if (page === LEFT_PAGE) {
      return (
        <div key={nanoid()} className={styles.divPages}>
          ...
        </div>
      )
    }

    if (page === RIGHT_PAGE) {
      return (
        <div key={nanoid()} className={styles.divPages}>
          ...
        </div>
      )
    }

    if (page === BUTTON_CHANGE) {
      return (
        <div ref={callbackref} key={nanoid()} className={styles.divPages}>
          <div className={styles.changePage}>
            <ChangePage show={showChangePage} onClose={handleClose} positionX={positionX} positionY={positionY} />
          </div>
          <Button
            color={page === currPage ? 'Blue' : 'transparent'}
            textColor={page === currPage ? 'White' : 'Primary'}
            size='medium'
            onClick={handleClick}
          >
            {page.toString()}
          </Button>
        </div>
      )
    }

    return (
      <div key={nanoid()} className={styles.divPages}>
        <Button
          color={page === currPage ? 'Blue' : 'transparent'}
          textColor={page === currPage ? 'White' : 'Primary'}
          size='medium'
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page.toString()}
        </Button>
      </div>
    )
  })

  return <div className={styles.pagination}>{PaginationButton}</div>
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  allPages: PropTypes.number
}

Pagination.defaultProps = {
  currentPage: 1,
  allPages: 1
}
