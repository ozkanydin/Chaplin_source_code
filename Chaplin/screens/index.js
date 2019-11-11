/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Router,Scene} from 'react-native-router-flux';
import { YellowBox,Text,View,StyleSheet,Image} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { Ionicons } from '@expo/vector-icons';







import HomeScreen from './HomeScreen';
import TwoScreen from './TwoScreen';
import Database from './Database';
import Detail from './Detail';
import Aksiyon from './Aksiyon';
import BilimKurgu from './BilimKurgu';
import Dram from './Dram';
import Fantastik from './Fantastik';
import Gerilim from './Gerilim';
import Korku from './Korku';
import Komedi from './Komedi';
import Macera from './Macera';
import Romantik from './Romantik';
import Savas from './Savas';




function TabIcon(props) {
  return (
  <View >
    <View >
      <Ionicons name="md-videocam" size={20} />
 
    </View>
  </View>
  )
}



function TabIconn(props) {
  return (
  <View >
    <View >
      <Ionicons name="md-star" size={20}  />
 
    </View>
  </View>
  )
}







let logo = require("./picture.png");
const Index = () => {

	

	return(

		<Router   navigationBarStyle={{backgroundColor: '#26354B'}} titleStyle={{fontColor : "white",alignSelf:'center'}}  >
			<Scene key='root'>
				<Scene 
				
					key='tabbar'
					tabs
					tabBarStyle={{backgroundColor: '#26354B' }}
					hideNavBar
					
					navigationBarTitleImage={logo}
					navigationBarTitleImageStyle={{ 
													position: 'absolute',
													left:0, right:0, top :0, bottom:0,
												   	marginLeft: 150,
												    width:50,height:50, 
												}}

					
					


				>
				<Scene key='osu' title='Günün Filmleri '  icon={TabIcon} >

				<Scene
				key='homescreen'			
                
				component={HomeScreen}
				title=' Aga'
				titleStyle={{color: 'white',alignSelf:'center'}}

				



				
				/>


				<Scene 

				key='twoscreen'
				component={TwoScreen}
				title='TwoScreen'

				 />
				 <Scene 

				key='database'
				component={Database}
				title='Database'
					initial
				 />

				 <Scene 

				key='detail'
				component={Detail}
				title='Detail'
					
				 />
				  <Scene 

				key='aksiyon'
				component={Aksiyon}
				title='Aksiyon'
					
				 />
				  <Scene 

				key='bilimkurgu'
				component={BilimKurgu}
				title='Bilim Kurgu'
					
				 />
				   <Scene 

				key='dram'
				component={Dram}
				title='Dram'
					
				 />
				  <Scene 

				key='fantastik'
				component={Fantastik}
				title='Fantastik'
					
				 />
				  <Scene 

				key='gerilim'
				component={Gerilim}
				title='Gerilim'
					
				 />
				  <Scene 

				key='korku'
				component={Korku}
				title='Korku'
					
				 />
				  <Scene 

				key='komedi'
				component={Komedi}
				title='Komedi'
					
				 />
				  <Scene 

				key='macera'
				component={Macera}
				title='Macera'
					
				 />
				  <Scene 

				key='romantik'
				component={Romantik}
				title='Romantik'
					
				 />

				  <Scene 

				key='savas'
				component={Savas}
				title='Savas'
					
				 />
				 

				 

				 






				</Scene>

				<Scene key='mu' title='Film Önerileri'  style={{ justifyContent: 'center', alignItems: 'center'  }} icon={TabIconn}>

				<Scene
				key='homescreen'
				component={HomeScreen}
				title='kek'
				initial
				 
				/>
				<Scene 

				key='detail'
				component={Detail}
				title='Detail'
					
				 />

				<Scene 

				key='twoscreen'
				component={TwoScreen}
				title='TwoScreen'

				 />
				 <Scene 

				key='aksiyon'
				component={Aksiyon}
				title='Aksiyon'
					
				 />
				  <Scene 

				key='bilimkurgu'
				component={BilimKurgu}
				title='Bilim Kurgu'
					
				 />
				   <Scene 

				key='dram'
				component={Dram}
				title='Dram'
					
				 />
				  <Scene 

				key='fantastik'
				component={Fantastik}
				title='Fantastik'
					
				 />
				  <Scene 

				key='gerilim'
				component={Gerilim}
				title='Gerilim'
					
				 />
				  <Scene 

				key='korku'
				component={Korku}
				title='Korku'
					
				 />
				  <Scene 

				key='komedi'
				component={Komedi}
				title='Komedi'
					
				 />
				  <Scene 

				key='macera'
				component={Macera}
				title='Macera'
					
				 />
				  <Scene 

				key='romantik'
				component={Romantik}
				title='Romantik'
					
				 />

				   <Scene 

				key='savas'
				component={Savas}
				title='Savas'
					
				 />




				</Scene>
				
				

				







			</Scene>
			</Scene>

		</Router>




		);
}



export default Index;










