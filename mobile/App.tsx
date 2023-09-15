/* eslint-disable camelcase */
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar, Text } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <Home />
      <StatusBar
        translucent
        backgroundColor={'tranparent'}
        barStyle="light-content"
      />
    </SafeAreaProvider>
  )
}
