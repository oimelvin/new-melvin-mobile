import React, {
	forwardRef,
	ReactNode,
	useImperativeHandle,
	useRef,
	useState,
} from 'react'
import { Animated, PanResponder } from 'react-native'
import CardHeader from './components/CardHeader'

import { AnimatedCardContainer } from './styles'

export type AnimatedCardRefProps = {
  toggle(): void
}

type AnimatedCardProps = {
  cardHeight: number
  defaultState?: 'opened' | 'closed'
  children?: ReactNode
}

const AnimatedCard = forwardRef<AnimatedCardRefProps, AnimatedCardProps>(
	({ children, cardHeight, defaultState }, ref) => {
		const [isCardOpened, setIsCardOpened] = useState(defaultState === 'opened')

		const cardAnimDefaultValue = defaultState === 'opened' ? 0 : cardHeight - 32

		const cardAnim = useRef(new Animated.Value(cardAnimDefaultValue)).current

		const panResponder = PanResponder.create({
			onMoveShouldSetPanResponder: (_, { dy }) => dy < -20 || dy > 20,
			onPanResponderGrant: () =>
				cardAnim.setOffset(isCardOpened ? 0 : cardHeight - 24),
			onPanResponderMove: (_, { dy }) => cardAnim.setValue(dy),
			onPanResponderRelease: (_, { dy }) => {
				cardAnim.flattenOffset()

				const percentageToReleaseAnim = cardHeight * 0.3

				if (isCardOpened) {
					if (dy > percentageToReleaseAnim) {
						return animateOut()
					}

					return animateIn()
				} else {
					if (dy < -percentageToReleaseAnim) {
						return animateIn()
					}

					return animateOut()
				}
			},
		})

		useImperativeHandle(ref, () => ({ toggle }))

		const toggle = () => (isCardOpened ? animateOut() : animateIn())

		const animateIn = () => {
			setIsCardOpened(true)

			Animated.spring(cardAnim, {
				toValue: 0,
				useNativeDriver: true,
			}).start()
		}

		const animateOut = () => {
			setIsCardOpened(false)

			Animated.spring(cardAnim, {
				toValue: cardHeight - 32,
				useNativeDriver: true,
			}).start()
		}

		return (
			<AnimatedCardContainer
				cardHeight={cardHeight}
				style={{
					transform: [
						{
							translateY: cardAnim.interpolate({
								inputRange: [0, cardHeight],
								outputRange: [0, cardHeight],
								extrapolate: 'clamp',
							}),
						},
					],
				}}
				{...panResponder.panHandlers}
			>
				<CardHeader toggleAnimate={isCardOpened ? animateOut : animateIn} />
				{children}
			</AnimatedCardContainer>
		)
	}
)

export default AnimatedCard
