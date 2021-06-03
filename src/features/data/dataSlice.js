import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/cleint'

export const sortingASC = 'ASC'
export const sortingDESC = 'DESC'
export const sortingNONE = 'NONE'

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await client.post('/fakeApi/orders')
  return response.orders
})

export const updateOrder = createAsyncThunk('order/Order', async (order) => {
  console.log(order)
  const response = await client.post('/fakeApi/order/', JSON.stringify(order))
  return response.order
})

const orderAsc = (valueA, valueB) => {
  if (valueA < valueB) {
    return -1
  }
  if (valueA > valueB) {
    return 1
  }
  return 0
}

const orderDesc = (valueA, valueB) => {
  if (valueB < valueA) {
    return -1
  }
  if (valueB > valueA) {
    return 1
  }
  return 0
}

export const filterOrders = (params) => {
  let result = [...params.orders]
  if (params.filterFIOorNumber) {
    result = result.filter(
      (order) =>
        order.fio.indexOf(params.filterFIOorNumber) > -1 ||
        order.number.toString().indexOf(params.filterFIOorNumber) > -1
    )
  }
  if (params.dateOrderFrom) {
    result = result.filter((order) => {
      const filterDate = new Date(params.dateOrderFrom)
      const date = new Date(order.date)
      return date >= filterDate
    })
  }

  if (params.dateOrderTo) {
    result = result.filter((order) => {
      const filterDate = new Date(params.dateOrderTo)
      const date = new Date(order.date)
      return date <= filterDate
    })
  }

  if (params.statusFilter && params.statusFilter.length > 0) {
    result = result.filter((order) => {
      return params.statusFilter.includes(order.status.toString())
    })
  }

  if (params.priceFrom) {
    result = result.filter((order) => {
      return parseFloat(order.summa) >= parseFloat(params.priceFrom)
    })
  }

  if (params.priceTo) {
    result = result.filter((order) => {
      return parseFloat(order.summa) <= parseFloat(params.priceTo)
    })
  }
  if (params.sortArray.length > 0) {
    result.sort((valueA, valueB) => {
      let resultSort = 0
      params.sortArray.forEach((element) => {
        if (element.sort === sortingASC) {
          resultSort = resultSort || orderAsc(valueA[element.field], valueB[element.field])
        }
        if (element.sort === sortingDESC) {
          resultSort = resultSort || orderDesc(valueA[element.field], valueB[element.field])
        }
      })
      return resultSort
    })
  }

  return result
}

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    isIdle: true,
    isLoading: false,
    isSuccess: false,
    isError: false,
    isIdleUpdate: true,
    isLoadingUpdate: false,
    isSuccessUpdate: false,
    isErrorUpdate: false,
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
    statusFilter: null,
    priceFrom: null,
    priceTo: null,
    sortArray: [],
    headerGridSort: [
      {
        field: 'number',
        sort: sortingNONE
      },
      {
        field: 'date',
        sort: sortingNONE
      },
      {
        field: 'status',
        sort: sortingNONE
      },
      {
        field: 'positions',
        sort: sortingNONE
      },
      {
        field: 'summa',
        sort: sortingNONE
      },
      {
        field: 'fio',
        sort: sortingNONE
      }
    ]
  },
  reducers: {
    filterFioOrNumber: (state, action) => {
      state.filterFIOorNumber = action.payload
      state.filtredOrders = filterOrders(state)
      state.currentPage = 1
    },
    filterExtended: (state, action) => {
      state.dateOrderFrom = action.payload.dateOrderFrom
      state.dateOrderTo = action.payload.dateOrderTo
      state.statusFilter = action.payload.statusFilter
      state.priceFrom = action.payload.priceFrom
      state.priceTo = action.payload.priceTo
      state.filtredOrders = filterOrders(state)
      state.currentPage = 1
    },
    orderDelete: (state) => {
      state.selectedOrders.forEach((order) =>
        client.delete(`/fakeApi/orders/${order}`)
      )
      state.selectedOrders = []
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxChecked: (state, action) => {
      state.selectedOrders = state.selectedOrders.concat(action.payload)
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxUnChecked: (state, action) => {
      const index = state.selectedOrders.indexOf(action.payload)
      if (index > -1) {
        state.selectedOrders.splice(index, 1)
      }
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxCheckedAll: (state) => {
      state.selectedOrders = state.filtredOrders.map((order) => order.id)
      state.selectedOrdersCount = state.selectedOrders.length
    },
    orderCheckBoxUnCheckedAll: (state) => {
      state.selectedOrders = []
      state.selectedOrdersCount = 0
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setCountPage: (state, action) => {
      state.allPages = action.payload
    },
    sortChange: (state, action) => {
      let newsortArray = state.sortArray.length === 0 ? [] : [...state.sortArray]
      const index = newsortArray.findIndex((sort) => { return sort.field === action.payload })
      if (index > -1) {
        if (newsortArray[index].sort === sortingDESC) {
          newsortArray[index] = {
            ...newsortArray[index],
            sort: sortingNONE
          }
        }
        if (newsortArray[index].sort === sortingASC) {
          newsortArray[index] = {
            ...newsortArray[index],
            field: action.payload,
            sort: sortingDESC
          }
        }
      } else {
        newsortArray = [
          ...newsortArray,
          {
            field: action.payload,
            sort: sortingASC
          }
        ]
      }
      const newIndex = newsortArray.findIndex((sort) => { return sort.field === action.payload })
      state.headerGridSort.find((header) => header.field === action.payload).sort = newsortArray[newIndex].sort
      if (newsortArray[newIndex].sort === sortingNONE) {
        newsortArray.splice(index, 1)
      }
      state.sortArray = newsortArray
      state.filtredOrders = filterOrders(state)
    }
  },
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.isLoading = true
      state.isIdle = false
      state.isSuccess = false
      state.isError = false
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isIdle = false
      state.isSuccess = true
      state.isError = false
      state.orders = action.payload
      state.filtredOrders = filterOrders(state)
      state.currentPage = 1
    },
    [fetchOrders.rejected]: (state, action) => {
      state.isLoading = false
      state.isIdle = false
      state.isSuccess = false
      state.isError = true
      state.errorMessage = action.error.message
    },
    [updateOrder.pending]: (state) => {
      state.isIdleUpdate = false
      state.isLoadingUpdate = true
      state.isSuccessUpdate = false
      state.isErrorUpdate = false
    },
    [updateOrder.fulfilled]: (state, action) => {
      state.isIdleUpdate = false
      state.isLoadingUpdate = false
      state.isSuccessUpdate = true
      state.isErrorUpdate = false
      const index = state.orders.findIndex((e) => e.id === action.payload.id)
      state.orders[index] = action.payload
      state.filtredOrders = filterOrders(state)
    },
    [updateOrder.rejected]: (state, action) => {
      state.isIdleUpdate = false
      state.isLoadingUpdate = false
      state.isSuccessUpdate = false
      state.isErrorUpdate = true
      console.log(action.error.message)
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  filterFioOrNumber,
  filterExtended,
  setCountPage,
  orderDelete,
  orderCheckBoxChecked,
  orderCheckBoxUnChecked,
  orderCheckBoxCheckedAll,
  orderCheckBoxUnCheckedAll,
  setCurrentPage,
  sortChange
} = dataSlice.actions

// export const selectAllOrders = state => state.orders

export default dataSlice.reducer
