import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen';
import ViewHistory from './components/ViewHistory';
import Practice from './components/Practice';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Practice} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MainScreen} />
        <Stack.Screen options={{ headerShown: false }} name="History" component={ViewHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;


