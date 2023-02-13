import { configureStore } from '@reduxjs/toolkit'
import category from './slice/categorySlice'
import product from './slice/productSlice'

export const store = configureStore({
	reducer: {
		category,
		product,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
