import React, { useState } from 'react'
import { Dimensions, Vibration } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import {
	BarCodeEvent,
	BarCodeScanner,
	PermissionStatus,
} from 'expo-barcode-scanner'

import { BottomTabNavigatorParamList } from '@routes/BottomTabNavigator'
import { Center, MarginTop, Text, Title } from '@styles/global.style'
import colors from '@styles/colors.style'
import Loading from '@components/Loading'
import Button from '@components/Button'
import StatusBar from '@components/StatusBar'
import { Box, QRCodeEquipamentoPageContainer } from './styles'

import { i18n } from '@languages/index'
import useQRCodeEquipamentoHook from './hooks'

type QRCodeEquipamentoPageProp = BottomTabNavigationProp<
	BottomTabNavigatorParamList,
	'EquipmentPage'
>

const QRCodeEquipamentoPage: React.FC = () => {
	const { navigate } = useNavigation<QRCodeEquipamentoPageProp>()
	const { hasPermission, requestPermission } = useQRCodeEquipamentoHook()

	const [scanned, setScanned] = useState(false)

	const boxSize = Dimensions.get('window').width * 0.75

	const handleBarCodeScanned = ({ data }: BarCodeEvent) => {
		setScanned(true)

		Vibration.vibrate(200)

		navigate('EquipmentPage', {
			id: data,
		})
	}

	const renderScanner = () => {
		if (hasPermission === PermissionStatus.UNDETERMINED) {
			return (
				<Center>
					<Loading />
					<MarginTop value={15} />
					<Text color={colors.white}>
						{i18n.t(
							'searchEquipmentQRCode.requestingCameraPermission'
						)}
					</Text>
				</Center>
			)
		}

		if (hasPermission === PermissionStatus.DENIED) {
			return (
				<Center>
					<Text color={colors.white}>
						{i18n.t('searchEquipmentQRCode.permissionDenied')}
					</Text>
					<MarginTop value={15} />
					<Button onPress={() => requestPermission()}>
						{i18n.t('searchEquipmentQRCode.verifyPermission')}
					</Button>
				</Center>
			)
		}

		return (
			<Center>
				<StatusBar />
				<BarCodeScanner
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
					}}
					barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
					onBarCodeScanned={
						scanned ? undefined : handleBarCodeScanned
					}
				/>
				<Title color={colors.white}>
					{i18n.t('searchEquipmentQRCode.readEquipmentQrCode')}
				</Title>
				<MarginTop value={15} />
				<Box boxSize={boxSize} />
			</Center>
		)
	}

	return (
		<QRCodeEquipamentoPageContainer>
			{renderScanner()}
		</QRCodeEquipamentoPageContainer>
	)
}

export default QRCodeEquipamentoPage
