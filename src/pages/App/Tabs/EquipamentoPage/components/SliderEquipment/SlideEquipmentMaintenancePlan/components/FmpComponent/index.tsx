import React from 'react'

import { Container } from '@styles/global.style'
import { FmpTitle, FmpDescription } from './styles'

type FmpProps = {
  title: string
  description: string
}

const FmpComponent: React.FC<FmpProps> = ({ title, description }) => {
	return (
		<Container>
			<FmpTitle>{title}</FmpTitle>
			<FmpDescription>{description}</FmpDescription>
		</Container>
	)
}

export default FmpComponent
