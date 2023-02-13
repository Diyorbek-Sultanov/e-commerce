import React from 'react'
import {
	AiOutlineHeart,
	AiOutlineStar,
	AiOutlineShoppingCart,
	AiOutlineEye,
} from 'react-icons/ai'

import { IProduct } from '../interfaces/interface'

const Product: React.FC<IProduct> = ({ id, name, image, price }) => {
	return (
		<div className='relative min-h-[300px] product'>
			<div className='py-3 px-6'>
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
			</div>

			<div className='product-card'>
				<button className='btn'>
					Add to cart
					<span className='bg-[#EDA415] p-[6.64px] rounded-full'>
						<AiOutlineShoppingCart fill='#fff' />
					</span>
				</button>
				<div className='bg-[#87BCD9] rounded-[20px] py-[18px] px-7 cursor-pointer'>
					<AiOutlineEye fontSize={24} />
				</div>
			</div>
		</div>
	)
}

export default Product
