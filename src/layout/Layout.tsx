import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Footer } from '../components'

const Layout: React.FC = () => {
	return (
		<div className='max-w-[1315px] mx-auto px-3 overflow-hidden min-h-screen flex flex-col'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
