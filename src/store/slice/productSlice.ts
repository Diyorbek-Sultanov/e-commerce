import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts, ProductT } from './../../interfaces/interface'

const initialState: IProducts = {
	product: [],
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct(state, action: PayloadAction<ProductT[]>) {
			state.product = action.payload
		},
	},
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer
