import React, { useEffect, useState } from 'react'
import { Alert, Vibration } from 'react-native'

import { i18n } from '@languages/index'

import useEquipamento from '../../../equipamento.context'

import { MarginTop, ScrollView, SlideTitle } from '@styles/global.style'
import colors from '@styles/colors.style'
import Icon from '@components/Icon'
import Loading from '@components/Loading'
import { Accordion } from './components/Accordion/styles'
import ModalCaracteristicas from './components/ModalCaracteristicas'

import { ConjuntoEquipamento } from '@models/ConjuntoEquipamento'
import useConjuntoEquipamentoService from '@services/useConjuntoEquipamentoService.hook'
import ListaConjuntos from './components/ListaConjuntos'

const SlideEquipmentCharacteristics: React.FC = () => {
	const { equipamento } = useEquipamento()

	const [loading, setLoading] = useState(false)
	const [conjuntos, setConjuntos] = useState<ConjuntoEquipamento[] | null>(
		null
	)

	const [modalCaracteristicasVisible, setModalCaracteristicasVisible] =
		useState(false)
	const [idSelecionado, setIdSelecionado] = useState<string | null>(null)
	const [tipo, setTipo] = useState<'A' | 'C' | 'S' | null>(null)
	const [tituloModal, setTituloModal] = useState<string | null>(null)
	const [subTituloModal, setSubTituloModal] = useState<string | null>(null)

	const { getConjuntosEquipamentoById } = useConjuntoEquipamentoService()

	useEffect(() => {
		const loadConjuntos = async () => {
			try {
				setLoading(true)

				if (equipamento) {
					setConjuntos(
						await getConjuntosEquipamentoById(equipamento.id)
					)
				}
			} catch (error) {
				Alert.alert(
					i18n.t('common.error'),
					i18n.t('common.anErrorHasOccuredPleaseTryAgain')
				)
			} finally {
				setLoading(false)
			}
		}

		loadConjuntos()
	}, [])

	const renderIconRight = ({ isExpanded }: { isExpanded: boolean }) => (
		<Icon
			color={colors.black}
			provider={'materialCommunityIcons'}
			iconName={isExpanded ? 'chevron-down' : 'chevron-right'}
		/>
	)

	const showModalCaracteristicas = (
		id: string,
		tipo: 'A' | 'C' | 'S',
		tituloModal: string,
		subTituloModal: string
	) => {
		Vibration.vibrate(200)

		setIdSelecionado(id)
		setTipo(tipo)
		setTituloModal(tituloModal)
		setSubTituloModal(subTituloModal)
		setModalCaracteristicasVisible(true)
	}

	const hideModalCaracteristicas = () => {
		setIdSelecionado(null)
		setTipo(null)
		setTituloModal(null)
		setSubTituloModal(null)
		setModalCaracteristicasVisible(false)
	}

	return (
		<>
			<ScrollView style={{ paddingHorizontal: 16 }}>
				<SlideTitle>
					{i18n.t('equipment.characteristics.title')}
				</SlideTitle>
				<MarginTop value={16} />
				{loading ? (
					<Loading />
				) : (
					equipamento && (
						<Accordion
							id={equipamento.id}
							title={equipamento.tag}
							description={equipamento.descricao}
							right={renderIconRight}
							onLongPress={() =>
								showModalCaracteristicas(
									equipamento.id,
									'A',
									equipamento.tag,
									equipamento.descricao
								)
							}
						>
							<ListaConjuntos
								conjuntos={conjuntos}
								iconRight={renderIconRight}
								onLongPress={showModalCaracteristicas}
							/>
						</Accordion>
					)
				)}
				{idSelecionado && tipo && (
					<ModalCaracteristicas
						visible={modalCaracteristicasVisible}
						onDismiss={hideModalCaracteristicas}
						idSelecionado={idSelecionado}
						tipo={tipo}
						tituloModal={tituloModal}
						subTituloModal={subTituloModal}
					/>
				)}
			</ScrollView>
		</>
	)
}

export default SlideEquipmentCharacteristics
