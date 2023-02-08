import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

import Header from '../components/Header'

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
