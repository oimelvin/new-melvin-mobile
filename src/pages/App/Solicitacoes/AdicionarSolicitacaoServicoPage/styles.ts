import styled from 'styled-components/native'

import colors from '@styles/colors.style'

export const AdicionarSolicitacaoPageContainer = styled.ScrollView.attrs({
	overScrollMode: 'never',
})`
	flex: 1;
	padding: 16px;
	padding-top: 0;
	background-color: ${colors.white};
`
