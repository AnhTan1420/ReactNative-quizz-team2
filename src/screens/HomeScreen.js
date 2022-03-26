import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StatusBar, FlatList } from 'react-native'
import { axiosInstance } from '../utils/axiosInstance'
import { COLORS } from '../constants/theme'
import { FormButton } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { quizzesSelector } from '../redux/selector'
import { addQuizzes } from '../redux/actions'
import { QuizItem } from '../components'

export const HomeScreen = ({ navigation }) => {
  const quizzes = useSelector(quizzesSelector)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  console.log(quizzes)
  const dispatch = useDispatch()
  useEffect(() => {
    const getAllQuizzes = async () => {
      try {
        setLoading(true)
        const { data } = await axiosInstance.get('/quizzes')
        dispatch(addQuizzes(data))
        setLoading(false)
      } catch (error) {
        const message = error?.response
          ? error?.response.data.message
          : error.message
        setError(message)
        setLoading(false)
      }
    }
    if (quizzes.length < 1) {
      getAllQuizzes()
    }
  }, [quizzes.length, dispatch])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        position: 'relative',
      }}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS.white,
          elevation: 4,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, color: COLORS.black }}>Quiz App</Text>
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            color: COLORS.error,
          }}
          // onPress={signOut}
        >
          Logout
        </Text>
      </View>

      {!!error ? (
        <>
          {/* Error message */}
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
        </>
      ) : (
        <>
          {/* Quizzes list */}
          <FlatList
            data={quizzes}
            showsVerticalScrollIndicator={false}
            style={{
              paddingVertical: 20,
            }}
            renderItem={({ item }) => (
              <QuizItem title={item.title} description={item.description} />
            )}
            keyExtractor={item => item.id}
          />
        </>
      )}

      {/* Button */}
      <FormButton
        labelText='Create Quiz'
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          borderRadius: 50,
          paddingHorizontal: 30,
        }}
        handleOnPress={() => navigation.navigate('CreateQuizScreen')}
      />
    </SafeAreaView>
  )
}
