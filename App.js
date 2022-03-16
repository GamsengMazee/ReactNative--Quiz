import HomeScreen from './screen/HomeScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectLanguage from './screen/SelectLanguage';
import GameScreen from './screen/GameScreen';
import ScoreCard from './screen/ScoreCard';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  MeriendaOne_400Regular
} from '@expo-google-fonts/merienda-one'
import {
  Bitter_400Regular,
  Bitter_400Regular_Italic,
  Bitter_700Bold
} from '@expo-google-fonts/bitter'



const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    MeriendaOne_400Regular,
    Bitter_400Regular,
    Bitter_400Regular_Italic,
    Bitter_700Bold
  })

  if (!loaded) {
    return <AppLoading />
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
             <Stack.Screen name='home' component={HomeScreen}  options={{ headerShown: false }} />
             <Stack.Screen name='selectLanguage' component={SelectLanguage} options={{ headerShown: false }}/>
             <Stack.Screen name='gamescreen' component={GameScreen} options={{ headerShown: false }} />
             <Stack.Screen name='scoreCard' component={ScoreCard}  options={{ headerShown: false }} />
             </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}




