import styles from 'Components/Tables/Pagination.module.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'Components/Buttons/Button'
import { setCurrentPage } from 'features/data/dataSlice'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

export function Pagination (props) {
  const dispatch = useDispatch()
  const { currentPage: currPage } = props
  const { allPages } = props
  const pagesNeighbours = 1

  const LEFT_PAGE = 'LEFT'
  const RIGHT_PAGE = 'RIGHT'

  const range = (from, to, step = 1) => {
    let i = from
    const result = []

    while (i <= to) {
      result.push(i)
      i += step
    }

    return result
  }

  const fetchPageNumbers = () => {
    const totalPages = allPages
    const currentPage = currPage
    const pageNeighbours = pagesNeighbours

    const totalNumbers = pagesNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)
      let pages = range(startPage, endPage)

      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, RIGHT_PAGE]
          break
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  if (allPages === 1) return null

  const pages = fetchPageNumbers()

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

    return (
      <div key={nanoid()} className={styles.divPages}>
        <Button
          type={page === currPage ? 'solid' : 'transparent'}
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
