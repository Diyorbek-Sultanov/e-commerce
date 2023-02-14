import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={0}
		width={235}
		height={415}
		viewBox='0 0 235 415'
		backgroundColor='#ececf3'
		foregroundColor='#cdced6'
	>
		<rect x='-2' y='25' rx='8' ry='8' width='258' height='145' />
		<rect x='3' y='190' rx='5' ry='5' width='171' height='37' />
		<rect x='185' y='269' rx='0' ry='0' width='0' height='3' />
		<rect x='177' y='268' rx='0' ry='0' width='1' height='1' />
		<rect x='3' y='282' rx='5' ry='5' width='153' height='21' />
		<rect x='-1' y='244' rx='5' ry='5' width='103' height='21' />
		<rect x='51' y='253' rx='0' ry='0' width='17' height='6' />
		<rect x='4' y='321' rx='12' ry='12' width='180' height='40' />
		<rect x='107' y='329' rx='0' ry='0' width='22' height='7' />
	</ContentLoader>
)

export default Skeleton
