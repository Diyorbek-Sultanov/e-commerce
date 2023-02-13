import React from 'react'

const DisCount: React.FC = () => {
	return (
		<div className='bg-cover, bg-no-repeat bg-center sale h-[417px] relative rounded-[20px] overflow-hidden mb-24'>
			<div className='absolute top-11 right-11 text-center'>
				<button className='bg-yellow-500 rounded-[20px] text-white font-medium text-sm cursor-pointer px-6 py-3 mb-12'>
					New laptop
				</button>
				<h1 className='text-[#2E8FC5] font-bold text-4xl mb-3'>
					Sale up to 50% off
				</h1>
				<p className='text-white text-lg font-medium mb-8'>
					12 inch hd display
				</p>
				<button className='bg-yellow-500 rounded-[20px] text-white font-medium text-sm cursor-pointer px-6 py-3'>
					Shop now
				</button>
			</div>
		</div>
	)
}

export default DisCount
