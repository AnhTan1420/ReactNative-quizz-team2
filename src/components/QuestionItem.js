import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants/theme'

export const QuestionItem = ({
	item,
	index,
	correctCount,
	setCorrectCount,
	incorrectCount,
	setIncorrectCount,
	setQuestions,
	getOptionBgColor,
	getOptionTextColor,
	questions,
}) => {
	console.log({ item })
	return (
		<View
			style={{
				marginTop: 14,
				marginHorizontal: 10,
				backgroundColor: COLORS.white,
				elevation: 2,
				borderRadius: 2,
			}}
		>
			<View style={{ padding: 20 }}>
				<Text style={{ fontSize: 16 }}>
					{index + 1}. {item.question}
				</Text>
				{item.image ? (
					<Image
						source={{
							uri: item.image,
						}}
						resizeMode={'contain'}
						style={{
							width: '80%',
							height: 150,
							marginTop: 20,
							marginLeft: '10%',
							borderRadius: 5,
						}}
					/>
				) : null}
			</View>
			{/* Options */}
			{item.allOptions.map((option, optionIndex) => {
				return (
					<TouchableOpacity
						key={optionIndex}
						style={{
							paddingVertical: 14,
							paddingHorizontal: 20,
							borderTopWidth: 1,
							borderColor: COLORS.border,
							backgroundColor: getOptionBgColor(item, option),
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
						onPress={() => {
							if (item.selectedOption) {
								return null
							}
							// Increase correct/incorrect count
							if (option == item.correctAnswer) {
								setCorrectCount(correctCount + 1)
							} else {
								setIncorrectCount(incorrectCount + 1)
							}

							let tempQuestions = [...questions]
							tempQuestions[index].selectedOption = option
							setQuestions([...tempQuestions])
						}}
					>
						<Text
							style={{
								width: 25,
								height: 25,
								padding: 2,
								borderWidth: 1,
								borderColor: COLORS.border,
								textAlign: 'center',
								marginRight: 16,
								borderRadius: 25,
								color: getOptionTextColor(item, option),
							}}
						>
							{optionIndex + 1}
						</Text>
						<Text style={{ color: getOptionTextColor(item, option) }}>
							{option}
						</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}
