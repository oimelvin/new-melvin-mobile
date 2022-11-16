import React, { ReactElement, useRef, useState } from 'react'
import { Animated, FlatList, View } from 'react-native'
import { MarginTop } from '@styles/global.style'

type SlidesData = {
	id: string
	component: ReactElement
}

type SliderProps = {
	slides: SlidesData[]
	dotColor?: string
}

const Slider: React.FC<SliderProps> = ({ slides, dotColor }) => {
	const [sliderWidth, setSliderWidth] = useState(0)

	const scrollX = useRef(new Animated.Value(0)).current

	const renderPaginator = () =>
		slides.map((_, i) => {
			const inputRange = [
				(i - 1) * sliderWidth,
				i * sliderWidth,
				(i + 1) * sliderWidth,
			]

			const dotWidth = scrollX.interpolate({
				inputRange,
				outputRange: [7, 14, 7],
				extrapolate: 'clamp',
			})

			const dotOpacity = scrollX.interpolate({
				inputRange,
				outputRange: [0.3, 1, 0.3],
				extrapolate: 'clamp',
			})

			return (
				<Animated.View
					key={i}
					style={[
						{
							height: 7,
							borderRadius: 5,
							backgroundColor: dotColor || '#000',
							marginHorizontal: 5,
						},
						{
							width: dotWidth,
							opacity: dotOpacity,
						},
					]}
				/>
			)
		})

	return (
		<>
			<FlatList
				onLayout={({ nativeEvent }) =>
					setSliderWidth(nativeEvent.layout.width)
				}
				data={slides}
				renderItem={({ item }) => (
					<View style={{ width: sliderWidth }}>{item.component}</View>
				)}
				keyExtractor={({ id }) => id}
				onScroll={Animated.event(
					[
						{
							nativeEvent: {
								contentOffset: { x: scrollX },
							},
						},
					],
					{ useNativeDriver: false }
				)}
				scrollEventThrottle={60}
				showsHorizontalScrollIndicator={false}
				overScrollMode="never"
				horizontal
				pagingEnabled
			/>
			<MarginTop value={16} />
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				{renderPaginator()}
			</View>
		</>
	)
}

export default Slider
