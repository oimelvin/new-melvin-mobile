import { SelectItemProps } from '@components/Select'
import { CanalSolicitacao } from './Canal'
import { StatusSolicitacao } from './StatusSolicitacao'

export interface CreateSolicitacaoServicoDto {
	solicitante: string
	canal: CanalSolicitacao
	idFilial: string
	idSetor: string
	idEquipamento: string
	idPrioridade: string
	dataAbertura: Date
	horaAbertura: string
	solicitacao: string
	condicaoEquipamento: boolean
	status: StatusSolicitacao
	idOrdemServicoOrigem: string | undefined
	idOrdemServicoCheckListOrigem: string | undefined
	selectedFilial: SelectItemProps | null
	selectedSetor: SelectItemProps | null
	selectedEquipamento: SelectItemProps | null
	selectedConjunto: SelectItemProps | null
	selectedStatus: SelectItemProps | null
	selectedOficina: SelectItemProps | null
	selectedTipoManutencao: SelectItemProps | null
	selectedCondicao: SelectItemProps | null
	selectedPrioridade: SelectItemProps | null
	selectedExecutante: SelectItemProps | null
	selectedDataAbertura: Date | null
	selectedDataEncerramento: Date | null
	selectedDataProgramada: Date | null
	selectedCanal: SelectItemProps | null
	pesquisa: string
}
