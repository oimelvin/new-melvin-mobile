import React from 'react'
import { View } from 'react-native'

import { MarginRight, MarginTop } from '@styles/global.style'
import { Container, EquipamentoName } from './styles'
import IconButton from '@components/IconButton'
import colors from '@styles/colors.style'
import Field from '@components/Field'

import { i18n, moment } from '@languages/index'
import { OrdemServicoIndisponibilidade } from '@models/OrdemServicoIndisponibilidade'

type IndisponibilidadeProps = {
	indisponibilidade: OrdemServicoIndisponibilidade
	onEditarIndisponibilidade: () => Promise<void>
	onExcluirIndisponibilidade: () => Promise<void>
}

const IndisponibilidadeComponent: React.FC<IndisponibilidadeProps> = ({
	indisponibilidade,
	onEditarIndisponibilidade,
	onExcluirIndisponibilidade,
}) => (
	<Container>
		<View style={{ flex: 1 }}>
			<EquipamentoName>{`${indisponibilidade.equipamento?.tag} - ${indisponibilidade.equipamento?.descricao}`}</EquipamentoName>
			<MarginTop value={16} />
			<Field
				label={i18n.t('workOrderUnavailability.start')}
				value={`${moment(indisponibilidade.dataInicio).format(
					'L'
				)} ${moment(indisponibilidade.dataInicio).format('LT')}`}
			/>
			<MarginTop value={5} />
			<Field
				label={i18n.t('workOrderUnavailability.finish')}
				value={`${moment(indisponibilidade.dataFim).format(
					'L'
				)} ${moment(indisponibilidade.dataFim).format('LT')}`}
			/>
		</View>
		<View style={{ flexDirection: 'row' }}>
			<IconButton
				provider="materialIcons"
				iconName="edit"
				color={colors.cyan}
				onPress={onEditarIndisponibilidade}
			/>
			<MarginRight value={5} />
			<IconButton
				provider="materialCommunityIcons"
				iconName="trash-can"
				color={colors.red}
				onPress={onExcluirIndisponibilidade}
			/>
		</View>
	</Container>
)

export default IndisponibilidadeComponent
