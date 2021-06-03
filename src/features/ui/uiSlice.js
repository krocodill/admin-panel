import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    filterVisile: false,
    stateOfOrders: [
      {
        key: '1',
        value: 'Новый',
        colorIcon: 'orange',
        icon: 'Dot'
      },
      {
        key: '2',
        value: 'Рассчет',
        colorIcon: 'blue',
        icon: 'Dot'
      },
      {
        key: '3',
        value: 'Подтвержден',
        colorIcon: 'green',
        icon: 'Dot'
      },
      {
        key: '4',
        value: 'Отложен',
        colorIcon: 'orange',
        icon: 'Dot'
      },
      {
        key: '5',
        value: 'Выполнен',
        colorIcon: 'green',
        icon: 'Checkmark'
      },
      {
        key: '6',
        value: 'Отменен',
        colorIcon: 'grey',
        icon: 'Abort'
      }
    ]
  },
  reducers: {
    changeToLigth: (state) => {
      state.theme = 'light'
    },
    changeToDark: (state) => {
      state.theme = 'dark'
    },
    changeVisibleFilter: (state) => {
      state.filterVisile = !state.filterVisile
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeToLigth, changeToDark, changeVisibleFilter } =
  uiSlice.actions

export default uiSlice.reducer
