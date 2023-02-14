import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Virtual } from 'swiper'

import New1 from '../assets/news-1.png'
import New2 from '../assets/news-2.png'

type NewsT = {
	image: string
	date: string
	title: string
	text: string
	author: string
}

const news: NewsT[] = [
	{
		image: New1,
		date: '22,oct,2021',
		title: 'Who avoids a pain that produces?',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
		author: 'By spacing tech',
	},
	{
		image: New2,
		date: '22,oct,2021',
		title: 'Who avoids a pain that produces?',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
		author: 'By spacing tech',
	},
	{
		image: New1,
		date: '22,oct,2021',
		title: 'Who avoids a pain that produces?',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
		author: 'By spacing tech',
	},
	{
		image: New2,
		date: '22,oct,2021',
		title: 'Who avoids a pain that produces?',
		text: 'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
		author: 'By spacing tech',
	},
]

const News: React.FC = () => {
	return (
		<>
			<div className='flex flex-row justify-between mb-12'>
				<h1 className='text-[#1B5A7D] font-semibold text-2xl'>Latest news</h1>
				<h1 className='text-[#1B5A7D] font-medium text-xl'>View all</h1>
			</div>

			<Swiper
				slidesPerView={2}
				spaceBetween={20}
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
				{news.map((item, i) => (
					<SwiperSlide key={i} virtualIndex={i}>
						<div className='testi py-4 px-9 rounded-[20px] mb-9'>
							<div className='flex flex-row gap-x-8'>
								<div className='rounded-[20px] overflow-hidden'>
									<img
										className='w-full h-full object-cover'
										src={item.image}
										alt={item.title}
									/>
								</div>
								<div className='max-w-[265px]'>
									<p className='text-[#1B5A7D] font-medium text-xl testi rounded-[20px] py-1 px-4 mb-2 inline-block'>
										{item.date}
									</p>
									<h3 className='text-[#1B5A7D] font-semibold text-2xl mb-4'>
										{item.title}
									</h3>
									<p className='text-[#003F62] font-normal text-sm mb-8'>
										{item.text}
									</p>
									<span className='text-[#003F62] font-normal text-sm'>
										{item.author}
									</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default News
