import React, { useEffect, useState } from 'react'
import { Alert, Vibration } from 'react-native'
import { FAB } from 'react-native-paper'

import { i18n } from '@languages/index'

import useAtivo from '../../../ativo.context'

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
	const { ativo } = useAtivo()

	const [loading, setLoading] = useState(false)
	const [conjuntos, setConjuntos] = useState<ConjuntoEquipamento[] | null>(null)

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
				setConjuntos(await getConjuntosEquipamentoById(ativo!.id))
			} catch (error) {
				console.log(error)
				Alert.alert('Erro', 'Ocorreu um erro')
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
				<SlideTitle>{i18n.t('equipment.characteristics.title')}</SlideTitle>
				<MarginTop value={16} />
				{loading ? (
					<Loading />
				) : (
					<Accordion
						id={ativo!.id}
						title={ativo!.tag}
						description={ativo!.descricao}
						right={renderIconRight}
						onLongPress={() =>
							showModalCaracteristicas(
                ativo!.id,
                'A',
                ativo!.tag,
                ativo!.descricao
							)
						}
					>
						<ListaConjuntos
							conjuntos={conjuntos}
							iconRight={renderIconRight}
							onLongPress={showModalCaracteristicas}
						/>
					</Accordion>
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
