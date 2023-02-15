import React from 'react'
import { useParams } from 'react-router-dom'

import { useProdutById } from '../app/hooks'

const ProductDetail: React.FC = () => {
	const { id } = useParams()
	const { data } = useProdutById(Number(id))

	console.log(data?.name)

	return <div>ProductDetail</div>
}

export default ProductDetail
