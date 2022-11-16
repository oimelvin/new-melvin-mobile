import { Oficina } from '@models/Oficina'
import api, { HttpResponse, Items } from '@services/api'

interface OficinaServiceHookProps {
  getOficinas(): Promise<Oficina[]>
}

const useOficinaService = (): OficinaServiceHookProps => {
	const getOficinas = async (): Promise<Oficina[]> => {
		const { data } = await api.get<HttpResponse<Items<Oficina>>>(
			'services/app/Oficina/GetOficinas'
		)

		return data.result.items
	}

	return {
		getOficinas,
	}
}

export default useOficinaService
