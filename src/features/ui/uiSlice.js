import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    filterVisile: false,
    stateOfOrders: [
      {
        key: '1',
        value: 'Новый'
      },
      {
        key: '2',
        value: 'Рассчет'
      },
      {
        key: '3',
        value: 'Подтвержден'
      },
      {
        key: '4',
        value: 'Отложен'
      },
      {
        key: '5',
        value: 'Выполнен'
      },
      {
        key: '6',
        value: 'Отменен'
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
