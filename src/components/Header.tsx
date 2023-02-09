import React from 'react'
import { BiMap, BiUser } from 'react-icons/bi'
import { TbTruck } from 'react-icons/tb'
import {
	AiOutlineArrowDown,
	AiOutlineHeart,
	AiOutlineShoppingCart,
} from 'react-icons/ai'

import headerLogo from '../assets/header-logo.svg'

const Header: React.FC = () => {
	return (
		<header className='flex flex-col'>
			<div className='flex flex-row justify-between items-center py-6'>
				<div className='font-normal text-base'>
					Need help? Call us: (+98) 0234 456 789
				</div>
				<div className='flex flex-row gap-x-6 '>
					<div className='flex flex-row gap-x-3 items-center'>
						<BiMap fontSize={24} />
						<span className='font-normal text-base'>Our store</span>
					</div>
					<div className='flex flex-row gap-x-3 items-center'>
						<TbTruck fontSize={24} />
						<span className='font-normal text-base'>Track your order</span>
					</div>
				</div>
			</div>

			<div className='flex flex-row justify-between items-center gap-x-10 bg-[#003F62] py-5 px-[65px] relative'>
				<div className='flex flex-row items-center gap-x-9'>
					<div>
						<img src={headerLogo} alt='header-logo' />
					</div>
					<form>
						<input
							className='font-normal text-sm text-[#292D32] py-4 px-5 rounded-[20px] w-[370px]'
							type='search'
							placeholder='Serach any things'
						/>
						<button
							className='bg-[#EDA415] font-semibold text-sm text-white py-[17px] px-8 rounded-[20px] absolute left-[43%]'
							type='submit'
						>
							Search
						</button>
					</form>
				</div>

				<ul className='flex flex-row gap-x-7'>
					<li className='flex flex-row gap-x-3 items-center'>
						<BiUser fontSize={24} fill='#fff' />
						<span className='text-white text-sm font-normal cursor-pointer'>
							Sign in
						</span>
					</li>
					<li className='flex flex-row gap-x-1 items-center'>
						<AiOutlineHeart
							fontSize={24}
							className='cursor-pointer'
							fill='#fff'
						/>
						<span className='text-white text-xs font-normal bg-yellow-500 py-1 px-2 flex rounded-full '>
							0
						</span>
					</li>
					<li className='flex flex-row gap-x-3 items-center '>
						<AiOutlineShoppingCart fontSize={24} fill='#fff' />
						<span className='text-white text-sm font-normal cursor-pointer'>
							Cart
						</span>
						<span className='text-white text-xs font-normal bg-yellow-500 py-1 px-2 flex rounded-full'>
							0
						</span>
					</li>
				</ul>
			</div>

			<div className='flex flex-row items-center justify-between'>
				<ul className='bg-yellow-500 cursor-pointer py-6 px-3'>
					<li className='font-medium text-base text-white flex flex-row items-center gap-x-3'>
						Browse categories <AiOutlineArrowDown fontSize={24} />
					</li>
				</ul>

				<ul className='flex flex-row items-center justify-between gap-x-7'>
					<li className='font-medium text-base text-black flex flex-row gap-x-4 items-center'>
						Home <AiOutlineArrowDown fontSize={24} />
					</li>
					<li className='font-medium text-base text-black flex flex-row gap-x-4 items-center'>
						Catalog <AiOutlineArrowDown fontSize={24} />
					</li>
					<li className='font-medium text-base text-black'>Blog</li>
					<li className='font-medium text-base text-black flex flex-row gap-x-4 items-center'>
						Pages <AiOutlineArrowDown fontSize={24} />
					</li>
					<li className='font-medium text-base text-black flex flex-row gap-x-4 items-center'>
						About us <AiOutlineArrowDown fontSize={24} />
					</li>
				</ul>
				<h3 className='text-[#003F62] text-base font-bold'>
					30 Days Free Return
				</h3>
			</div>
		</header>
	)
}

export default Header
