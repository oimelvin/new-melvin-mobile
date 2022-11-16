import { Fornecedor } from './Fornecedor'

export interface Garantia {
	indGarantia: boolean
	tipoGarantia: number
	dataGarantia: Date
	kmGarantia: number
	idFornecedorGarantia: string
	fornecedor: Fornecedor | null
	observacaoGarantia: string
}
