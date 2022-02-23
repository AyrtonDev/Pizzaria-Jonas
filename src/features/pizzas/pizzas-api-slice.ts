import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzasProps } from '../../types/Pizzas'

// First, create the thunk
export const GetPizzasApi = createAsyncThunk('pizzas/GetList', async () => {
  return await axios.get('http://localhost:3000/pizzas').then((res) => res.data)
})

type RequesitionProps = {
  entities: PizzasProps[] | null
  loading: string
  error: any
}

const initialState: RequesitionProps = {
  entities: null,
  loading: 'idle',
  error: null
}

// Then, handle actions in your reducers:
export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetPizzasApi.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(GetPizzasApi.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.entities = action.payload
        }
      })
      .addCase(GetPizzasApi.rejected, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle'
          state.error = action.error
        }
      })
  }
})

// Later, dispatch the thunk as needed in the app
export default pizzasSlice.reducer
