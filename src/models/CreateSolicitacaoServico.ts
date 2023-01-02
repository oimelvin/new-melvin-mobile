import { CanalSolicitacao } from "./CanalSolicitacao";
import { StatusSolicitacao } from "./StatusSolicitacao";

export interface CreateSolicitacaoServicoDto {
    solicitante: string;
    canal: CanalSolicitacao;
    idFilial: string;
    idSetor: string;
    idEquipamento: string;
    idPrioridade: string;
    dataAbertura: Date;
    horaAbertura: string;
    solicitacao: string;
    condicaoEquipamento: boolean;
    status: StatusSolicitacao;
    idOrdemServicoOrigem: string | undefined;
    idOrdemServicoCheckListOrigem: string | undefined;
}