import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStackNavigator } from './navigators/AuthStackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  )
}
