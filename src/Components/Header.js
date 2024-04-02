import React, { useState } from 'react';
import { View, StyleSheet, Text  } from 'react-native';

import { Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.redBar}>
      <View style={styles.content}>

        
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <Text  style={styles.text}>Student's Portal</Text>

    
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  redBar: {
    backgroundColor: '#b01623',
    height: 80, 


  }, logo: {
    width: 50,
    height: 50,
    margin: 10,
    marginLeft: 30
  },  content: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },text: {
    color: 'white', 
    fontSize: 20, 
  },
});

export default Header;
