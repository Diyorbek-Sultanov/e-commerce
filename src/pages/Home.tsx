import React from 'react'

import Slider from '../components/Slider'
import SliderProduct from '../components/SliderProduct'

const Home: React.FC = () => {
	return (
		<div className='h-full w-full'>
			<Slider />
			<SliderProduct />
		</div>
	)
}

export default Home
