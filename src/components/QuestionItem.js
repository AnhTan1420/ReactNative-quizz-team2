<<<<<<< HEAD
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
const colorSuccess = '#00C851'
const colorError = '#ff4444'

const getOptionBgColor = (question, answer) => {
  if (!question.selectedAnswer) return 'white' + '20'
  if (!(answer == question.selectedAnswer)) return 'white' + '20'
  if (answer == question.correctAnswer) return colorSuccess
  return colorError
}

export const QuestionItem = ({
  question,
  index,
  setCorrectCount,
  setIncorrectCount,
  setQuestions,
  questions,
}) => {
  const handleSelectedAnswer = answer => {
    // If user has selected the answer, return null
    if (question.selectedAnswer) {
      return null
    }

    // Increase correct/incorrect count
    if (answer == question.correctAnswer) {
      setCorrectCount(prev => prev + 1)
    } else {
      setIncorrectCount(prev => prev + 1)
    }

    // Update questions
    let tempQuestions = [...questions]
    tempQuestions[index].selectedAnswer = answer
    setQuestions([...tempQuestions])
  }

  return (
    <View style={styles.container}>
      {/* Question */}
      <View style={{ padding: 10 }}>
        {/* Text */}
        <Text style={{ fontSize: 22, color: '#f4f4f4' }}>
          {index + 1}. {question.question}
        </Text>

        {/* Image */}
        {question.image ? (
          <Image
            source={{ uri: question.image }}
            resizeMode={'contain'}
            style={styles.image}
          />
        ) : null}
      </View>
      {/* All answers */}
      {question.allAnswers.map((answer, answerIndex) => {
        return (
          <TouchableOpacity
            key={answerIndex}
            style={[
              styles.buttonOption,
              { backgroundColor: getOptionBgColor(question, answer) },
            ]}
            onPress={() => handleSelectedAnswer(answer)}
          >
            {/* Answer text */}
            <Text style={styles.textNum}>{answerIndex + 1}</Text>
            <Text style={{ color: 'white' }}>{answer}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginHorizontal: 10,
    backgroundColor: '#000020',
    elevation: 2,
    borderRadius: 2,
  },
  image: {
    width: '80%',
    height: 200,
    marginTop: 15,
    marginLeft: '10%',
    borderRadius: 5,
  },
  buttonOption: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 12,
    borderRadius: 15,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textNum: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#f4f4f4',
    textAlign: 'center',
    marginRight: 16,
    borderRadius: 50,
    color: '#f4f4f4',
  },
})
=======
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
>>>>>>> master
