
import React, { Component, useEffect, useState, } from 'react';

import lion from '../assets/lion1.jpeg'
import Elements from './elements';
import SelectedElements from './selectedElements';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import CreateKinstoneHalf from './createKinstoneHalf';




 



class ElementSelect extends Component {
  constructor(props) {
    super(props);
    
   
    this.state={
      

    };
  }

  
  

    

render(){
let app=this.props.app
let state= app.state

  return (
    <View style={{width:"100%", height:"100%", backgroundColor:"white", 
          display:"flex", position: "relative", 
           alignItems:"center"}}>
            {state.elementsLoaded&&(
            <View style={{width:"100%", height:"100%", backgroundColor:"white", 
            display:"flex", 
             alignItems:"center"}}>
            {state.showKinstoneHalf?(<CreateKinstoneHalf app ={app} setBack={()=>{app.dispatch({showKinstoneHalf:false})}}/>):(
            <SelectedElements app={app}/>)}
            <Elements app={app}/>
            
            </View>)}
          
            
          </View>

);
       
}

};


export default ElementSelect;

