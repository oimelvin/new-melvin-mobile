import React, { useEffect, useState } from 'react'

import { i18n } from '@languages/index'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import useEquipamento from '../../../equipamento.context'
import useFmpService from '@services/useFmpService.hook'
import { Fmp } from '@models/Fmp'
import FmpComponent from './components/FmpComponent'

const SlideEquipmentMaintenancePlan: React.FC = () => {
	const { equipamento } = useEquipamento()

	const [fmps, setFmps] = useState<Fmp[] | null>(null)

	const { getFmpsByIdEquipamento } = useFmpService()

	useEffect(() => {
		const loadFmps = async () => {
			setFmps(await getFmpsByIdEquipamento(equipamento!.id))
		}

		loadFmps()
	}, [])

	return (
		<ScrollView style={{ paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.maintenancePlan')}</SlideTitle>
			<MarginTop value={16} />
			{fmps?.map(fmp => (
				<FmpComponent
					key={fmp.id}
					title={fmp.tagFmp}
					description={fmp.descricaoOS}
				/>
			))}
		</ScrollView>
	)
}

export default SlideEquipmentMaintenancePlan
