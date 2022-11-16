import { Fmp } from '@models/Fmp'
import api, { HttpResponse, Items } from '@services/api'

interface ItemPlanoServiceHookProps {
  getFmpsByIdEquipamento(idEquipamento: string): Promise<Fmp[]>
}

const useFmpService = (): ItemPlanoServiceHookProps => {
	const getFmpsByIdEquipamento = async (
		idEquipamento: string
	): Promise<Fmp[]> => {
		const { data } = await api.get<HttpResponse<Items<Fmp>>>(
			'services/app/Fmp/GetFmps',
			{
				params: {
					idEquipamento,
				},
			}
		)

		return data.result.items
	}

	return {
		getFmpsByIdEquipamento,
	}
}

export default useFmpService
