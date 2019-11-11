/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,ScrollView,Button,TouchableOpacity, FlatList,ImageBackground} from 'react-native';

import {Actions} from 'react-native-router-flux';



import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";




class BilimKurgu extends Component {



	


	componentWillMount() {
	
 

  	


  	


	}
	state =  {
		userz:[]
	}

	componentDidMount() {

		firebase.database().ref("movies").orderByChild("film_tur").equalTo("Bilim Kurgu").once('value', (snap) => {
			let user = [];
			snap.forEach((movies) => {
				const {film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur} = movies.val();
				user.push({film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur});

			})

			this.setState({userz: user.reverse() });
		})
	}






  render() {
    return (


      <View style={{ backgroundColor: '#050506',  }}>

      <ScrollView>
      <FlatList

      data={this.state.userz}
      renderItem={({item}) => 
      <TouchableOpacity onPress={() => Actions.detail({item})}>
      <View style={{  flex: 1,
    
    backgroundColor: 'gray',

    
    fontSize: 20,
    
    justifyContent:'center'  }} >
      
  	
  	 <ImageBackground blurRadius={1} blurStyle='dark'    source={{uri: item.film_resim }} style={{  width: '100%', height: '100%', }}>
  	 <View style={{  flexDirection: 'row' }}>
	      <Image 
	        	style={{ marginLeft: 20, width: 150 ,height: 250,   }}
	        source={{uri: item.film_resim }}

	        />


  	 <View style={{ flex: 1,backgroundColor:'rgb(0,0,0)', opacity:.54 ,alignItems:'center', justifyContent: 'center' , }}>
  <Text style={{color:'white',fontWeight: 'bold',fontSize:15 , textAlign: 'center',}}>{item.film_adi}</Text>
    
  
</View>

	        </View>
    
 	 </ImageBackground>
       

        

        

      </View>
      </TouchableOpacity>
      
      
      


  		}



  		/>

</ScrollView>

       
      

       			 
                   


             
            
            		

            


      
        
      </View>





      );
  }
}











export default BilimKurgu;




