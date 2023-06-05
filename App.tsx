import React,{useEffect} from 'react';
import "./src/core/fireBase.js"
import HomeScreen from './src/screens/homeScreen';
// import HomeScreen from "./src/screens/homeScreen.js"
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodScreen from './src/screens/foodScreen';
import LoginScreen from './src/screens/loginScreen';
import { registerForPushNotificationsAsync } from './src/core/push-permissions.js';
import {RootStackParamList} from "./src/core/types"
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      console.log('Device token:', token);
    });
  }, []);
  
  
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="food" component={FoodScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

