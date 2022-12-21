import { CanalSolicitacao } from "./CanalSolicitacao";
import { Equipamento } from "./Equipamento";
import { Prioridade } from "./Prioridade";
import { StatusSolicitacao } from "./StatusSolicitacao";

export interface SolicitacaoServico
{
    id: string;
    codigo: number;
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
    arquivada: boolean;
    canalTexto: string | undefined;
    statusTexto: string | undefined;
    horaAberturaTexto: string | undefined;
    indArquivar: boolean | undefined;
    justificativaArquivar: string | undefined;
    idOrdemServico: string | undefined;
    equipamento: Equipamento;
    prioridade: Prioridade;
}
