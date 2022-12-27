import { PropsWithChildren } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { Title } from '@styles/global.style'
import { ModalContainer, ModalOverlay, ModalView } from './styles'
import IconButton from '@components/IconButton'

interface ModalProps extends PropsWithChildren {
	opened: boolean
	onClose(): void
	title?: string
	padding?: boolean
}

const Modal: React.FC<ModalProps> = ({
	opened,
	onClose,
	children,
	title,
	padding,
}) => {
	return (
		<ModalContainer visible={opened} onRequestClose={() => onClose()}>
			<TouchableWithoutFeedback onPress={() => onClose()}>
				<ModalOverlay>
					<ModalView padding={padding}>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							{title && (
								<Title numberOfLines={1} ellipsizeMode="tail">
									{title}
								</Title>
							)}
							<IconButton
								provider="materialCommunityIcons"
								iconName="close"
								onPress={() => onClose()}
							/>
						</View>
						{children}
					</ModalView>
				</ModalOverlay>
			</TouchableWithoutFeedback>
		</ModalContainer>
	)
}

export default Modal
