import React, { useState } from 'react'
import { View, Text, SafeAreaView, Alert } from 'react-native'
import { FormButton, FormInput } from '../components/Forms'
import { COLORS } from '../constants/theme'

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnSubmit = () => {
    if (email != '' && password != '') {
      console.log({ email, password })
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
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
        }}
      >
        Sign Up
      </Text>

      {/* Email */}
      <FormInput
        labelText='Email'
        placeholderText='enter your email'
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />

      {/* Password */}
      <FormInput
        labelText='Password'
        placeholderText='enter your password'
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />

      {/* Submit button */}
      <FormButton
        labelText='Sign up'
        handleOnPress={handleOnSubmit}
        style={{ width: '100%' }}
      />

      {/* Footer */}
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
      >
        <Text>Already have an account?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          Sign in
        </Text>
      </View>
    </SafeAreaView>
  )
}
