import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    filterVisile: false,
  },
  reducers: {
    changeToLigth: (state, action) => {
      state.theme = 'light';
    },
    changeToDark: (state, action) => {
      state.theme = 'dark';
    },
    changeVisibleFilter: (state, action) => {
      state.filterVisile = !state.filterVisile;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeToLigth, changeToDark, changeVisibleFilter } = uiSlice.actions;

export default uiSlice.reducer;
