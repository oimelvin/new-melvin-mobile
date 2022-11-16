import { ItemPlano } from './ItemPlano'
import { Semana } from './Semana'

export interface Fmp {
	id: string
	dataInicio: Date | null
	dataEncerramento: Date | null
	dataCriacaoProximaOs: Date | null
	dataExecucaoProximaOs: Date | null
	orientacao: string
	anteciparDias: number
	homem: number
	hora: number
	formaImpressao: number
	quantidadeOrdensGeradas: number
	isActive: boolean
	planejarOsAutomaticamente: boolean
	programarOsAutomaticamente: boolean
	programarSemana: Semana | null
	tagFmp: string
	descricaoOS: string
	idEquipamento: string
	idOficina: string
	idTipoManutencao: string
	idPeriodiciade: string
	idConjuntoEquipamento: string
	condicao: boolean
	indRota: boolean
	itensPlano: ItemPlano[] | null
}
