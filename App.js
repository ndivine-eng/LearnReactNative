import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import Login from './screen/Login'; 
import Signin_screen from './screen/Signin_screen'; 
// import Shipping_billing from './screen/Shipping_billing'; 
// import Photoes from "./screen/Photoes";
import Register from "./screen/Register"; 

const App = () => {
 
  return (
    <View>
      {/* <Shipping_billing/> */}
      {/* <Photoes /> */}
      {/* <Signin_screen/> */}
      <Login/>

      {/* <Register/> */}
    </View>    
  );
}
export default App;
