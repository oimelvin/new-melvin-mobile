import { useEffect, useState } from 'react'
import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner'

const useQRCodeEquipamentoHook = () => {
	const [hasPermission, setHasPermission] = useState(
		PermissionStatus.UNDETERMINED
	)

	const requestPermission = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync()

		setHasPermission(status)
	}

	useEffect(() => {
		requestPermission()
	}, [])

	return { hasPermission, requestPermission }
}

export default useQRCodeEquipamentoHook
