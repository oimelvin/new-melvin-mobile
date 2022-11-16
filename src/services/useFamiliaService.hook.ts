import { Familia } from '@models/Familia'
import api, { HttpResponse, Items } from '@services/api'

interface FamiliaServiceHookProps {
  getFamilias(): Promise<Familia[]>
}

const useFamiliaService = (): FamiliaServiceHookProps => {
	const getFamilias = async (): Promise<Familia[]> => {
		const { data } = await api.get<HttpResponse<Items<Familia>>>(
			'services/app/FamiliaEquipamento/GetFamilias'
		)

		return data.result.items
	}

	return {
		getFamilias,
	}
}

export default useFamiliaService
