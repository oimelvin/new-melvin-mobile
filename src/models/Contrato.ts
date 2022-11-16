import { Fornecedor } from './Fornecedor'

export interface Contrato {
	indContrato: boolean
	dataInicioContrato: Date
	dataFimContrato: Date
	observacaoContrato: string
	idFornecedorContrato: string
	fornecedor: Fornecedor | null
}
