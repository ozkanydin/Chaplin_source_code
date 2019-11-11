/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Alert,RefreshControl , Image,ScrollView,Button,NetInfo,TouchableOpacity,AsyncStorage, FlatList,ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
console.disableYellowBox = true;
import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import PropTypes from 'prop-types';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';



class Database extends Component {



  constructor(props) {
    super(props);
    this.state = {
      gun: '',
      
      gunu: '',
      r1: '',
      r2:'',
      r3:'',
      ra1: 0,
      ra2:'',
      ra3:'',
      say: 0,
       refreshing: false,

      



    }
  }

  state = {
    isConnected: null,
  };

  
  _onRefresh = () => {
    this.setState({refreshing: true});
    firebase.database().ref("movies").orderByChild("film_gun").once('value', (snap) => {
      let user = [];
      
      snap.forEach((movies) => {
        const {film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur} = movies.val();
        if(film_gun == this.state.r1 || film_gun == this.state.r2 ||film_gun == this.state.r3 ){
        user.push({film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur});
        }
         

      })


      this.setState({userz: user.reverse() });
    })
    .then(() => {
      this.setState({refreshing: false});
    });
  }


  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };

  



fetchData(){
  firebase.database().ref("movies").orderByChild("film_gun").once('value', (snap) => {
      let user = [];
      
      snap.forEach((movies) => {
        const {film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur} = movies.val();
        if(film_gun == this.state.r1 || film_gun == this.state.r2 ||film_gun == this.state.r3 ){
        user.push({film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur});
        }
         

      })


      this.setState({userz: user.reverse() });
    })
}
  





	




	componentWillMount() {
		var config = {
    apiKey: "AIzaSyCMyOibM1YvABsVBGfo3RMSvV1DTVN7yi0",
    authDomain: "chaplin-b51f2.firebaseapp.com",
    databaseURL: "https://chaplin-b51f2.firebaseio.com",
    projectId: "chaplin-b51f2",
    storageBucket: "chaplin-b51f2.appspot.com",
    messagingSenderId: "1085507296118"
  };
   firebase.initializeApp(config);
  	if (!firebase.apps.length) {
    firebase.initializeApp(config);

}
 

  	NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );


  	


	}
	state =  {
		userz:[]
	}



  
	componentDidMount() {
    
NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );


var today = new Date();
gunu=today.getDate() + "."+ parseInt(today.getMonth()+1) +"."+ today.getFullYear();



firebase.database().ref("query").orderByChild("gun").equalTo(gunu).once('value', (snap) => {
      let user = [];
      
      snap.forEach((query) => {

        const {r1,r2,r3,gun} = query.val();
        this.setState({r1: r1 });
        this.setState({r2: r2 });
        this.setState({gun: gun });
        this.setState({r3: r3 });
        
         

      })
      

      
    })








  
 
    firebase.database().ref("movies").orderByChild("film_gun").once('value', (snap) => {
      let user = [];
      if(this.state.gun != gunu){
        var rand1 = Math.floor(Math.random() * Math.floor(94));
var rand2 = Math.floor(Math.random() * Math.floor(94));
var rand3 = Math.floor(Math.random() * Math.floor(94));

firebase.database().ref('/query').push({
                  r1: rand1,
                  r2: rand2,
                  r3: rand3,
                  gun: gunu,
                  
                 
                 });

       
      }
      snap.forEach((movies) => {
        const {film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur} = movies.val();
        if(film_gun == this.state.r1 || film_gun == this.state.r2 ||film_gun == this.state.r3 ){
        user.push({film_aciklama,film_adi,film_fragman,film_gun,film_resim,film_tarih,film_tur});
        }
         

      })


      this.setState({userz: user.reverse() });
    })
    
   

   


		
	}

 




  render() {

    

     
    return (


      <View style={{ backgroundColor: '#050506',  }}>

      

      
      

      <ScrollView

      refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        } 

      >
<Text style={{color: 'white',textAlign:'center'}}>{this.state.isConnected ? '' : 'Lütfen internete bağlanınız.'}</Text>
      <AdMobBanner
  bannerSize="smartBannerPortrait"
  adUnitID="ca-app-pub-3251011522663741/4838031937"
  
  onDidFailToReceiveAdWithError={this.bannerError} />

      <FlatList

      data={this.state.userz}
      renderItem={({item}) => 
      <TouchableOpacity onPress={() => Actions.detail({item})}>
      <View style={{  flex: 1,
    
    backgroundColor: 'gray',

    
    
    
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











export default Database;




