/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button, Image} from 'react-native';





const Header  = () => {
    return (
      <View style={styles.viewStyle}>


      <Image
          style={{ width: 200 , height: 200 , margin: 6}}
          source={{uri: 'https://images.vexels.com/media/users/3/138654/isolated/preview/c66fc2f0207f4af13586db39cb4d2b6c-triangle-geometric-sacred-geometry-by-vexels.png'}}

        />
        <Text style={{ color: 'black',fontSize: 25 }}> Geometri Ders Notları </Text>
       



     


      </View> 
    );
  };

  


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,

  },
  viewStyle: {
    
    
    
    justifyContent: 'center',
    alignItems: 'center',
    
    
    

  },
});

export default Header;
