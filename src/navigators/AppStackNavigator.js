import { createStackNavigator } from '@react-navigation/stack'
import {
  AddQuestionScreen,
  CreateQuizScreen,
  HomeScreen,
  PlayQuizScreen,
} from '../screens'

const Stack = createStackNavigator()

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='CreateQuizScreen' component={CreateQuizScreen} />
      <Stack.Screen name='AddQuestionScreen' component={AddQuestionScreen} />
      <Stack.Screen name='PlayQuizScreen' component={PlayQuizScreen} />
    </Stack.Navigator>
  )
}
