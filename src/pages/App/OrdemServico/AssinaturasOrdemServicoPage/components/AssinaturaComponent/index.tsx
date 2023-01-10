import React from 'react'
import { View } from 'react-native'

import { MarginTop } from '@styles/global.style'
import { Container, EquipamentoName } from './styles'
import IconButton from '@components/IconButton'
import colors from '@styles/colors.style'
import Field from '@components/Field'

import { i18n } from '@languages/index'
import { OrdemServicoAssinatura } from '@models/OrdemServicoAssinatura'

type AssinaturaProps = {
	assinatura: OrdemServicoAssinatura
	onExcluirAssinatura: () => Promise<void>
}

const AssinaturaComponent: React.FC<AssinaturaProps> = ({
	assinatura,
	onExcluirAssinatura,
}) => (
	<Container>
		<View style={{ flex: 1 }}>
			<EquipamentoName>{assinatura.assinatura?.nome}</EquipamentoName>
			<MarginTop value={16} />
			<Field
				label={i18n.t('workOrderSignatures.image')}
				value={
					assinatura.imagem
						? i18n.t('common.yes')
						: i18n.t('common.no')
				}
			/>
		</View>
		<IconButton
			provider="materialCommunityIcons"
			iconName="trash-can"
			color={colors.red}
			onPress={onExcluirAssinatura}
		/>
	</Container>
)

export default AssinaturaComponent
