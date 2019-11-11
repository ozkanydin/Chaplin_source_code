/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Dimensions, View, Image,Linking,WebView,ScrollView,Button,TouchableOpacity,ImageBackground} from 'react-native';


import {Actions} from 'react-native-router-flux';
const {width,height} = Dimensions.get('window');



class Detail extends Component {

state = {
	info: {}

}

componentDidMount ()
{
	this.setState({info: this.props.item });
}


  render() {
    return (

      <View style={{ flex: 1, backgroundColor: 'black',  }}>
 		
      	<ImageBackground   blurRadius={5} source={{uri:this.state.info.film_resim}} style={{width: '100%', height: '100%'}}>
    		

    		<ScrollView >
            <View style={{ backgroundColor:'black', width: 250, borderRadius:10, height: 900,margin :10,alignSelf:'center',marginTop:50,}}>

            	<Image style={{width: 250,height:350,}} source={{uri:this.state.info.film_resim}} />
            	<Text style={{marginTop: 10,alignSelf:'center',color: 'white',fontSize: 20,fontWeight: 'bold',}}> {this.state.info.film_adi} </Text>
							
				<Text style={{color: 'white',fontSize:15,alignSelf:'center'}}>{this.state.info.film_tarih}  {this.state.info.film_tur}</Text>
            	<Text style={{marginTop:8}}> </Text>
            	<Text style={{ textAlign:'center',color: 'white',fontSize:12,alignSelf:'center'}}>{this.state.info.film_aciklama}</Text>
              <View style={{marginTop: 20 ,margin: 10, borderRadius: 10}}>
              <Button title="Fragman " color= '#26354B' buttonStyle={{borderRadius: 10}}   onPress={ ()=>{ Linking.openURL(this.state.info.film_fragman)}} />      	
            	

              <View style={{marginTop: 15}}>
              

            </View>

              </View>

            </View>

        	</ScrollView>

  		</ImageBackground>
            
      </View>





      );
  }
}











export default Detail;




