import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import Signin_screen from './screen/Signin_screen';
import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from './screen/Login'; 
import Shipping_billing from './screen/Shipping_billing'; 
import Photoes from "./screen/Photoes";
import Register from "./screen/Register"; 
// import Home from "./screen/Home";
export const App=()=>{
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="rogin" component={Login}/>
      <Stack.Screen  name="register" component={Register}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
