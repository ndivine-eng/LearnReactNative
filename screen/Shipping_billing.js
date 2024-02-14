import React from "react";
import { StatusBar } from "expo-status-bar";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { StyleSheet, Text, View,TouchableOpacity, TextInput } from "react-native";


export const Shipping_billing = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* Home */}

            <View style={styles.homediv}>
                <View style={styles.home}>
                <FontAwesome6 name="house-chimney-window" size={30} color="black" style={{color:'#FFA447'}}></FontAwesome6>
                <Text style={{fontSize: 24, fontWeight: '800'}}>Home</Text>
                <Feather name="edit-3" size={30} color="black" style={{color:'#59B4C3'}}></Feather>
                </View>
                <View style={styles.sunamganj}>
                    <Text style={{fontSize: 17, fontWeight: '500'}}>Sunamganj</Text>
                    <Text style={{fontSize: 17, fontWeight: 'italic'}}>+971-50-1234567</Text>
                </View>
                <View>
                    <Text>Room #1 - Ground Floor, Al Najoun Building, 24 B
                        Street, Sunamganj, Dubai - United Arab Emirates
                    </Text>
                </View>

              

            </View>

              {/* office */}

            <View style={styles.officedev}>
                <View style={styles.office}>
                <FontAwesomeIcon name="home" size={30} color="black" style={{color:'#B31312'}}></FontAwesomeIcon>
                <Text style={{fontSize: 24, fontWeight: '800'}}>Office</Text>
                <Feather name="edit-3" size={30} color="black" ></Feather>
                </View>

                <View style={styles.sunamganj}>
                    <Text style={{fontSize: 17, fontWeight: '500'}}>Sunamganj</Text>
                    <Text style={{fontSize: 17, fontWeight: 'italic'}}>+971-50-1234567</Text>
                </View>
                <View>
                    <Text>Room #1 - Ground Floor, Al Najoun Building, 24 B
                        Street, Sunamganj, Dubai - United Arab Emirates
                    </Text>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 300, padding: 10, marginTop: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Add new shipping address</Text>
                <Octicons name="diff-added" size={30} color="black" ></Octicons>

            </View>
            <View>
            <View>
                <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 10}}>Personal info</Text>
            
            </View>
            <View style={styles.person}>
                <Feather name="phone-call" size={30} color="black"></Feather>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Billing to the home address</Text>

            </View>
            <View style={styles.person}>
                <Feather name="phone-call" size={30} color="black"></Feather>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>07893933</Text>

            </View>
            <View style={styles.person}>
                <Feather name="phone-call" size={30} color="black"></Feather>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>divinejh@gmail.com</Text>

            </View>

            </View>
            <View>
                <TouchableOpacity>
                    <Text style={{fontSize: 15, fontWeight: 'bold',backgroundColor:'skyblue' }}>Continue</Text>
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
    homediv: {
        marginTop: 40,
        borderColor:'#59B4C3',
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        height: 230,
        padding: 15,
        backgroundColor:'FFFADD',
        
    },
    home: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        
    },
    sunamganj: {
        marginTop: 10,
        marginBottom: 20,
        
    },

    officedev: {
        marginTop: 20,
        width: 300,
        height: 230,
        padding: 15,
        borderColor:'#f7f7f7',
        borderRadius: 10,
        
        backgroundColor:'#FFDFB7',
        
    },

    office: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        
    },
    person: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }
});

export default Shipping_billing
