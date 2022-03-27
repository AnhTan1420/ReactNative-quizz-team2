import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { FormButton, FormInput } from '../../components'
import { COLORS } from '../../constants/theme'
import { useSelector, useDispatch } from 'react-redux'
import { authSelector } from '../../redux/selector'
import { axiosInstance } from '../../utils/axiosInstance'

const questionSchema = yup.object({
  question: yup.string().required().label('Question'),
  correctAnswer: yup.string().required().label('Correct answer'),
  optionOne: yup.string().label('Option 1').required(),
  optionTwo: yup.string().label('Option 2'),
  optionThree: yup.string().label('Option 3'),
})

const defaultValues = {
  question: '',
  correctAnswer: '',
  optionOne: '',
  optionTwo: '',
  optionThree: '',
}

export const AddQuestionScreen = ({ navigation, route }) => {
  const [quizId, setQuizId] = useState(route.params.quizId)
  const [quizTitle, setQuizTitle] = useState(route.params.quizTitle)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(questionSchema) })
  const [imageUri, setImageUri] = useState('')

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const onQuestionSave = async ({ question, correctAnswer, ...options }) => {
    try {
      setLoading(true)
      // Call api create quiz
      const { optionOne, optionTwo, optionThree } = options

      const { data } = await axiosInstance.post('/questions', {
        quiz: quizId,
        question,
        correctAnswer,
        incorrectAnswers: [optionOne, optionTwo, optionThree],
        image: imageUri,
      })

      console.log({ data })
      setImageUri('')
      reset()
      // dispatch create quiz action
      // dispatch(createQuiz(data))

      setLoading(false)
    } catch (error) {
      const message = error?.response
        ? error?.response.data.message
        : error.message
      setError(message)
      setLoading(false)
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log({ result })

    if (!result.cancelled) {
      setImageUri(result.uri)
    }
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
      }}
    >
      {/* Header */}
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: 'bold',
          marginVertical: 32,
          textAlign: 'center',
        }}
      >
        Create Quiz
      </Text>

      {/* Error message */}
      {!!error && (
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            marginBottom: 12,
            padding: 3,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 0, 67, 0.55)',
          }}
        >
          {error}
        </Text>
      )}

      {/* Question */}
      <Controller
        control={control}
        name='question'
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            labelText='Question'
            placeholderText='Enter question'
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.question}
          />
        )}
      />

      {imageUri == '' ? (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 28,
            backgroundColor: COLORS.primary + '20',
          }}
          onPress={pickImage}
        >
          <Text style={{ opacity: 0.5, color: COLORS.primary }}>
            + add image
          </Text>
        </TouchableOpacity>
      ) : (
        <Image
          source={{
            uri: imageUri,
          }}
          resizeMode={'cover'}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 5,
          }}
        />
      )}

      {/* Correct answer */}
      <Controller
        control={control}
        name='correctAnswer'
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            labelText='Correct Answer'
            placeholderText='Enter correct answer'
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.correctAnswer}
          />
        )}
      />

      {/* Option 1 */}
      <Controller
        control={control}
        name='optionOne'
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            labelText='Option 1'
            placeholderText='Enter option 1'
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.optionOne}
          />
        )}
      />

      {/* Option 1 */}
      <Controller
        control={control}
        name='optionTwo'
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            labelText='Option 2'
            placeholderText='Enter option 2'
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.optionTwo}
          />
        )}
      />

      {/* Option 3 */}
      <Controller
        control={control}
        name='optionThree'
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            labelText='Option 3'
            placeholderText='Enter option 3'
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={errors.optionThree}
          />
        )}
      />

      {/* Submit button */}
      <FormButton
        labelText='Save Question'
        type='submit'
        handleOnPress={handleSubmit(onQuestionSave)}
        style={{ width: '100%' }}
      />

      <FormButton
        labelText='Done & Go Home'
        isPrimary={false}
        handleOnPress={() => {
          setQuizId('')
          navigation.navigate('HomeScreen')
        }}
        style={{
          marginVertical: 20,
        }}
      />
    </SafeAreaView>
  )
}
