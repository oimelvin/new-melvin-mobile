import { Equipamento } from './Equipamento'

export interface OrdemServicoIndisponibilidade {
	id: string
	idOrdemServico: string
	idEquipamento: string
	dataInicio: Date
	dataFim: Date
	tipo: number
	equipamento: Equipamento
}
