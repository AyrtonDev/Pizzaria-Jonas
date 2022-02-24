import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { CartProps } from 'types/Cart'
import { v4 as uuid4 } from 'uuid'

const id = localStorage.getItem('CART_ID')
// First, create the thunk
export const GetCartApi = createAsyncThunk('cart/GetList', async () => {
  if (id) {
    return await axios
      .get(`http://localhost:3000/cart/${id}`)
      .then((res) => res.data)
  } else {
    return await await axios.get('http://localhost:3000/cart').then((res) => {
      localStorage.setItem('CART_ID', res.data[0].idCart)
      return res.data
    })
  }
})

export const PostCartApi = createAsyncThunk('', async (item) => {
  if (id) {
    return await axios
      .post(`http://localhost:3000/cart/${id}`, item)
      .finally(() => true)
  } else {
    const idCart = await uuid4()

    localStorage.setItem('CART_ID', idCart)
  }
})

type RequesitionProps = {
  entities: CartProps[]
  loading: string
  error: any
}

const initialState: RequesitionProps = {
  entities: [],
  loading: 'idle',
  error: null
}

// Then, handle actions in your reducers:
export const cartItemsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetCartApi.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(GetCartApi.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.entities = action.payload
        }
      })
      .addCase(GetCartApi.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.error
        }
      })
  }
})

// Later, dispatch the thunk as needed in the app
export default cartItemsSlice.reducer
