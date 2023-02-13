import { configureStore } from '@reduxjs/toolkit'
import category from './slice/categorySlice'

export const store = configureStore({
	reducer: {
		category,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
