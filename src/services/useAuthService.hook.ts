import { Auth } from '@models/Auth'
import { Tenant } from '@models/Tenant'

import api from '@services/api'

interface AuthServiceHookProps {
  getTenantId(usernameOrEmail: string): Promise<Tenant>
  getSession(usernameOrEmail: string, password: string): Promise<Auth>
}

const useAuthService = (): AuthServiceHookProps => {
	const getTenantId = async (usernameOrEmail: string): Promise<Tenant> => {
		const { data: tenantData } = await api.post<Tenant>(
			'services/app/Account/IsTenantAvailableByUserLogin',
			{
				userLogin: usernameOrEmail,
			}
		)

		return tenantData
	}

	const getSession = async (
		usernameOrEmail: string,
		password: string
	): Promise<Auth> => {
		const { data: authData } = await api.post<Auth>('TokenAuth/Authenticate', {
			userNameOrEmailAddress: usernameOrEmail,
			password,
			rememberClient: true,
		})

		return authData
	}

	return {
		getTenantId,
		getSession,
	}
}

export default useAuthService
