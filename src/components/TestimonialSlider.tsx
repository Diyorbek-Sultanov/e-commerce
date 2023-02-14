import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Virtual } from 'swiper'

import 'swiper/css'

import Man from '../assets/man.png'
import Woman from '../assets/woman.png'
import Man2 from '../assets/man-2.png'

type TestimonialT = {
	img: string
	name: string
	text: string
}

const Testimonial: TestimonialT[] = [
	{
		img: Man,
		name: 'Savannah Nguyen',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
	},
	{
		img: Woman,
		name: 'Esther Howard',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
	},
	{
		img: Man2,
		name: 'Esther Howard',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
	},
	{
		img: Man,
		name: 'Savannah Nguyen',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
	},
	{
		img: Woman,
		name: 'Esther Howard',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
	},
	{
		img: Man2,
		name: 'Esther Howard',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
	},
]

const TestimonialSlider: React.FC = () => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={10}
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
			{Testimonial.map((item, i) => (
				<SwiperSlide key={i} virtualIndex={i}>
					<div className='py-4 px-5 mb-9 testi rounded-[20px]'>
						<div className='flex flex-row items-center mb-6 gap-x-9'>
							<img
								className='border-2 border-yellow-500 border-dashed rounded-full'
								src={item.img}
								alt='img'
							/>
							<h4 className='text-[#003F62] font-medium text-base'>
								{item.name}
							</h4>
						</div>
						<p className='text-[#003F62] text-start bg-[#E2F4FF] font-normal text-xs py-3 px-6'>
							{item.text}
						</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default TestimonialSlider
