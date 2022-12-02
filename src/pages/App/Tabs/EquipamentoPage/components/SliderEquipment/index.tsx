import React from 'react'
import { useTheme } from 'styled-components'

import { EquipmentMenuContainer } from './styles'

import Slider from '@components/Slider'
import SlideEquipmentPhoto from './SlideEquipmentPhoto'
import SlideEquipmentPrincipalInfo from './SlideEquipmentPrincipalInfo'
import SlideEquipmentOperacionalData from './SlideEquipmentOperacionalData'
import SlideEquipmentMaintenancePlan from './SlideEquipmentMaintenancePlan'
import SlideEquipmentCharacteristics from './SlideEquipmentCharacteristcs'
import SlideEquipmentDocuments from './SlideEquipmentDocuments'

const SliderEquipment: React.FC = () => {
	const theme = useTheme()

	const slidesData = [
		{
			id: '0',
			component: <SlideEquipmentPhoto />,
		},
		{
			id: '1',
			component: <SlideEquipmentPrincipalInfo />,
		},
		{
			id: '2',
			component: <SlideEquipmentOperacionalData />,
		},
		{
			id: '3',
			component: <SlideEquipmentMaintenancePlan />,
		},
		{ id: '4', component: <SlideEquipmentCharacteristics /> },
		{ id: '5', component: <SlideEquipmentDocuments /> },
	]

	return (
		<EquipmentMenuContainer>
			<Slider slides={slidesData} dotColor={theme.colors.title} />
		</EquipmentMenuContainer>
	)
}

export default SliderEquipment
