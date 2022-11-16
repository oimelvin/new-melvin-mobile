import { User } from '@models/User'
import api, { HttpResponse } from '@services/api'

interface UserServiceHookProps {
  getUserById(id: number): Promise<User>
}

const useUserService = (): UserServiceHookProps => {
	const getUserById = async (id: number): Promise<User> => {
		const { data } = await api.get<HttpResponse<User>>(
			'services/app/User/Get',
			{
				params: { id },
			}
		)

		return data.result
	}

	return {
		getUserById,
	}
}

export default useUserService
