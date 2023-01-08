import { memo } from 'react'
import { Image, View } from 'react-native'
import { Avatar, ProgressBar } from 'react-native-paper'

import Icon from '@components/Icon'
import colors from '@styles/colors.style'
import { Text } from '@styles/global.style'
import { SolicitacaoServico } from '@models/SolicitacaoServico'
import IconButton from '@components/IconButton'

const SolicitacaoDetalheHeaderComponent: React.FC = () => {
	return (
		<View>
			<View>
				<IconButton provider="materialIcons" iconName="attach-file" />
				<Text>Anexos</Text>
			</View>
			<View>
				<IconButton provider="ionicons" iconName="chevron-back" />
				<Text>Abrir OS</Text>
			</View>
			<View>
				<IconButton provider="ionicons" iconName="chevron-back" />
				<Text>Editar</Text>
			</View>
			<View>
				<IconButton provider="ionicons" iconName="chevron-back" />
				<Text>Notificações</Text>
			</View>
			<View>
				<IconButton provider="ionicons" iconName="chevron-back" />
				<Text>Arquivar</Text>
			</View>
		</View>
	)
}

export default memo(SolicitacaoDetalheHeaderComponent)
