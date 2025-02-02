import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';

export default function App() {

  const Stack = createStackNavigator(); 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen 
          name='home'
          component={HomeScreen}
          options={{ headerShown: false}} 
        >
        </Stack.Screen>
        <Stack.Screen
          name='login'
          component={LoginScreen}
          options={{headerShown: false}}

        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}