import React, { useState } from 'react'
import { View } from 'react-native'

import { i18n, moment } from '@languages/index'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import Field from '@components/Field'
import useAtivo from '../../../ativo.context'

const SlideEquipmentOperacionalData: React.FC = () => {
	const [width, setWidth] = useState(0)

	const { ativo } = useAtivo()

	const convertDate = (date: Date | undefined) => {
		if (!date) {
			return i18n.t('equipment.noData')
		}

		return moment(date).format('L')
	}

	return (
		<ScrollView style={{ paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.operatingData')}</SlideTitle>
			<MarginTop value={16} />
			<View
				onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width - 16)}
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<View style={{ width: width / 2 }}>
					<Field
						label={i18n.t('equipment.startOperation')}
						value={convertDate(ativo!.inicioOperacao)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.uptime')}
						value={[
							`${ativo!.horasDia} ${i18n.t('equipment.hoursADay')}`,
							`${ativo!.diasSemana} ${i18n.t('equipment.daysAWeek')}`,
						]}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.criticality')}
						value={ativo!.criticidadeTotalTexto || i18n.t('equipment.noData')}
					/>
				</View>
				<View style={{ width: width / 2 }}>
					<Field
						label={i18n.t('equipment.underWarrantyUntil')}
						value={convertDate(ativo!.garantia?.dataGarantia)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.supplier')}
						value={
              ativo!.garantia?.fornecedor?.nome || i18n.t('equipment.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.underContractUntil')}
						value={convertDate(ativo!.contrato?.dataFimContrato)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.supplier')}
						value={
              ativo!.contrato?.fornecedor?.nome || i18n.t('equipment.noData')
						}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default SlideEquipmentOperacionalData
