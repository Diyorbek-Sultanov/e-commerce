import React from 'react'
import { BiMap } from 'react-icons/bi'
import { TbTruck } from 'react-icons/tb'

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
						<BiMap />
						<span className='font-normal text-base'>Our store</span>
					</div>
					<div className='flex flex-row gap-x-3 items-center'>
						<TbTruck />
						<span className='font-normal text-base'>Track your order</span>
					</div>
				</div>
			</div>

			<div className='flex flex-row items-center gap-x-10 bg-[#003F62] py-5 px-[65px] relative'>
				<div>
					<img src={headerLogo} alt='header-logo' />
				</div>
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
			</div>
		</header>
	)
}

export default Header
