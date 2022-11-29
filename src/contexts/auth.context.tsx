import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from 'react'

import useAuthService from '@services/useAuthService.hook'
import { User } from '@models/User'
import useTenant from './hooks/useTenant.hook'
import useAccessToken from './hooks/useAccessToken.hook'
import useUser from './hooks/useUser.hook'
import { Alert } from 'react-native'

interface AuthContextProps {
	loading: boolean
	user: User | null
	signIn(email: string, password: string): Promise<void>
	signOut(): Promise<void>
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [sessionUser, setSessionUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(false)

	const { getTenantId, getSession } = useAuthService()

	const { setTenant, clearTenant } = useTenant()
	const { token, setToken, clearToken } = useAccessToken()
	const { userId, getUser, setUserId, clearUserId } = useUser()

	useEffect(() => {
		const retrieveSession = async () => {
			try {
				setLoading(true)

				if (token && userId) {
					setToken(token)
					const user = await getUser()
					setSessionUser(user)
				}
			} catch (err) {
				Alert.alert('Atenção', 'Credenciais incorretas')
			} finally {
				setLoading(false)
			}
		}

		retrieveSession()
	}, [token, userId])

	const signIn = async (
		usernameOrEmail: string,
		password: string
	): Promise<void> => {
		try {
			setLoading(true)
			await clearTenant()
			await configTenant(usernameOrEmail)
			await configSession(usernameOrEmail, password)

			
			
		} finally {
			setLoading(false)
		}
	}

	const signOut = async (): Promise<void> => {
		setLoading(true)

		await clearToken()
		await clearUserId()

		setSessionUser(null)

		setLoading(false)
	}

	const configTenant = async (usernameOrEmail: string): Promise<void> => {
		const {
			result: { tenantId: tenantIdResult },
		} = await getTenantId(usernameOrEmail)

		await setTenant(tenantIdResult)
	}

	const configSession = async (
		usernameOrEmail: string,
		password: string
	): Promise<void> => {
		const {
			result: { accessToken: accessTokenResult, userId: userIdResult },
		} = await getSession(usernameOrEmail, password)

		await setToken(accessTokenResult)
		await setUserId(userIdResult)
	}

	return (
		<AuthContext.Provider
			value={{ loading, user: sessionUser, signIn, signOut }}
		>
			{children}
		</AuthContext.Provider>
	)
}

const useAuth = () => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth deve ser utilizado dentro de um AuthProvider')
	}

	return context
}

export default useAuth
