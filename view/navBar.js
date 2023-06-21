
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




 



export default class NavBar extends Component {
  constructor(props) {
    super(props);
    
   
    this.state={
      
    };
  }



render(){
    let app=this.props.app;
    let state = app.state;
    let componentList= state.componentList;


  return (
    <View style={{width:"100%" }}>
        <TouchableOpacity style={{width:40}} onPress={()=>{app.dispatch({switchCase: "elementSelect"})}}><Text>SE</Text></TouchableOpacity>
        <TouchableOpacity  style={{width:40}} onPress={()=>{app.dispatch({switchCase:"kinstoneHalfSelect"})}}><Text>SKH</Text></TouchableOpacity>
        {/* create on press that with dispatch a new switchCase SE= selectElements SKH = selectKinstoneHalf */}
          </View>

);
       
}

};



