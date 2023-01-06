import { SelectItemProps } from '@components/Select'

export interface FiltrosCarteiraServicos {
	selectedStatus: SelectItemProps | null
	selectedOficina: SelectItemProps | null
	selectedTipoManutencao: SelectItemProps | null
	selectedCondicao: SelectItemProps | null
	selectedPrioridade: SelectItemProps | null
	selectedExecutante: SelectItemProps | null
	selectedDataAbertura: Date | null
	selectedDataEncerramento: Date | null
	selectedDataProgramada: Date | null
	pesquisa: string
}
