export const LEFT_PAGE = 'LEFT'
export const RIGHT_PAGE = 'RIGHT'
export const BUTTON_CHANGE = '#'

export function range (start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
