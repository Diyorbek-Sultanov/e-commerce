import React from 'react'
import { motion } from 'framer-motion'

import { useProduct } from '../app/hooks'

import {
	Category,
	DisCount,
	News,
	MProduct,
	Skeleton,
	Slider,
	SliderProduct,
	TestimonialSlider,
} from '../components'
import Delevry from '../assets/delevry.png'
import Quality from '../assets/quality.png'
import Warranty from '../assets/waranty.png'
import Tech from '../assets/tech.png'

const Home: React.FC = () => {
	const { isLoading, product } = useProduct()

	const skeleton = [...new Array(8)].map((_, i) => <Skeleton key={i} />)

	const ProductAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visibble: (custom: number) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.1 },
		}),
	}

	return (
		<div className='h-full w-full mb-40'>
			<Slider />
			<SliderProduct />
			<Category />
			<motion.div
				initial='hidden'
				whileInView='visibble'
				viewport={{ amount: 0.4 }}
				className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center items-center mb-28'
			>
				{isLoading ? (
					skeleton
				) : product?.length ? (
					product?.map((item, i) => (
						<MProduct
							custom={i + 1}
							variants={ProductAnimation}
							key={i}
							{...item}
						/>
					))
				) : (
					<div>Elements Not Fount</div>
				)}
			</motion.div>
			<DisCount />
			<div className='flex flex-row justify-around rounded-[20px] py-11 bg-[#E2F4FF] mb-[75px]'>
				<div className='flex flex-row'>
					<img src={Delevry} alt='delev' />
					<div className='ml-8'>
						<p className='text-[#003F62] font-semibold text-xl'>
							Free delivery
						</p>
						<span className='text-[#003F62] font-normal text-lg'>
							on order above $50,00
						</span>
					</div>
				</div>
				<div className='flex flex-row'>
					<img src={Quality} alt='delev' />
					<div className='ml-8'>
						<p className='text-[#003F62] font-semibold text-xl'>
							Free delivery
						</p>
						<span className='text-[#003F62] font-normal text-lg'>
							on order above $50,00
						</span>
					</div>
				</div>
				<div className='flex flex-row'>
					<img src={Warranty} alt='delev' />
					<div className='ml-8'>
						<p className='text-[#003F62] font-semibold text-xl'>
							Free delivery
						</p>
						<span className='text-[#003F62] font-normal text-lg'>
							on order above $50,00
						</span>
					</div>
				</div>
			</div>
			<div className='mb-16'>
				<TestimonialSlider />
			</div>
			<div className='flex flex-row justify-around bg-[#E2F4FF] py-12 mb-32'>
				<img src={Tech} alt='tech' />
				<img src={Tech} alt='tech' />
				<img src={Tech} alt='tech' />
				<img src={Tech} alt='tech' />
				<img src={Tech} alt='tech' />
			</div>
			<News />
		</div>
	)
}

export default Home
