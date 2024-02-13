import { StatusBar } from "expo-status-bar";
import { CheckBox } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

export const Signin_screen = () => {
    return (
        <View style={styles.container}>
            {/* this is header */}
            <View> 
                <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 50}} >Sign In</Text> 
            </View>
            <Text>Welcome Back! Please enter your details</Text>

            <StatusBar style="auto" />

            {/* this is body */}
            <View>
                <TouchableOpacity style={{display: 'flex', flexDirection: 'row', gap: 10, width: 300, borderWidth: 1, borderColor: '#EFECEC', borderRadius: 10, padding: 15, marginTop: 20,}} >
                    <AntDesign name= "home" size={30} color="black" style={{color:'pink'}}></AntDesign>
                    <TextInput placeholder= "divine@gmail.com"></TextInput>
                </TouchableOpacity>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: 10, width: 300, borderWidth: 1, borderColor: '#EFECEC', borderRadius: 10, padding: 15, marginTop: 20}}>
                <SimpleLineIcons name="lock-open" size={30} color="black" style={{color:'#40A2D8'}}></SimpleLineIcons>
                <TextInput secureTextEntry placeholder="Password" />
            </View>

            <View style={{marginTop: 20,}}>
                <CheckBox title="Remember me" style = {styles.checkbox} />
            </View>

            {/* This is footer */}

            
                
                <View style={{marginBottom: 3}}>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity >
                        <Text style={{color:'white', borderRadius:10, backgroundColor:'#40A2E3', fontSize: 20, fontWeight: 'bold', padding: 10,width: 300, justifyContent: 'center', alignItems: 'center',}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity style={styles.create}>
                        <Text style> create Account</Text>
                        <Text style={{color:'#FF9843'}}>Sign Up</Text>
                    </TouchableOpacity>
                    
            

            </View>

            <View style={styles.icons}>
                <TouchableOpacity>
                    <Icon name="facebook" size={30} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="google" size={30} color="red" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="apple" size={30} color="black" />
                </TouchableOpacity>
                

            </View>



            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      

    },

    checkbox: {
        backgroundColor:'#FFF6E9',
        borderColor:'#FFF6E9',
        marginLeft:30,
        fontWeight:'300',
        
        
      
    },
    
    forgot: {
        color: 'skyblue', 
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '45%',

           
    },
    create: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        gap: 50,
        padding: 10
    },
    
    icons: {
        display: 'flex',
        flexDirection:'row',
        gap:50,
        marginTop:50,
        justifyContent:'space-between'
      
    
    }

    
  });
  
export default Signin_screen
