import React, { useEffect, useState } from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Modal, Portal } from 'react-native-paper'

import { MarginBottom, SubTitle, Text } from '@styles/global.style'
import { Caracteristica } from '@models/Caracteristica'
import colors from '@styles/colors.style'
import Field from '@components/Field'
import IconButton from '@components/IconButton'
import Loading from '@components/Loading'

import useEquipamentoService from '@services/useOrdemServicoService.hook'
import useConjuntoEquipamentoService from '@services/useConjuntoEquipamentoService.hook'
import useSubConjuntoEquipamentoService from '@services/useSubConjuntoEquipamentoService.hook'

interface ModalCaracteristicasProps {
	visible: boolean
	onDismiss(): void
	idSelecionado: string
	tipo: 'A' | 'C' | 'S'
	tituloModal?: string | null
	subTituloModal?: string | null
}

const ModalCaracteristicas: React.FC<ModalCaracteristicasProps> = ({
	visible,
	onDismiss,
	idSelecionado,
	tipo,
	tituloModal,
	subTituloModal,
}) => {
	const [loading, setLoading] = useState(false)
	const [caracteristicas, setCaracteristicas] = useState<
		Caracteristica[] | null
	>(null)

	const { getCaracteristicasEquipamentoById } = useEquipamentoService()
	const { getCaracteristicasConjuntoEquipamentoById } =
		useConjuntoEquipamentoService()
	const { getCaracteristicasSubConjuntoEquipamentoById } =
		useSubConjuntoEquipamentoService()

	useEffect(() => {
		const loadCaracteristicas = async () => {
			try {
				setLoading(true)

				if (idSelecionado && tipo) {
					let caracteristicas = null

					switch (tipo) {
						case 'A':
							caracteristicas =
								await getCaracteristicasEquipamentoById(
									idSelecionado
								)
							break
						case 'C':
							caracteristicas =
								await getCaracteristicasConjuntoEquipamentoById(
									idSelecionado
								)
							break
						case 'C':
							caracteristicas =
								await getCaracteristicasSubConjuntoEquipamentoById(
									idSelecionado
								)
							break
					}

					setCaracteristicas(caracteristicas)
				}
			} catch (error) {
				console.log(error)
				Alert.alert('Erro', 'Ocorreu um erro')
			} finally {
				setLoading(false)
			}
		}

		loadCaracteristicas()
	}, [idSelecionado, tipo])

	return (
		<Portal>
			<Modal
				visible={visible}
				onDismiss={onDismiss}
				contentContainerStyle={{
					backgroundColor: colors.white,
					maxHeight: '75%',
					padding: 16,
					marginHorizontal: 16,
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1 }}>
						{tituloModal && (
							<>
								<SubTitle>{tituloModal}</SubTitle>
								<MarginBottom value={8} />
							</>
						)}
						{subTituloModal && (
							<>
								<Text style={{ fontWeight: 'bold' }}>
									{subTituloModal}
								</Text>
								<MarginBottom value={16} />
							</>
						)}
					</View>
					<View>
						<IconButton
							provider="materialCommunityIcons"
							iconName="close"
							onPress={onDismiss}
						/>
					</View>
				</View>
				{loading ? (
					<Loading />
				) : (
					<FlatList<Caracteristica>
						overScrollMode="never"
						data={caracteristicas}
						ListEmptyComponent={
							<Text>Nenhuma característica encontrada.</Text>
						}
						renderItem={({ item }) => (
							<View key={item.id}>
								<Field
									label={item.caracteristica.descricao}
									value={item.caracteristica.valor}
								/>
								<MarginBottom value={8} />
							</View>
						)}
					/>
				)}
			</Modal>
		</Portal>
	)
}

export default ModalCaracteristicas
