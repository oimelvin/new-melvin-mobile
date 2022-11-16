import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import useUserService from '@services/useUserService.hook'
import { User } from '@models/User'

interface UserHookProps {
	userId: number
	getUser(): Promise<User | null>
	setUserId(value: number): Promise<void>
	clearUserId(): Promise<void>
}

const ASUserId = '@melvin:userId'

const useUser = (): UserHookProps => {
	const { getUserById } = useUserService()
	const [userId, setUserId] = useState<number>(0)

	useEffect(() => {
		const getUserId = async () => {
			const savedUserId = await AsyncStorage.getItem(ASUserId)
			setUserId(Number(savedUserId))
		}

		getUserId()
	}, [])

	const getUser = async (): Promise<User | null> => {
		if (userId <= 0) {
			return null
		}

		return getUserById(userId)
	}

	const setUserIdAsyncStorage = async (value: number) => {
		await AsyncStorage.setItem(ASUserId, JSON.stringify(value))
		setUserId(value)
	}

	const clearUserIdAsyncStorage = async () => {
		await AsyncStorage.removeItem(ASUserId)
		setUserId(0)
	}

	return {
		userId,
		getUser,
		setUserId: setUserIdAsyncStorage,
		clearUserId: clearUserIdAsyncStorage,
	}
}

export default useUser
