import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Virtual, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import Speaker from '../assets/speaker.png'
import Laptop from '../assets/laptop.png'
import Camera from '../assets/camera-sm.png'

type sliderT = {
	name: string
	image: string
	count: number
}

const sliders: sliderT[] = [
	{
		name: 'Speaker',
		image: Speaker,
		count: 6,
	},

	{
		name: 'Laptop',
		image: Laptop,
		count: 6,
	},

	{
		name: 'Camera',
		image: Camera,
		count: 6,
	},

	{
		name: 'Speaker',
		image: Speaker,
		count: 6,
	},

	{
		name: 'Laptop',
		image: Laptop,
		count: 6,
	},

	{
		name: 'Camera',
		image: Camera,
		count: 6,
	},
]

const SliderProduct: React.FC = () => {
	return (
		<div className='mb-20'>
			<Swiper
				slidesPerView={3}
				spaceBetween={20}
				navigation
				autoplay={{
					delay: 1500,
					disableOnInteraction: true,
				}}
				modules={[Navigation, Virtual, Autoplay]}
				virtual
				className='mySwiper'
			>
				{sliders.map((slider, index) => (
					<SwiperSlide key={index} virtualIndex={index}>
						<div className='flex flex-row items-center justify-around  border-2 border-black'>
							<div className='flex flex-row items-center py-6 px-7 gap-x-10'>
								<img src={slider?.image} alt={slider?.name} />
								<div>
									<h5 className='text-[#1B5A7D] font-semibold text-xl mb-2'>
										{slider?.name}
									</h5>
									<span className='text-[#265F7F] font-medium text-lg'>
										({slider?.count} items)
									</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SliderProduct
