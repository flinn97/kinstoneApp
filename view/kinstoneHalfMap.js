
import React, { Component, useEffect, useState, } from 'react';
import MapComponent from './mapComponent';

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




 



export default class KinstoneHalfMap extends Component {
  constructor(props) {
    super(props);
    
   
    this.state={
      
    };
  }



render(){
    let app=this.props.app;
    let state = app.state;
    let componentList= state.componentList;

    console.log(componentList.getList("kinstoneHalf"))
  return (
    <View style={{width:"100%", backgroundColor:"white",  height:"40%", 
          display:"flex", justifyContent:"center",
           alignItems:"center"}}>
            <Text>Kinstone Halves</Text>

           {componentList.getList("kinstoneHalf")?.length>0 &&(
        <MapComponent app={app} name="kinstoneHalf"/>)}
          </View>

);
       
}

};



