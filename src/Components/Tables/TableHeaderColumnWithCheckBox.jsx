import React from 'react'
import propTypes from 'prop-types'
import { CheckBox } from 'Components/CheckBox/CheckBox'
import styles from 'Components/Tables/TableHeaderColumnWithCheckBox.module.css'

export function TableHeaderColumnWithCheckBox ({ onChange }) {
  return (
    <div className={styles.tableColumnItem}>
      <div className={styles.checkBox}>
        <CheckBox
          onChange={onChange}
        />
      </div>
    </div>
  )
}

TableHeaderColumnWithCheckBox.propTypes = {
  onChange: propTypes.func
}

TableHeaderColumnWithCheckBox.defaultProps = {
  onChange: () => {}
}
