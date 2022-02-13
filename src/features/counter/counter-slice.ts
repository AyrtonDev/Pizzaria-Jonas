import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number;
}

const initialState: CounterState = {
	value: 0,
}

const counterSlice = createSlice({
	name: 'Counter',
	initialState,
	reducers: {
		incremented(state) {
			state.value++
		},
	},
})

export const { incremented } = counterSlice.actions
export default counterSlice.reducer
