import { Oficina } from './Oficina'
import { OrdemServicoEquipamento } from './OrdemServicoEquipamento'
import { OrdemServicoStatus } from './OrdemServicoStatus'
import { Prioridade } from './Prioridade'
import { TipoManutencao } from './TipoManutencao'
import { User } from './User'

export interface OrdemServico {
	id: string
	codOrdem: number
	descricao: string
	dataAbertura: Date
	dataExecucaoInicio: Date
	dataExecucaoFim: Date
	dataSolicitacao: Date
	dataEmissao: Date
	dataProgramacaoInicio: Date
	dataProgramacaoFim: Date
	dataEncerramento: Date
	dataCancelada: Date
	dataAprovacao: Date
	justificativa: string
	orientacao: string
	homem: number
	hora: number
	observacao: string
	custo: number
	situacao: string
	idTipoManutencao: string
	idPrioridade: string
	idOficina: string
	idFmp: string
	condicao: string
	status: OrdemServicoStatus
	indFavorita: true
	indCancelada: true
	idRota: string
	statusTexto: string
	historico: string
	equipamentos: string[]
	statusTempo: string
	idSolicitacao?: string
	tipoManutencao: TipoManutencao
	prioridade: Prioridade
	oficina: Oficina
	aprovador: User
	ordemEquipamentos: OrdemServicoEquipamento[]
	ordemEquipamento: OrdemServicoEquipamento
}
