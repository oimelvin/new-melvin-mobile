import AsyncStorage from '@react-native-async-storage/async-storage'

import { configTenant } from '@services/api'

interface TenantHookProps {
	setTenant(value: number): Promise<void>
	clearTenant(): Promise<void>
}

const ASTenantId = '@melvin:tenantId'

const useTenant = (): TenantHookProps => {
	const setTenant = async (value: number) => {
		await AsyncStorage.setItem(ASTenantId, JSON.stringify(value))
		configTenant(value)
	}

	const clearTenant = async () => {
		await AsyncStorage.removeItem(ASTenantId)
		configTenant(0)
	}

	return {
		setTenant,
		clearTenant,
	}
}

export default useTenant
