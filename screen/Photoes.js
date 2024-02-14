import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Photoes = () => {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Ionicons name="backspace-outline" size={30} color="black" />
            <Text style={{fontSize: 20, fontWeight: '500'}}>Text to image</Text>
            <Entypo name="dots-three-vertical" size={30} color="black" />
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/pct.webp')} style={styles.image}/>
          <Image source={require('../assets/pct2.webp')} style={styles.image}/>
          <Image source={require('../assets/img3.webp')} style={styles.image}/>
          <Image source={require('../assets/img4.webp')} style={styles.image}/>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
      marginTop: 90,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 300,
  },

  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 110,
    backgroundColor:'#ffffff'
  
  },

  image: {
    width: '48%', 
    aspectRatio: 1, // Set aspect ratio to 1 to make the images square
    marginBottom: 10,
    borderRadius: 10, 
    alignSelf: 'center', 
  },
});

export default Photoes;
