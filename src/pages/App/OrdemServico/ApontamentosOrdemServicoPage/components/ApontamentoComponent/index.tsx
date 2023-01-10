import React from 'react'
import { View } from 'react-native'

import { MarginRight, MarginTop } from '@styles/global.style'
import { Container, ExecutanteName } from './styles'
import IconButton from '@components/IconButton'
import colors from '@styles/colors.style'
import Field from '@components/Field'

import { i18n, moment } from '@languages/index'
import { OrdemServicoApontamento } from '@models/OrdemServicoApontamento'

type ApontamentoProps = {
	apontamento: OrdemServicoApontamento
	onEditarApontamento: () => Promise<void>
	onExcluirApontamento: () => Promise<void>
}

const ApontamentoComponent: React.FC<ApontamentoProps> = ({
	apontamento,
	onEditarApontamento,
	onExcluirApontamento,
}) => (
	<Container>
		<View style={{ flex: 1 }}>
			<ExecutanteName>{apontamento.executante}</ExecutanteName>
			<MarginTop value={16} />
			<Field
				label={i18n.t('workOrderEntries.start')}
				value={`${moment(apontamento.dataInicio).format('L')} ${moment(
					apontamento.dataInicio
				).format('LT')}`}
			/>
			<MarginTop value={5} />
			<Field
				label={i18n.t('workOrderEntries.finish')}
				value={`${moment(apontamento.dataFim).format('L')} ${moment(
					apontamento.dataFim
				).format('LT')}`}
			/>
		</View>
		<View style={{ flexDirection: 'row' }}>
			<IconButton
				provider="materialIcons"
				iconName="edit"
				color={colors.cyan}
				onPress={onEditarApontamento}
			/>
			<MarginRight value={5} />
			<IconButton
				provider="materialCommunityIcons"
				iconName="trash-can"
				color={colors.red}
				onPress={onExcluirApontamento}
			/>
		</View>
	</Container>
)

export default ApontamentoComponent
