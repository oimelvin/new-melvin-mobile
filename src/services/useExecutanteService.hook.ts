import { Executante } from '@models/Executante'
import api, { HttpResponse, Items } from '@services/api'

interface ExecutanteServiceHookProps {
	getExecutantes(): Promise<Executante[]>
}

const useExecutanteService = (): ExecutanteServiceHookProps => {
	const getExecutantes = async (): Promise<Executante[]> => {
		const { data } = await api.get<HttpResponse<Items<Executante>>>(
			'services/app/Executante/GetExecutantes'
		)

		return data.result.items
	}

	return {
		getExecutantes,
	}
}

export default useExecutanteService
