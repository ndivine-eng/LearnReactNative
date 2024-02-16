import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react";
import React, { useState } from "react";

const Register = () => {
    
    return (
        <ScrollView>
        <View style={{backgroundColor: '#F3F5F6',width: '100%',height: '100%',paddingHorizontal: '6%',paddingTop: '10%',paddingBottom: '6%',}}>
         <StatusBar style="auto" />
         <Image source={require('../assets/rob1.jpg')} style={{width: '100%',height: 315,}} />
         
         <View style={{display: 'flex',flexDirection: 'column', alignItems: 'center',gap: 15,}}>
                <Text style={{fontSize: 25,fontWeight: 'bold',}}>Register</Text>
                <TextInput
                    style={{width: '100%',display: 'flex',flexDirection: 'row',alignItems: 'center',backgroundColor: 'white',paddingLeft: '2%',borderTopLeftRadius: 30,borderTopRightRadius: 30,borderRadius: 30,borderBottomWidth: 0,height: 50,}}
                    mode="flat"
                    underlineColor="white"
                    placeholder="Username" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={{backgroundColor: '#FDE8EA', marginLeft: '30%',}} />}
                />

                <TextInput
                    style={{width: '100%',display: 'flex',flexDirection: 'row',alignItems: 'center',backgroundColor: 'white',paddingLeft: '2%',borderTopLeftRadius: 30,borderTopRightRadius: 30,borderRadius: 30,borderBottomWidth: 0,height: 50,}}
                    mode="flat"
                    underlineColor="white"
                    placeholder="Email" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'email-outline'} color='#76C88B' style={{backgroundColor: '#DEF4E8', marginLeft: '30%',}} />}
                />

                <TextInput
                    style={{width: '100%',display: 'flex',flexDirection: 'row',alignItems: 'center',backgroundColor: 'white',paddingLeft: '2%',borderTopLeftRadius: 30,borderTopRightRadius: 30,borderRadius: 30,borderBottomWidth: 0,height: 50,}}
                    mode="flat"
                    underlineColor="white"
                    secureTextEntry
                    placeholder="Password" placeholderTextColor={'#B8B7C0'}
                    left={<TextInput.Icon icon={'lock-outline'} color='#A09EF3' style={{backgroundColor: '#E6ECFC', marginLeft: '30%',}} />}
                />

                <TouchableOpacity style={{backgroundColor: '#191A30',width: '100%',height: 50,borderRadius: 30,display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginTop: 15,}}>
                    <Text style={{color: 'white',fontSize: 17,}}>Register</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{marginTop: 50,width: '100%',height: 'auto',display: 'flex',flexDirection: 'row',justifyContent: 'space-around',}}>
                <TouchableOpacity style={{width: '15%', height: 50,alignItems: 'center',display:'flex',flexDirection: 'row',justifyContent: 'center',backgroundColor: 'white',borderRadius: 30,}}>
                    <Ionicons name="logo-facebook" style={{color: '#216CD3',fontSize: 30,}} />
                </TouchableOpacity>
                <AntDesign name='google' size={24} color="red" style={{ marginTop: 3, borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF' }} />
                <TouchableOpacity style={{width: '15%',height: 50,alignItems: 'center',display:'flex',flexDirection: 'row',justifyContent: 'center',backgroundColor: 'white',borderRadius: 30,}}>
                    <AntDesign name="apple1" style={{color: '#15131E',fontSize: 30,}} />
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
};

export default Register