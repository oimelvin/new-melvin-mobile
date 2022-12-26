import { memo } from 'react'
import { Alert, View } from 'react-native'
import { Avatar, ProgressBar } from 'react-native-paper'

import Icon from '@components/Icon'
import colors from '@styles/colors.style'
import {
	ButtonOpacity,
	Container,
	MarginRight,
	MarginTop,
	Text,
} from '@styles/global.style'
import { SolicitacaoServico } from '@models/SolicitacaoServico'

const SolicitacaoDetalheHeaderComponent: React.FC = () => {
	return (
		<View><Text>Teste</Text></View>
	)
}

export default memo(SolicitacaoDetalheHeaderComponent)
