import React from 'react'
import { useQuery } from 'react-query'

import { ProductService } from '../app/services/productService'
import Category from '../components/Category'
import Product from '../components/Product'
import Slider from '../components/Slider'
import SliderProduct from '../components/SliderProduct'

const Home: React.FC = () => {
	const { isLoading, data, error } = useQuery('Products', () =>
		ProductService.getAll(),
	)

	console.log(data)

	return (
		<div className='h-full w-full mb-40'>
			<Slider />
			<SliderProduct />
			<Category />
			<div className='grid grid-cols-4 grid-rows-2 gap-7 justify-items-center items-center'>
				{data?.map((item, i) => (
					<Product key={i} {...item} />
				))}
			</div>
		</div>
	)
}

export default Home
