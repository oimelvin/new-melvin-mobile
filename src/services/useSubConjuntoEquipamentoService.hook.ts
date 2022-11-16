import { Caracteristica } from '@models/Caracteristica'
import api, { HttpResponse, Items } from '@services/api'

interface ConjuntoEquipamentoServiceHookProps {
  getCaracteristicasSubConjuntoEquipamentoById(
    id: string
  ): Promise<Caracteristica[]>
}

const useSubConjuntoEquipamentoService =
  (): ConjuntoEquipamentoServiceHookProps => {
  	const getCaracteristicasSubConjuntoEquipamentoById = async (
  		id: string
  	): Promise<Caracteristica[]> => {
  		const { data } = await api.get<HttpResponse<Items<Caracteristica>>>(
  			'services/app/SubConjuntoEquipamento/GetAllCaracteristicas',
  			{
  				params: {
  					idSubConjuntoEquipamento: id,
  				},
  			}
  		)

  		return data.result.items
  	}

  	return {
  		getCaracteristicasSubConjuntoEquipamentoById,
  	}
  }

export default useSubConjuntoEquipamentoService
