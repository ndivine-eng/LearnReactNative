import React from "react";
import { StatusBar } from "expo-status-bar";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { StyleSheet, Text, View, } from "react-native";


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

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 300, padding: 15, marginTop: 20}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10}}>Add new shipping address</Text>
                <Octicons name="diff-added" size={30} color="black" ></Octicons>

            </View>
            <View>
                <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 10}}>Personal info</Text>
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
        marginTop: 60,
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
        marginTop: 20,
        
    },
    sunamganj: {
        marginTop: 10,
        marginBottom: 20,
        
    },

    officedev: {
        marginTop: 40,
        width: 300,
        height: 230,
        padding: 15,
        backgroundColor:'FFFADD',
        
    },

    office: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        
    }
});

export default Shipping_billing
