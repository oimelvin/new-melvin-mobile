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
import { OrdemServico } from '@models/OrdemServico'

interface OrdemServicoProps {
	ordemServico: OrdemServico
}

const OrdemServicoComponent: React.FC<OrdemServicoProps> = ({
	ordemServico: {
		descricao,
		codOrdem,
		prioridade,
		ordemEquipamentos,
		status,
	},
}) => {
	const descricaoEquipamento =
		ordemEquipamentos.length > 1
			? 'Vários Equipamentos'
			: `${ordemEquipamentos[0].equipamento.tag} - ${ordemEquipamentos[0].equipamento.descricao}`

	return (
		<ButtonOpacity
			onPress={() =>
				Alert.alert(
					'Detalhes da ordem de serviço',
					'Funcionalidade ainda não implementada.'
				)
			}
		>
			<Container>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
						OS: {codOrdem}
					</Text>
					<View
						style={{
							flexDirection: 'row',
						}}
					>
						<Icon
							provider="materialIcons"
							iconName="warning"
							color={colors.red}
							size={24}
						/>
						<MarginRight value={16} />
						<Icon
							provider="materialIcons"
							iconName="calendar-today"
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
					<Text>{descricaoEquipamento}</Text>
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
