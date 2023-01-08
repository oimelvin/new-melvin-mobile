export interface OrdemServicoAcoes {
	id: string
	idOrdemServico: string
	idEquipamento: string
	idSubConjunto?: string
	descricaoAcao: string
	conforme?: boolean
	dataValidacao?: Date
	idUsuario: string
	idOrdemNaoConformidade?: string
	codOrdemNaoConformidade?: number
	idSolicitacao?: string
	codSolicitacao?: number
	idFmp?: string
}
