import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/cleint';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await client.post('/fakeApi/orders');
  return response.orders;
});

export const filterOrders = (params) => {
  let result = params.orders;
  if (params.filterFIOorNumber) {
    result = result.filter(
      (order) => order.fio.indexOf(params.filterFIOorNumber) > -1
          || order.number.toString().indexOf(params.filterFIOorNumber) > -1,
    );
  }
  if (params.dateOrderFrom) {
    result = result.filter((order) => {
      const filterDate = new Date(params.dateOrderFrom);
      const date = new Date(order.date);
      return date >= filterDate;
    });
  }
  if (params.dateOrderTo) {
    result = result.filter((order) => {
      const filterDate = new Date(params.dateOrderTo);
      const date = new Date(order.date);
      return date <= filterDate;
    });
  }

  return result;
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    isIdle: true,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    selectedOrdersCount: 0,
    orders: [],
    filtredOrders: [],
    selectedOrders: [],
    currentPage: 1,
    allPages: 1,
    filterFIOorNumber: null,
    dateOrderFrom: null,
    dateOrderTo: null,
  },
  reducers: {
    filterFioOrNumber: (state, action) => {
      state.filterFIOorNumber = action.payload;
      state.filtredOrders = filterOrders(state);
      state.currentPage = 1;
    },
    filterDateFrom: (state, action) => {
      state.dateOrderFrom = action.payload;
      state.filtredOrders = filterOrders(state);
      state.currentPage = 1;
    },
    orderDelete: (state) => {
      state.selectedOrders.forEach((order) => client.delete(`/fakeApi/orders/${order}`));
      state.selectedOrders = [];
      state.selectedOrdersCount = state.selectedOrders.length;
    },
    orderCheckBoxChecked: (state, action) => {
      state.selectedOrders = state.selectedOrders.concat(action.payload);
      state.selectedOrdersCount = state.selectedOrders.length;
    },
    orderCheckBoxUnChecked: (state, action) => {
      const index = state.selectedOrders.indexOf(action.payload);
      if (index > -1) {
        state.selectedOrders.splice(index, 1);
      }
      state.selectedOrdersCount = state.selectedOrders.length;
    },
    orderCheckBoxCheckedAll: (state) => {
      state.selectedOrders = state.filtredOrders.map((order) => order.id);
      state.selectedOrdersCount = state.selectedOrders.length;
    },
    orderCheckBoxUnCheckedAll: (state) => {
      state.selectedOrders = [];
      state.selectedOrdersCount = 0;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCountPage: (state, action) => {
      state.allPages = action.payload;
    },
  },
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.isLoading = true;
      state.isIdle = false;
      state.isSuccess = false;
      state.isError = false;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isIdle = false;
      state.isSuccess = true;
      state.isError = false;
      // Add any fetched posts to the array
      state.orders = action.payload;
      state.filtredOrders = filterOrders(state);
    },
    [fetchOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.isIdle = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  filterFioOrNumber,
  filterDateFrom,
  setCountPage,
  orderDelete,
  orderCheckBoxChecked,
  orderCheckBoxUnChecked,
  orderCheckBoxCheckedAll,
  orderCheckBoxUnCheckedAll,
  setCurrentPage,
} = dataSlice.actions;

// export const selectAllOrders = state => state.orders

export default dataSlice.reducer;
