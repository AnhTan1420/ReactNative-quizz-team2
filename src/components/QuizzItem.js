import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants/theme'

export const QuizItem = ({ title, description }) => {
  return (
    <View
      style={{
        padding: 20,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        elevation: 2,
      }}
    >
      <View style={{ flex: 1, paddingRight: 10 }}>
        <Text style={{ fontSize: 18, color: COLORS.black }}>{title}</Text>
        {description != '' ? (
          <Text style={{ opacity: 0.5 }}>{description}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 50,
          backgroundColor: COLORS.primary + '20',
        }}
        // onPress={() => {
        //   navigation.navigate('PlayQuizScreen', {
        //     quizId: quiz.id,
        //   })
        // }}
      >
        <Text style={{ color: COLORS.primary }}>Play</Text>
      </TouchableOpacity>
    </View>
  )
}
