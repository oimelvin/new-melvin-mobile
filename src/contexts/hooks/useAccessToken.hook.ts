import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { configAuthorization } from '@services/api'

interface AccessTokenHookProps {
	token: string
	setToken(value: string): Promise<void>
	clearToken(): Promise<void>
}

const ASToken = '@melvin:accessToken'

const useAccessToken = (): AccessTokenHookProps => {
	const [token, setToken] = useState('')

	useEffect(() => {
		const getToken = async () => {
			const savedAccessToken = await AsyncStorage.getItem(ASToken)
			const accessToken = savedAccessToken
				? JSON.parse(savedAccessToken)
				: ''

			configAuthorization(accessToken)
			setToken(accessToken)
		}

		getToken()
	}, [])

	const setTokenAsyncStorage = async (value: string) => {
		await AsyncStorage.setItem(ASToken, JSON.stringify(value))
		setToken(value)
	}

	const clearTokenAsyncStorage = async () => {
		await AsyncStorage.removeItem(ASToken)
		setToken('')
	}

	return {
		token,
		setToken: setTokenAsyncStorage,
		clearToken: clearTokenAsyncStorage,
	}
}

export default useAccessToken
