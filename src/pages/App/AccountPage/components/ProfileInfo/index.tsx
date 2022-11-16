import React from 'react'

import useAuth from '@contexts/auth.context'
import { ProfileInfoContainer, ProfilePhoto } from './styles'
import colors from '@styles/colors.style'
import { MarginTop, SubTitle } from '@styles/global.style'

const ProfileInfo: React.FC = () => {
	const { user } = useAuth()

	const { name, pathFoto } = user!

	return (
		<ProfileInfoContainer>
			<ProfilePhoto
				source={{
					uri: pathFoto,
				}}
			/>
			<MarginTop value={10} />
			<SubTitle color={colors.white}>{name}</SubTitle>
		</ProfileInfoContainer>
	)
}

export default ProfileInfo
