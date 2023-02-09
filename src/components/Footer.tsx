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
						className='absolute top-[50%] right-8 translate-y-[-50%] cursor-pointer'
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

			<div className='flex flex-row items-center gap-x-20'>
				<div className='flex flex-col gap-y-6'>
					<img className='w-36 h-10' src={FooterLogo} alt='header-logo' />
					<p className='text-sm font-normal text-[#1B5A7D]'>
						64 st james boulevard <br /> hoswick , ze2 7zj
					</p>
					<hr />
					<div className='flex flex-row gap-x-9'>
						<BsGoogle fontSize={24} />
						<BsInstagram fontSize={24} />
						<BsWhatsapp fontSize={24} />
					</div>
				</div>

				<div className='grid grid-cols-3 w-full justify-items-center'>
					<div>
						<h1 className='text-[#1B5A7D] font-semibold text-lg mb-3'>
							Find product
						</h1>
						<ul className='list-disc marker:text-[#D9D9D9]'>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Brownze arnold
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Chronograph blue
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Smart phones
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Automatic watch
							</li>
							<li className='text-[#1B5A7D] font-normal text-lg'>
								Hair straighteners
							</li>
						</ul>
					</div>

					<div>
						<h1 className='text-[#1B5A7D] font-semibold text-lg mb-3'>
							Get help
						</h1>
						<ul className='list-disc marker:text-[#D9D9D9]'>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								About us
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Contact us
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Return policy
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Privacy policy
							</li>
							<li className='text-[#1B5A7D] font-normal text-lg'>
								Payment policy
							</li>
						</ul>
					</div>

					<div>
						<h1 className='text-[#1B5A7D] font-semibold text-lg mb-3'>
							About us
						</h1>
						<ul className='list-disc marker:text-[#D9D9D9]'>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>News</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Service
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Our policy
							</li>
							<li className='mb-4 text-[#1B5A7D] font-normal text-lg'>
								Custmer care
							</li>
							<li className='text-[#1B5A7D] font-normal text-lg'>Faq’s</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
