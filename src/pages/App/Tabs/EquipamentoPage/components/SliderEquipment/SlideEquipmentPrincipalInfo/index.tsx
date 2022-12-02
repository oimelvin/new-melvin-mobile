import React from 'react'

import { i18n } from '@languages/index'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import Field from '@components/Field'
import useEquipamento from '../../../equipamento.context'

const SlideEquipmentPrincipalInfo: React.FC = () => {
	const { equipamento } = useEquipamento()

	return (
		<ScrollView style={{ paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.mainInfo')}</SlideTitle>
			<MarginTop value={16} />
			<Field label={i18n.t('equipment.tag')} value={equipamento!.tag} />
			<MarginTop value={16} />
			<Field
				label={i18n.t('equipment.name')}
				value={equipamento!.descricao}
			/>
			<MarginTop value={16} />
			<Field
				label={i18n.t('equipment.families')}
				value={
					equipamento!.familias
						? equipamento!.familias.map(
								familia => familia.descricao
						  )
						: i18n.t('equipment.noData')
				}
			/>
		</ScrollView>
	)
}

export default SlideEquipmentPrincipalInfo
