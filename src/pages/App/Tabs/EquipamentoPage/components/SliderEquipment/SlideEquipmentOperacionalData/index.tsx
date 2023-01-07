import React, { useState } from 'react'
import { View } from 'react-native'

import { i18n, moment } from '@languages/index'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import Field from '@components/Field'
import useEquipamento from '../../../equipamento.context'

const SlideEquipmentOperacionalData: React.FC = () => {
	const [width, setWidth] = useState(0)

	const { equipamento } = useEquipamento()

	const convertDate = (date: Date | undefined) => {
		if (!date) {
			return i18n.t('common.noData')
		}

		return moment(date).format('L')
	}

	return (
		<ScrollView style={{ paddingHorizontal: 16 }}>
			<SlideTitle>{i18n.t('equipment.operatingData')}</SlideTitle>
			<MarginTop value={16} />
			<View
				onLayout={({ nativeEvent }) =>
					setWidth(nativeEvent.layout.width - 16)
				}
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<View style={{ width: width / 2 }}>
					<Field
						label={i18n.t('equipment.startOperation')}
						value={convertDate(equipamento!.inicioOperacao)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.uptime')}
						value={[
							`${equipamento!.horasDia} ${i18n.t(
								'equipment.hoursADay'
							)}`,
							`${equipamento!.diasSemana} ${i18n.t(
								'equipment.daysAWeek'
							)}`,
						]}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.criticality')}
						value={
							equipamento!.criticidadeTotalTexto ||
							i18n.t('common.noData')
						}
					/>
				</View>
				<View style={{ width: width / 2 }}>
					<Field
						label={i18n.t('equipment.underWarrantyUntil')}
						value={convertDate(equipamento!.garantia?.dataGarantia)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.supplier')}
						value={
							equipamento!.garantia?.fornecedor?.nome ||
							i18n.t('common.noData')
						}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.underContractUntil')}
						value={convertDate(
							equipamento!.contrato?.dataFimContrato
						)}
					/>
					<MarginTop value={16} />
					<Field
						label={i18n.t('equipment.supplier')}
						value={
							equipamento!.contrato?.fornecedor?.nome ||
							i18n.t('common.noData')
						}
					/>
				</View>
			</View>
		</ScrollView>
	)
}

export default SlideEquipmentOperacionalData
