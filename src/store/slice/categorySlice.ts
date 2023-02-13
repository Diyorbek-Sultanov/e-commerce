import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICategory {
	categoryId: number
}

const initialState: ICategory = {
	categoryId: 0,
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
	},
})

export const { setCategory } = categorySlice.actions

export default categorySlice.reducer
