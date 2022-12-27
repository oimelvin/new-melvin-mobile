import styled from 'styled-components/native'

import colors from '@styles/colors.style'

export const DetalhesOrdemServicoPageContainer = styled.ScrollView`
	flex: 1;
	padding: 16px;
	background-color: ${colors.white};
`

export const DetalhesOrdemServicoContainer = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`

export const DetalhesOrdemServicoColunaInformacoes = styled.View`
	width: 50%;
`
