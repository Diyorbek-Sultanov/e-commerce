import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { useQuery } from 'react-query'
import { toast } from 'react-hot-toast'

import { RootState, AppDispatch } from '../store/store'

import { ProductService } from '../app/services/productService'
import { setProduct } from '../store/slice/productSlice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useProduct = () => {
	const { product } = useAppSelector(state => state.product)
	const dispatch = useAppDispatch()

	const { isLoading } = useQuery('Products', () => ProductService.getAll(), {
		onSuccess: data => {
			dispatch(setProduct(data))
		},
		onError: error => {
			const er = error as Error
			toast.error(er.message)
		},
	})

	return { isLoading, product }
}

export const useProdutById = (id: number) => {
	const { data } = useQuery(
		['ProductsById', id],
		() => ProductService.getProductById(id),
		{
			onError: error => {
				const er = error as Error
				toast.error(er.message)
			},
			enabled: !!id,
		},
	)

	return { data }
}
