
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




 



export default class SelectedElements extends Component {
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
    <View style={{width:"100%", backgroundColor:"white",  height:"40%", 
          display:"flex", justifyContent:"center",
           alignItems:"center"}}>
            <Text>Selected Elements</Text>

           {componentList.getList("selectedElement")?.length>0 &&(
        <MapComponent app={app} name="selectedElement"/>)}
          </View>

);
       
}

};



