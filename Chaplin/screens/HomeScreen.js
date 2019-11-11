/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,ScrollView,Button,TouchableOpacity} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {Actions} from 'react-native-router-flux';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

class HomeScreen extends Component {
  render() {
    return (
    	<ScrollView style={{backgroundColor:'#2F3549'}}>
      <AdMobBanner
  bannerSize="smartBannerPortrait"
  adUnitID="ca-app-pub-3251011522663741/4838031937"
  
  onDidFailToReceiveAdWithError={this.bannerError} />
      <View style={{ width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap', alignSelf:'center',justifyContent: 'center',blurRadius: 10,alignItems: 'center' ,backgroundColor:'#2F3549' }}>
      
      <View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}> 
		<TouchableOpacity onPress={() => Actions.aksiyon()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Aksiyon </Text>
 		</TouchableOpacity>
      </View>
     
      <View style={{  width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}>
        	 <TouchableOpacity  onPress={() => Actions.bilimkurgu()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Bilim Kurgu </Text>
			</TouchableOpacity>
       </View>


      <View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}> 
      	<TouchableOpacity onPress={() => Actions.dram()}>
      	<Text  style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Dram </Text>
      	</TouchableOpacity>
      </View>

      <View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}>
        <TouchableOpacity onPress={() => Actions.fantastik()} >
      	<Text  style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Fantastik </Text>
      	</TouchableOpacity>
      </View>

      	<View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}> 
      	<TouchableOpacity onPress={() => Actions.gerilim()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Gerilim </Text>
      	</TouchableOpacity>
      </View>

      <View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}>
        <TouchableOpacity  onPress={() => Actions.korku()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Korku </Text>
      	</TouchableOpacity>
      </View>
      <View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}> 
        <TouchableOpacity onPress={() => Actions.komedi()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Komedi </Text>
      	</TouchableOpacity>
      </View>
      <View blurRadius={10} style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}> 
        <TouchableOpacity onPress={() => Actions.macera()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Macera </Text>
      	</TouchableOpacity>
      </View>
      <View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}> 
        <TouchableOpacity onPress={() => Actions.romantik()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Romantik </Text>
      	</TouchableOpacity>
      </View>
      <View style={{ width: '48%', 
        margin: '1%', 
        aspectRatio: 1,backgroundColor: 'black',borderRadius: 10,borderWidth: 2,borderColor: 'white',justifyContent: 'center',alignItems:'center'}}> 
        <TouchableOpacity onPress={() => Actions.savas()}>
      	<Text style= {{ color: 'white',justifyContent: 'center',alignItems:'center',fontSize: 25}}> Savaş </Text>
      	</TouchableOpacity>
      </View>

           


      
        
      </View>

</ScrollView>



      );
  }
}











export default HomeScreen;




