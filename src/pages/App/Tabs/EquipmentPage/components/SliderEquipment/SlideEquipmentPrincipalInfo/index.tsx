import React from 'react'

import { i18n } from '@languages/index'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import Field from '@components/Field'
import useAtivo from '../../../ativo.context'

const SlideEquipmentPrincipalInfo: React.FC = () => {
	const { ativo } = useAtivo()

	return (
		<ScrollView style={{ paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.mainInfo')}</SlideTitle>
			<MarginTop value={16} />
			<Field label={i18n.t('equipment.tag')} value={ativo!.tag} />
			<MarginTop value={16} />
			<Field label={i18n.t('equipment.name')} value={ativo!.descricao} />
			<MarginTop value={16} />
			<Field
				label={i18n.t('equipment.families')}
				value={
          ativo!.familias
          	? ativo!.familias.map(familia => familia.descricao)
          	: i18n.t('equipment.noData')
				}
			/>
		</ScrollView>
	)
}

export default SlideEquipmentPrincipalInfo
