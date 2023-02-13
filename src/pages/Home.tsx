import React from 'react'

import { useProduct } from '../app/hooks'

import Category from '../components/Category'
import DisCount from '../components/DisCount'
import Product from '../components/Product'
import Skeleton from '../components/Skeleton'
import Slider from '../components/Slider'
import SliderProduct from '../components/SliderProduct'

const Home: React.FC = () => {
	const { isLoading, product } = useProduct()

	const skeleton = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

	return (
		<div className='h-full w-full mb-40'>
			<Slider />
			<SliderProduct />
			<Category />
			<div className='grid grid-cols-4 grid-rows-2 gap-7 justify-items-center items-center mb-28'>
				{isLoading ? (
					skeleton
				) : product?.length ? (
					product?.map((item, i) => <Product key={i} {...item} />)
				) : (
					<div>Elements Not Fount</div>
				)}
			</div>
			<DisCount />
		</div>
	)
}

export default Home
