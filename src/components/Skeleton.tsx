import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => {
	return (
		<ContentLoader
			speed={3}
			width={235}
			height={350}
			viewBox='0 0 235 350'
			backgroundColor='#ececf3'
			foregroundColor='#cdced6'
		>
			<rect x='-7' y='42' rx='8' ry='8' width='190' height='145' />
			<rect x='5' y='196' rx='5' ry='5' width='171' height='37' />
			<rect x='185' y='269' rx='0' ry='0' width='0' height='3' />
			<rect x='177' y='268' rx='0' ry='0' width='1' height='1' />
			<rect x='6' y='280' rx='5' ry='5' width='153' height='21' />
			<rect x='7' y='242' rx='5' ry='5' width='103' height='21' />
			<rect x='55' y='254' rx='0' ry='0' width='22' height='8' />
			<rect x='57' y='257' rx='0' ry='0' width='17' height='4' />
		</ContentLoader>
	)
}

export default Skeleton
