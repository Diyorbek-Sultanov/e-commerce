import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Virtual } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import Camera from '../assets/camera.png'

type sliderT = {
	title: string
	image: string
}

const sliders: sliderT[] = [
	{
		title: 'Canon camera',
		image: Camera,
	},
	{
		title: 'Canon camera',
		image: Camera,
	},
	{
		title: 'Canon camera',
		image: Camera,
	},
]

const Slider: React.FC = () => {
	return (
		<div className='mb-14'>
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				draggable='true'
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay, Virtual]}
				className='mySwiper'
			>
				{sliders.map((slider, index) => (
					<SwiperSlide className='w-full' key={index} virtualIndex={index}>
						<div className='flex flex-row justify-around items-center pt-14'>
							<div className='flex flex-col gap-y-5'>
								<h1 className='text-[#1B5A7D] font-bold text-5xl'>
									{slider?.title}
								</h1>
								<div className='flex flex-row gap-x-5'>
									<button className='text-white text-base py-4 px-8 bg-yellow-500 rounded-[20px] cursor-pointer hover:bg-yellow-600 transition'>
										Shop now
									</button>
									<button className='text-[#316887] border border-[#316887] text-base py-4 px-8 bg-transparent rounded-[20px] cursor-pointer hover:bg-yellow-500 hover:border-none hover:text-white transition'>
										View more
									</button>
								</div>
							</div>

							<div>
								<img src={slider?.image} alt='camera' />
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
