import styled from 'styled-components/native'

import { Title } from '@styles/global.style'
import colors from '@styles/colors.style'

export const OrdemServicoContainer = styled.View`
	flex: 1;
	justify-content: flex-end;
	padding: 16px;
`

export const OrdemServicoTitle = styled(Title)`
	font-weight: normal;
	color: ${colors.white};
	text-transform: none;
`

export const AcessoRapidoOrdemServicoContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 32px;
`
