import React from 'react'

import {
	ConformidadeSelectButtonOpacity,
	ConformidadeSelectContainer,
	ConformidadeSelectText,
} from './styles'

type AcaoProps = {
	type: 'C' | 'NC'
	selected?: boolean
}

const ConformidadeSelect: React.FC<AcaoProps> = ({ type, selected }) => (
	<ConformidadeSelectButtonOpacity>
		<ConformidadeSelectContainer>
			<ConformidadeSelectText type={type} selected={selected}>
				{type === 'C' ? 'Conforme' : 'Não conforme'}
			</ConformidadeSelectText>
		</ConformidadeSelectContainer>
	</ConformidadeSelectButtonOpacity>
)

export default ConformidadeSelect
