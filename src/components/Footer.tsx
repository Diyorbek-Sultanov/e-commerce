import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsGoogle, BsInstagram, BsWhatsapp } from 'react-icons/bs'

import HeadPhone from '../assets/headphone.svg'
import FooterLogo from '../assets/footer-logo.svg'

const Footer: React.FC = () => {
	return (
		<footer className='mt-auto bg-[#E2F4FF] py-11 px-[60px] flex flex-col gap-y-10'>
			<div className='w-full bg-white py-12 px-16 flex flex-row items-center justify-between rounded-3xl'>
				<h1 className='font-bold text-3xl text-[#1B5A7D]'>
					Subscribe newsletter
				</h1>
				<label className='relative' htmlFor='email'>
					<input
						className='w-80 font-medium text-sm bg-yellow-500 py-5 px-6 text-white placeholder:text-white rounded-[20px]'
						type='email'
						placeholder='Email address'
						id='email'
					/>
					<RiSendPlaneFill
						className='absolute top-[50%] right-8 translate-y-[-50%]'
						fill='#fff'
					/>
				</label>
				<div className='flex flex-row items-center gap-x-5'>
					<img src={HeadPhone} alt='headphone' />
					<p className='text-[#606060] text-sm font-semibold'>
						Call us 24/7 : <br /> (+62) 0123 567 789
					</p>
				</div>
			</div>

			<div className='flex flex-row'>
				<div className='flex flex-col gap-y-6'>
					<img className='w-36 h-10' src={FooterLogo} alt='header-logo' />
					<p className='text-sm font-normal text-[#1B5A7D]'>
						64 st james boulevard <br /> hoswick , ze2 7zj
					</p>
					<hr />
					<div className='flex flex-row gap-x-9'>
						<BsGoogle />
						<BsInstagram />
						<BsWhatsapp />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
