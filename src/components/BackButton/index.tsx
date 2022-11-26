import React from 'react'

import { BackButtonContainer } from './styles'
import IconButton from '../IconButton'

type BackButtonProps = {
	goBack(): void
	canGoBack(): boolean
}

const BackButton: React.FC<BackButtonProps> = ({ canGoBack, goBack }) => {
	const renderIconButton = () => {
		if (canGoBack()) {
			return (
				<IconButton
					provider="ionicons"
					iconName="chevron-back"
					onPress={goBack}
				/>
			)
		}

		return null
	}

	return <BackButtonContainer>{renderIconButton()}</BackButtonContainer>
}

export default BackButton
