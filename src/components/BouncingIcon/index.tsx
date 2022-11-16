import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import Icon, { IconProps } from '@components/Icon'

const BouncingIcon: React.FC<IconProps> = ({
	provider,
	iconName,
	color,
	size,
}) => {
	const bounce = useRef(new Animated.Value(0)).current

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(bounce, {
					toValue: -15,
					delay: 2500,
					useNativeDriver: true,
					duration: 100,
				}),
				Animated.timing(bounce, {
					toValue: 0,
					delay: 250,
					useNativeDriver: true,
					duration: 500,
				}),
			])
		).start()
	}, [bounce])

	const style = {
		transform: [{ translateY: bounce }],
	}

	return (
		<Animated.View style={style}>
			<Icon provider={provider} iconName={iconName} color={color} size={size} />
		</Animated.View>
	)
}

export default BouncingIcon
