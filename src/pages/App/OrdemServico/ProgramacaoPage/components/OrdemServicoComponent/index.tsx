import { memo } from 'react'
import { View } from 'react-native'
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
import { OrdemServico } from '@models/OrdemServico'

interface OrdemServicoProps {
	ordemServico: OrdemServico
	onPressOrdemServico(id: string): void
}

const OrdemServicoComponent: React.FC<OrdemServicoProps> = ({
	ordemServico: {
		id,
		descricao,
		codOrdem,
		prioridade,
		ordemEquipamentos,
		status,
	},
	onPressOrdemServico,
}) => {
	const equipamentoDescricao =
		ordemEquipamentos.length > 1
			? 'Vários Equipamentos'
			: `${ordemEquipamentos[0].equipamento?.tag} - ${ordemEquipamentos[0].equipamento?.descricao}`

	const prioridadeCor = () => {
		const cores = ['blue', 'orange', 'purple', 'green', 'red']

		return cores[prioridade.idCor - 1]
	}

	const prioridadeIcone = () => {
		const icones = [
			'warning',
			'info-circle',
			'thumbs-up',
			'thumbs-down',
			'square',
			'bolt',
			'heart',
		]

		return icones[prioridade.idIcone - 1]
	}

	const statusIcone = () => {
		const icones = [
			'calendar-blank',
			'calendar-check',
			'calendar-refresh',
			'calendar-text',
			'play-circle-outline',
			'folder',
			'calendar-remove',
		]

		return icones[status - 1]
	}

	return (
		<ButtonOpacity onPress={() => onPressOrdemServico(id)}>
			<Container>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
						#{codOrdem}
					</Text>
					<View
						style={{
							flexDirection: 'row',
						}}
					>
						<Icon
							provider="fontAwesome"
							iconName={prioridadeIcone()}
							color={prioridadeCor()}
							size={24}
						/>
						<MarginRight value={16} />
						<Icon
							provider="materialCommunityIcons"
							iconName={statusIcone()}
							size={24}
						/>
						<MarginRight value={16} />
						<Avatar.Text
							size={24}
							label="C"
							style={{ backgroundColor: colors.gray900 }}
						/>
					</View>
				</View>
				<MarginTop value={16} />
				<View>
					<Text style={{ fontWeight: 'bold' }}>{descricao}</Text>
				</View>
				<MarginTop value={16} />
				<View>
					<Text>{equipamentoDescricao}</Text>
				</View>
				<MarginTop value={16} />
				<View>
					<ProgressBar
						progress={status / 7}
						color={colors.green}
						style={{
							backgroundColor: colors.gray100,
							borderRadius: 16,
						}}
					/>
				</View>
			</Container>
		</ButtonOpacity>
	)
}

export default memo(OrdemServicoComponent)
