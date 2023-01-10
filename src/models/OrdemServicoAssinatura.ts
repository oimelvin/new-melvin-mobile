import { Assinatura } from './Assinatura'

export interface OrdemServicoAssinatura {
	id: string
	idOrdemServico: string
	idAssinatura: string
	imagem: string
	assinatura: Assinatura
}
