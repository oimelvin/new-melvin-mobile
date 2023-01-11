import { Keyboard, TouchableWithoutFeedback } from 'react-native'

import Input from '@components/Input'
import Select from '@components/Select'
import { KeyboardAvoidingView, MarginTop, Title } from '@styles/global.style'
import { AdicionarSolicitacaoPageContainer } from './styles'
import Button from '@components/Button'
import Loading from '@components/Loading'

import { i18n } from '@languages/index'
import useAdicionarSolicitacaoServicoHook from './hooks/useAdicionarSolicitacaoServico.hook'

const AdicionarSolicitacaoPage: React.FC = () => {
	const { loading, saving, edicao, data, handles } =
		useAdicionarSolicitacaoServicoHook()

	if (loading) {
		return (
			<AdicionarSolicitacaoPageContainer>
				<Loading />
			</AdicionarSolicitacaoPageContainer>
		)
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<AdicionarSolicitacaoPageContainer>
					<MarginTop value={15} />
					<Title>
						{edicao
							? i18n.t('addSolicitation.editSolicitation')
							: i18n.t('addSolicitation.addSolicitation')}
					</Title>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addSolicitation.applicant')}
						value={data.valores.solicitante}
						onChangeText={value => handles.setSolicitante(value)}
						placeholder={i18n.t(
							'addSolicitation.informAnApplicant'
						)}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addSolicitation.channel')}
						placeholder={i18n.t('addSolicitation.selectAChannel')}
						items={data.canais.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedCanal}
						onSelect={item => handles.setSelectedCanal(item)}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addSolicitation.branch')}
						items={data.filiais.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedFilial}
						onSelect={item => handles.setSelectedFilial(item)}
						placeholder={i18n.t('addSolicitation.selectABranch')}
						emptyListText={i18n.t(
							'addSolicitation.noBranchesFound'
						)}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addSolicitation.sector')}
						items={data.setores.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedSetor}
						onSelect={item => handles.setSelectedSetor(item)}
						placeholder={i18n.t('addSolicitation.selectASector')}
						emptyListText={i18n.t('addSolicitation.noSectorsFound')}
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addSolicitation.equipment')}
						items={data.equipamentos.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedEquipamento}
						onSelect={item => handles.setSelectedEquipamento(item)}
						placeholder={i18n.t(
							'addSolicitation.selectAnEquipment'
						)}
						emptyListText={i18n.t(
							'addSolicitation.noEquipmentsFound'
						)}
						required
					/>
					<MarginTop value={15} />
					<Select
						label={i18n.t('addSolicitation.priority')}
						emptyListText={i18n.t(
							'addSolicitation.noPrioritiesFound'
						)}
						items={data.prioridades.map(({ id, descricao }) => ({
							value: id,
							label: descricao,
						}))}
						selectedValue={data.valores.selectedPrioridade}
						onSelect={item => handles.setSelectedPrioridade(item)}
						placeholder={i18n.t('addSolicitation.selectAPriority')}
						required
					/>
					<MarginTop value={15} />
					<Input
						label={i18n.t('addSolicitation.solicitation')}
						numberOfLines={2}
						value={data.valores.solicitacao}
						onChangeText={value => handles.setSolicitacao(value)}
						placeholder={i18n.t(
							'addSolicitation.describeYourSolicitation'
						)}
						multiline
						required
					/>
					<MarginTop value={15} />
					<Button
						label={i18n.t('common.save')}
						onPress={handles.salvarSolicitacaoServico}
						disabled={saving || loading}
					/>
					<MarginTop value={32} />
				</AdicionarSolicitacaoPageContainer>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default AdicionarSolicitacaoPage
