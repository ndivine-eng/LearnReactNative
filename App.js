import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Signin_screen } from './screen/Signin_screen';
import { Shipping_billing } from './screen/Shipping_billing';

export default function App(){
 
  return (
    // <Signin_screen/>
    <Shipping_billing/>
  );
}
 
