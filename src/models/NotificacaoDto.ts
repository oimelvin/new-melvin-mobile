export interface NotificacaoDto {
    id: string;
    data: Date;
    titulo: string | undefined;
    descricao: string | undefined;
    lida: boolean;
    idIOS: string | undefined;
    idAndroid: string | undefined;
    erro: string | undefined;
    idUsuarioRecebedor: string;
    idUsuarioNotificador: string;
}