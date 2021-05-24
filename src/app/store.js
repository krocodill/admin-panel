import { configureStore } from '@reduxjs/toolkit';
import uiReducer from 'features/ui/uiSlice';
import dataReduser from 'features/data/dataSlice';

export default configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReduser,
  },
});
