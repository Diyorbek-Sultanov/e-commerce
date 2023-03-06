import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { useAppSelector, useAppDispatch } from '../app/hooks'
import { setCategory } from '../store/slice/categorySlice'

const categories = ['Cameras', 'Laptops', 'Tablets', 'Mouse']

const Category: React.FC = () => {
	const { categoryId } = useAppSelector(state => state.category)
	const dispatch = useAppDispatch()

	const activeClasses =
		'text-[#1B5A7D] font-medium text-base border-solid border-2 border-sky-500 rounded-[20px] py-2 px-7 cursor-pointer'
	const notActiveClasses =
		'text-[#1B5A7D] font-medium text-base border-solid border-2 border-[#B5B5B5] rounded-[20px] py-2 px-7 cursor-pointer'

	const onClickCategory = (i: number) => {
		dispatch(setCategory(i))
	}

	const textAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visibble: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}

	return (
		<motion.div
			initial='hidden'
			whileInView='visibble'
			className='flex flex-row items-center justify-between mb-12'
		>
			<motion.h1
				variants={textAnimation}
				custom={2}
				className='text-[#1B5A7D] text-2xl font-semibold'
			>
				Popular products
			</motion.h1>
			<motion.ul
				custom={2}
				variants={textAnimation}
				className='flex flex-row gap-x-3'
			>
				{categories.map((item, i) => (
					<li
						className={clsx(
							categoryId === i ? activeClasses : notActiveClasses,
						)}
						key={i}
						onClick={() => onClickCategory(i)}
					>
						{item}
					</li>
				))}
			</motion.ul>
		</motion.div>
	)
}

export default Category
