import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
	AiOutlineHeart,
	AiOutlineStar,
	AiOutlineShoppingCart,
	AiOutlineEye,
} from 'react-icons/ai'

import { IProduct } from '../interfaces/interface'

const Product: React.FC<IProduct> = React.forwardRef<HTMLDivElement, IProduct>(
	({ id, name, image, price }, ref) => {
		return (
			<div
				ref={ref}
				className='relative product max-h-[415px] testi rounded-[20px] py-3 px-6'
			>
				<div className='max-w-[187px] mb-3'>
					<img className='w-full h-full object-cover' src={image} alt='name' />
				</div>
				<div className='flex flex-row items-center justify-center cursor-pointer bg-[#B3D4E5] rounded-full absolute top-[26px] right-[10px] p-[6.55px]'>
					<AiOutlineHeart />
				</div>
				<div className='flex flex-col gap-y-4 product-hide'>
					<span className='text-[#003F62] font-medium text-base'>{name}</span>
					<span className='text-[#4A4A4A] text-base font-semibold'>
						${price}
					</span>
					<div className='flex flex-row gap-x-3'>
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
				</div>

				<div className='product-card mt-5'>
					<button className='btn'>
						Add to cart
						<span className='bg-[#EDA415] p-[6.64px] rounded-full'>
							<AiOutlineShoppingCart fill='#fff' />
						</span>
					</button>
					<Link
						to={`/product-detail/${id}`}
						className='bg-[#87BCD9] rounded-[20px] py-[18px] px-7 cursor-pointer'
					>
						<AiOutlineEye fontSize={24} />
					</Link>
				</div>
			</div>
		)
	},
)

const MProduct = motion(Product)

export default MProduct
