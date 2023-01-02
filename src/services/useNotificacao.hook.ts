import { NotificacaoDto } from '@models/NotificacaoDto'
import api, { HttpResponse, Items } from '@services/api'

interface NotificacaoServiceHookProps {
  getNotificacoes(id): Promise<NotificacaoDto[]>
}

const useNotificacaoService = (): NotificacaoServiceHookProps => {
	const getNotificacoes = async (id): Promise<NotificacaoDto[]> => {
		const { data } = await api.get<HttpResponse<Items<NotificacaoDto>>>(
			'services/app/Notificacao/ObterNotificacoesUsuario?idUsuario='+id
		)

		return data.result.items
	}

	return {
		getNotificacoes,
	}
}

export default useNotificacaoService
