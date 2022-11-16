import { ItemPlano } from '@models/ItemPlano'
import api, { HttpResponse, Items } from '@services/api'

interface ItemPlanoServiceHookProps {
  getItensPlanoByIdEquipamento(idEquipamento: string): Promise<ItemPlano[]>
}

const useItemPlanoService = (): ItemPlanoServiceHookProps => {
	const getItensPlanoByIdEquipamento = async (
		idEquipamento: string
	): Promise<ItemPlano[]> => {
		const { data } = await api.get<HttpResponse<Items<ItemPlano>>>(
			'services/app/ItemPlano/GetAll',
			{
				params: {
					idEquipamento,
				},
			}
		)

		return data.result.items
	}

	return {
		getItensPlanoByIdEquipamento,
	}
}

export default useItemPlanoService
