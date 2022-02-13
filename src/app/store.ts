import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter-slice'
import { apiSlice } from '../features/pizzas/pizza-api-slice'
import pizzasReducer from '../features/pizzas/pizzas-api-slice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
		pizzas: pizzasReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware)
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
