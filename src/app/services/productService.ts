import axios from 'axios'

import { IProduct } from './../../interfaces/interface'

axios.defaults.baseURL = 'https://63e71947bb286279770daa32.mockapi.io/api'

export const ProductService = {
	async getAll() {
		const { data } = await axios.get<IProduct[]>('/productss')

		return data
	},
}
