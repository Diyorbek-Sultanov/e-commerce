import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/Home'

const ProductDetail = React.lazy(() => import('./pages/ProductDetail'))

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route
					path='product-detail/:id'
					element={
						<React.Suspense fallback={<div>Loading...</div>}>
							<ProductDetail />
						</React.Suspense>
					}
				/>
			</Route>
		</Routes>
	)
}

export default App
