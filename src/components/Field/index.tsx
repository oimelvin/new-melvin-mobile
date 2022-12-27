import React from 'react'

import { MarginLeft } from '@styles/global.style'
import { FieldContainer, Label, Li, Ul, Value } from './styles'

type FieldProps = {
	label: string
	value: string | string[]
}

const Field: React.FC<FieldProps> = ({ label, value }) => {
	const renderValue = () => {
		if (typeof value === 'string') {
			return <Value>{value}</Value>
		}

		return (
			<Ul>
				{value.map((v, i) => (
					<Li key={i}>
						<Value>{'\u2022'}</Value>
						<MarginLeft value={10} />
						<Value>{v}</Value>
					</Li>
				))}
			</Ul>
		)
	}

	return (
		<FieldContainer>
			<Label>{label}</Label>
			{renderValue()}
		</FieldContainer>
	)
}

export default Field
