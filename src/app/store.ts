import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/pizzas/pizza-api-slice'
import pizzasReducer from '../features/pizzas/pizzas-api-slice'
import cartItemsReducer from '../features/cart/cartItems-api-slice'

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		pizzas: pizzasReducer,
		cart: cartItemsReducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware)
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
